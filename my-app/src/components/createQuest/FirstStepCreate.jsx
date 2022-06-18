import {Box , Button , TextField , Radio , RadioGroup , FormControlLabel , Checkbox } from "@mui/material"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { QUEST_TYPES } from "../../constants/types";


const FirstStepCreate = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {values, handleSubmit, handleChange} = useFormik({
        initialValues: {
            name: "",
            description: "",
            isPublic: true,
            writeOffControlMode: false,
            timeLimit: 0
        },
        onSubmit: (values) => {
            dispatch({type: QUEST_TYPES.CREATE, payload: values, navigate});
        }
    });

    return(
        <main>
            <section className="step-create">
                <div className="container">
                    <h2 className="step-create__title">Давайте подумаємо про налаштування квесту</h2>
                    <Box sx={{width:400 , margin: "40px auto"}}>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="questName"
                            name="name"
                            label="Quest name"
                            type="text"
                            variant="filled"
                            sx={{background : "white" , borderRadius : "14px" , marginBottom : "14px"}}
                            onChange={handleChange}
                            value={values.name}
                            fullWidth
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="questDescription"
                            name="description"
                            label="Quest description"
                            type="text"
                            variant="filled"
                            sx={{background : "white" , borderRadius : "14px" , marginBottom : "14px"}}
                            onChange={handleChange}
                            value={values.description}
                            fullWidth
                        />
                        <h3>Тип квесту</h3>
                        <RadioGroup
                            name="isPublic"
                            sx={{flexDirection:"row" , justifyContent:"space-between"}}
                            onChange={handleChange}
                            value={values.isPublic}
                        >
                            <FormControlLabel control={<Radio />} value={true} label="public" />
                            <FormControlLabel control={<Radio />} value={false} label="private" />
                        </RadioGroup>
                        <FormControlLabel name="writeOffControlMode" control={<Checkbox checked={values.writeOffControlMode} />} onChange={handleChange} label="without cheating" />
                        <h3>Час (хв)</h3>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="questTime"
                            name="timeLimit"
                            type="number"
                            variant="filled"
                            sx={{background : "white" , borderRadius : "14px" , margin : "16px 0"}}
                            onChange={handleChange}
                            value={values.timeLimit}
                            fullWidth
                        />
                        <Button variant="contained" onClick={handleSubmit}>Наступний крок</Button>
                    </Box>
                </div>
            </section>
        </main>
    )
}

export default FirstStepCreate