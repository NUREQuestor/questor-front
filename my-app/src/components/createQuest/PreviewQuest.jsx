import {useEffect} from "react";
import {Box, Button, TextField, ButtonGroup} from "@mui/material";
import { useTranslation } from 'react-i18next';
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
    const { t } = useTranslation();
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
                    <h2 className="preview__title">{t("ViewTheCreatedQuest")}</h2>
                    <Box>
                        <h3 className="preview__heading">{t("Title")} {quest.name}</h3>
                        <p className="preview__description">{t("Description")} {quest.description}</p>
                        <p className="preview__public">{t("Public")} {quest.isPublic ? "YES" : "NO"}</p>
                        <p className="preview__cheat">{t("Cheat")} {quest.writeOffControlMode ? "NO" : "Yes"}</p>
                        <p className="preview__time">{t("Time")} {quest.timeLimit}</p>
                        <h2 className="preview__question">{t("Question")}</h2>
                        {quest.questions.map((question) => (
                            <div className="question-block" key={question.id}>
                                <h3 className="question-block__title">{t("QuestionTitle")} {question.title}</h3>
                                {question.linkTophoto ? <img 
                                    src={question.linkTophoto} 
                                    alt="Картинка до питання"
                                    className="question-block__image" 
                                /> : null}
                                <p className="question-block__points">{t("Points")} {question.pointsPerQuestion}</p>
                                <p className="question-block__type">{t("TypeQuestion")} {codeTypeToString(question.qeustionType)}</p>
                                <h3 className="question-block__answers">{t("Answers")}</h3>
                                {question.answers.map((answer) => (
                                    <p className="question-block__answer">{answer.value} {answer.isCorrect && "(correct)"}</p>
                                ))}
                            </div>
                        ))}
                        <p className="preview__links">{t("Link")}</p>
                        <p className="preview__link">{window.origin}/quest/{quest.id}</p>
                        <Button  sx={{marginTop: "30px"}} variant="contained" onClick={() => navigate("/profile")}>{t("GoToProfile")}</Button>
                    </Box>
                </div>
            </section>
        </main>
    )
}

export default PreviewQuest;