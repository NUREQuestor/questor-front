import { Fragment, useMemo } from "react";
import {Box, Button, TextField, Checkbox, FormControlLabel, ButtonGroup} from "@mui/material"
import {useNavigate} from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { getConfigSettingsCreatedQuestion, getCreatedQuestions } from "../../redux/selectors";
import { ANSWER_TYPES } from "../../constants/types";
import { QUESTION_TYPE } from "../../constants" 

const ThirdStepCreate = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { qeustionType } = useSelector(getConfigSettingsCreatedQuestion);
    const createdQuestions = useSelector(getCreatedQuestions);

    const { values, handleSubmit, handleChange, setFieldValue } = useFormik({
        initialValues: {
            answers: [
                {
                    value: "",
                    isCorrect: Number(qeustionType) === QUESTION_TYPE.TextResponse
                }
            ]
        },
        onSubmit: (values) => {
            dispatch({type: ANSWER_TYPES.CREATE_MANY, payload: values, navigate});
        }
    });

    const canNextStep = useMemo(() => values.answers.some(({isCorrect}) => isCorrect), [values])

    const hideIsCorrect = useMemo(() => {
        if(Number(qeustionType) === QUESTION_TYPE.Quiz) {
            return values.answers.some(({isCorrect}) => isCorrect);
        }

        return false;
    }, [values, qeustionType]);

    return(
        <main>
            <section className="step-create">
                <div className="container">
                    <h2 className="step-create__title">{t("SettingTheAnswerTo")} {createdQuestions.length} {t("Question")}</h2>
                    <Box sx={{width:400 , margin: "40px auto"}}>
                        {
                            values.answers.map((answer, index) => (
                                <Fragment key={index}>
                                    <TextField
                                        autoFocus={false}
                                        margin="dense"
                                        id="questName"
                                        name={`answers.${index}.value`}
                                        label="Answer name"
                                        type="text"
                                        variant="filled"
                                        sx={{background : "white" , borderRadius : "14px" , marginBottom : "14px"}}
                                        onChange={(e) => {
                                            if(values.answers.length - 1 === index && Number(qeustionType) !== QUESTION_TYPE.TextResponse) {
                                                setFieldValue("answers", [...values.answers, {
                                                    value: "",
                                                    isCorrect: false
                                                }])
                                            }
                                            handleChange(e)
                                        }}
                                        value={values.answers[index].value}
                                        fullWidth
                                    />
                                    {(!hideIsCorrect || values.answers[index].isCorrect) && <FormControlLabel 
                                        name={`answers.${index}.isCorrect`} 
                                        control={<Checkbox checked={values.answers[index].isCorrect}  />} 
                                        onChange={handleChange} 
                                        label="Correct answer" 
                                    />}
                                </Fragment>    
                            ))       
                        }
                        <ButtonGroup variant="outlined" sx={{marginTop: "40px" , display:"flex" , justifyContent:"space-between"}}>
                            <Button  variant="contained" onClick={() => navigate("/second_step_create")}>{t("Return")}</Button>
                            {canNextStep ? <Button  variant="contained" onClick={handleSubmit}>{t("NextStep")}</Button> : null}
                        </ButtonGroup>
                    </Box>
                </div>
            </section>
        </main>
    )
}

export default ThirdStepCreate