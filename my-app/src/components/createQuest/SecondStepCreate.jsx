import {Box , Button , TextField , Radio , RadioGroup , FormControlLabel , ButtonGroup} from "@mui/material" 
import { useNavigate, useLocation } from "react-router-dom"; 
import { useFormik } from "formik"; 
import { QUESTION_TYPES } from "../../constants/types"; 
import { useDispatch, useSelector } from "react-redux"; 
import { QUESTION_TYPE } from "../../constants"; 
import { getCreatedQuestions, getConfigSettingsCreatedQuestion } from "../../redux/selectors"; 
 
 
const SecondStepCreate = () => { 
    const dispatch = useDispatch(); 
    const navigate = useNavigate(); 
    const createdQuestions = useSelector(getCreatedQuestions); 
    const { state } = useLocation(); 
    const settingsQuestions = useSelector(getConfigSettingsCreatedQuestion); 
 
    const { values, handleSubmit, handleChange } = useFormik({ 
        initialValues: { 
            title: "", 
            linkToPhoto: "", 
            pointPerQuestion: 0, 
            qeustionType: 0, 
            ...(state?.isCreate ? {} : settingsQuestions) 
        }, 
        onSubmit: (values) => { 
            if(state?.isCreate) { 
                dispatch({type: QUESTION_TYPES.CREATE, payload: values, navigate}); 
            } 
            else { 
                dispatch({type: QUESTION_TYPES.UPDATE, payload: values, navigate}); 
            } 
        } 
    }); 
 
    return( 
        <main> 
            <section className="step-create"> 
                <div className="container"> 
                    <h2 className="step-create__title">Давайте подумаємо про налаштування {createdQuestions.length + (state?.isCreate ? 1 : 0)} питання</h2> 
                    <Box sx={{width:400 , margin: "40px auto"}}> 
                        <TextField 
                            autoFocus 
                            margin="dense" 
                            id="questionTitle" 
                            name="title" 
                            label="Question title" 
                            type="text" 
                            variant="filled" 
                            sx={{background : "white" , borderRadius : "14px" , marginBottom : "14px"}} 
                            onChange={handleChange} 
                            value={values.title} 
                            fullWidth 
                        /> 
                        <TextField 
                            autoFocus 
                            margin="dense" 
                            id="questionMark" 
                            name="pointPerQuestion" 
                            label="Question mark" 
                            type="number" 
                            variant="filled" 
                            sx={{background : "white" , borderRadius : "14px" , marginBottom : "14px"}} 
                            onChange={handleChange} 
                            value={values.pointPerQuestion} 
                            fullWidth 
                        /> 
                        {values.linkToPhoto ? <img 
                            src={values.linkToPhoto} 
                            alt="Картинка до питання" 
                        /> : null}
                        <TextField 
                            autoFocus 
                            margin="dense" 
                            id="questionMark" 
                            name="linkToPhoto" 
                            label="Question picture" 
                            type="text" 
                            variant="filled" 
                            sx={{background : "white" , borderRadius : "14px" , marginBottom : "14px"}} 
                            onChange={handleChange} 
                            value={values.linkToPhoto} 
                            fullWidth 
                        /> 
                        <h3>Тип питання</h3> 
                        <RadioGroup 
                            name="qeustionType" 
                            sx={{flexDirection:"row" , justifyContent:"space-between"}} 
                            onChange={handleChange}
                            value={values.qeustionType} 
                            > 
                                <FormControlLabel value={QUESTION_TYPE.Quiz} control={<Radio />} label="Quiz" /> 
                                <FormControlLabel value={QUESTION_TYPE.TextResponse} control={<Radio />} label="Text response" /> 
                                <FormControlLabel value={QUESTION_TYPE.MultiQuiz} control={<Radio />} label="Multi-quiz" /> 
                            </RadioGroup> 
                            <ButtonGroup variant="outlined" sx={{marginTop: "40px"}}> 
                                <Button  variant="contained" onClick={() => navigate("/first_step_create")}>Повернутися</Button> 
                                <Button  variant="contained" onClick={handleSubmit}>Наступний крок</Button> 
                                {createdQuestions.length ? <Button  variant="contained" onClick={() => navigate("/last_step_create")}>Кінець</Button> : null} 
                            </ButtonGroup> 
                        </Box> 
                    </div> 
                </section> 
            </main> 
        ) 
    } 
     
    export default SecondStepCreate