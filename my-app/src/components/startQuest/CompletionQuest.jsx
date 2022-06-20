import { useMemo, useState, useEffect } from "react";
import { Button, ButtonGroup, TextField, RadioGroup, FormControlLabel, Checkbox, Radio } from "@mui/material"
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux"; 
import { getQuest } from "../../redux/selectors";
import { QUESTION_TYPE } from "../../constants";

const CompletionQuest = () => {
    const navigate = useNavigate();
    const quest = useSelector(getQuest);
    const { state } = useLocation();
    const question = quest.questions[state.indexQuestion];
    const { answers } = question;

    console.log(quest);

    const [valueAnswer, setValueAnswer] = useState();

    useEffect(() => {
        setValueAnswer(question.qeustionType === QUESTION_TYPE.MultiQuiz ? [] : "");
    }, [question]) 

    const formAnswers = useMemo(() => {
        switch(question.qeustionType) {
            case QUESTION_TYPE.Quiz:
                return (
                    <RadioGroup
                            sx={{flexDirection:"row" , justifyContent:"space-between"}}
                            onChange={(e) => setValueAnswer(e.target.value)}
                        >
                            {question.answers.map(({id, value}) => <FormControlLabel control={<Radio />} value={id} label={value} />)}
                    </RadioGroup>
                )
            case QUESTION_TYPE.MultiQuiz:
                if(typeof valueAnswer === "string") {
                    return "Wait..."
                }
                    
                return (
                    <>
                        {question.answers.map(({id, value}) => <FormControlLabel 
                            control={<Checkbox checked={valueAnswer?.some((el) => el === id)} />} 
                            onChange={() => {
                                if(valueAnswer?.some((el) => el === id)) {
                                    setValueAnswer(valueAnswer?.filter((el) => el !== id));
                                }
                                else {
                                    setValueAnswer([...valueAnswer, id]);
                                }
                            }} 
                            label={value}
                        />)}
                    </>
                )
            case QUESTION_TYPE.TextResponse:
                return (<TextField
                    margin="dense"
                    label="Answer"
                    type="text"
                    variant="filled"
                    sx={{background : "white" , borderRadius : "14px" , marginBottom : "14px"}}
                    value={valueAnswer}
                    onChange={(e) => setValueAnswer(e.target.value)}
                    fullWidth
                />)
            default:
                break;
        }

        return <p>Unknown type question</p>
    }, [question, valueAnswer]);

    const computedMark = useMemo(() => {
        switch(question.qeustionType) {
            case QUESTION_TYPE.Quiz:
                const chooseIsCorrect = answers.some(({isCorrect, id}) => isCorrect && id === Number(valueAnswer))

                return chooseIsCorrect ? question.pointsPerQuestion : 0;
            case QUESTION_TYPE.MultiQuiz:
                if(typeof valueAnswer === "string") {
                    return 0;
                }

                const corrects = answers.filter(({isCorrect}) => isCorrect);
                const countIncorrect = answers.length - corrects.length;

                const result = valueAnswer.reduce((accum, value) => corrects.some(({id}) => id === value) ? {...accum, correct: accum.correct + 1} : {...accum, incorrect: accum.incorrect + 1}, {correct: 0, incorrect: 0});

                const perCentCorrect = result.correct / corrects.length;
                const perCentIncorrect = result.incorrect / countIncorrect;

                const perCentResult = perCentCorrect - perCentIncorrect;

                const preparePerCentResult = perCentResult < 0 ? 0 : perCentResult;

                return question.pointsPerQuestion * preparePerCentResult;
            case QUESTION_TYPE.TextResponse:
                return valueAnswer === answers?.[0].value ? question.pointsPerQuestion : 0;
            default:
                break;
        }

        return 0;
    }, [question, valueAnswer])

    console.log(answers, question, quest);

    return(
        <main>
            <section className="completion-quest">
                <div className="container">
                    <h2 className="completion-quest__title">{question.title}</h2>
                    {formAnswers}
                    <ButtonGroup variant="outlined" sx={{display: "block" , margin: "50px auto"}}>
                        {quest.questions.length - 1 !== state.indexQuestion && <Button variant="contained"  onClick={() => navigate("/completion-quest", {
                            state: {
                                ...state,
                                indexQuestion: state.indexQuestion + 1,
                                mark: state.mark + computedMark
                            }
                        })}>Наступне питання</Button>}
                        <Button  variant="contained" onClick={() => navigate("/result-quest")}>Завершити</Button>
                    </ButtonGroup>
                    <p>MARK: {computedMark}</p>
                    <p>ALL MARK: {state.mark}</p>
                </div>
            </section>
        </main>
    )
}

export default CompletionQuest