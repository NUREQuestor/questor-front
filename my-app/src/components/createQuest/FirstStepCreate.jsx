import {Box , Button , TextField , Radio , RadioGroup , FormControlLabel} from "@mui/material"
import {useNavigate} from "react-router-dom";

const FirstStepCreate = () => {
    const navigate = useNavigate();
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
                            name="questName"
                            label="Quest name"
                            type="text"
                            variant="filled"
                            sx={{background : "white" , borderRadius : "14px" , marginBottom : "14px"}}
                            fullWidth
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="questDescription"
                            name="questDescription"
                            label="Quest description"
                            type="text"
                            variant="filled"
                            sx={{background : "white" , borderRadius : "14px" , marginBottom : "14px"}}
                            fullWidth
                        />
                        <h3>Тип квесту</h3>
                        <RadioGroup
                            defaultValue="public"
                            name="radio-buttons-type"
                            sx={{flexDirection:"row" , justifyContent:"space-between"}}
                        >
                            <FormControlLabel value="public" control={<Radio />} label="public" />
                            <FormControlLabel value="private" control={<Radio />} label="private" />
                        </RadioGroup>
                        <RadioGroup
                            name="radio-buttons-check"
                            sx={{flexDirection:"row" , justifyContent:"space-between"}}
                        >
                            <FormControlLabel value="without cheating" control={<Radio />} label="without cheating" />
                        </RadioGroup>
                        <h3>Час</h3>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="questTime"
                            name="questTime"
                            type="time"
                            variant="filled"
                            sx={{background : "white" , borderRadius : "14px" , margin : "16px 0"}}
                            fullWidth
                        />
                        <Button variant="contained" onClick={() => navigate("/second_step_create")}>Наступний крок</Button>
                    </Box>
                </div>
            </section>
        </main>
    )
}

export default FirstStepCreate