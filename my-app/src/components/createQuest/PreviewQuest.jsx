import {useEffect} from "react";
import {Box, Button, TextField, ButtonGroup} from "@mui/material";
import {useNavigate, useParams} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getQuest } from "../../redux/selectors";
import { QUEST_TYPES } from "../../constants/types";
import { QUESTION_TYPE } from "../../constants";

const codeTypeToString = (code) => {
    switch(code) {
        case QUESTION_TYPE.Quiz:
            return "Quiz";
        case QUESTION_TYPE.MultiQuiz:
            return "Multi-Quiz";
        case QUESTION_TYPE.TextResponse:
            return "Text response"
        default:
            break;
    }
    return "Unknown "
}

const PreviewQuest = () => {
    const dispatch = useDispatch(); 
    const navigate = useNavigate();
    const {id} = useParams();
    const quest = useSelector(getQuest);

    useEffect(() => { 
        dispatch({ type: QUEST_TYPES.GET, payload: { id } }); 
    }, [id]) 

    if(!quest.id) {
        return <div>loading</div> 
    } 

    console.log(quest);

    return(
        <main>
            <section className="preview">
                <div className="container">
                    <h2 className="preview__title">Тепер ви можете переглянути створенний квест</h2>
                    <Box sx={{width:400 , margin: "40px auto"}}>
                        <h3>{quest.name}</h3>
                        <p>{quest.description}</p>
                        <p>isPublic {quest.isPublic ? "YES" : "NO"}</p>
                        <p>cheat {quest.writeOffControlMode ? "YES" : "NO"}</p>
                        <p>time {quest.timeLimit}</p>
                        <p>Питання</p>
                        {quest.questions.map((question) => (
                            <div key={question.id}>
                                <p>{question.title}</p>
                                {question.linkTophoto ? <img 
                                    src={question.linkTophoto} 
                                    alt="Картинка до питання" 
                                /> : null}
                                <p>points {question.pointsPerQuestion}</p>
                                <p>type {codeTypeToString(question.qeustionType)}</p>
                                <p>Відповіді</p>
                                {question.answers.map((answer) => (
                                    <p>{answer.value} {answer.isCorrect && "(correct)"}</p>
                                ))}
                            </div>
                        ))}
                        <p>Посилання</p>
                        <p>{window.origin}/quest/{quest.id}</p>
                        <Button  variant="contained" onClick={() => navigate("/profile")}>Повернутися до профілю</Button>
                    </Box>
                </div>
            </section>
        </main>
    )
}

export default PreviewQuest;