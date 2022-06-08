import {Box, Button, TextField, Radio, RadioGroup, FormControlLabel, ButtonGroup} from "@mui/material"
import {useNavigate} from "react-router-dom";

const ThirdStepCreate = () => {
    const navigate = useNavigate();
    return(
        <main>
            <section className="step-create">
                <div className="container">
                    <h2 className="step-create__title">Налаштування відповіді до 1 питання</h2>
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
                        <RadioGroup
                            name="radio-button-correct-answer"
                        >
                            <FormControlLabel value="public" control={<Radio />} label="Correct answer" />
                        </RadioGroup>
                        <ButtonGroup variant="outlined" sx={{marginTop: "40px" , display:"flex" , justifyContent:"space-between"}}>
                            <Button  variant="contained" onClick={() => navigate("/second_step_create")}>Повернутися</Button>
                            <Button  variant="contained" onClick={() => navigate("/second_step_create")}>Наступний крок</Button>
                        </ButtonGroup>
                    </Box>
                </div>
            </section>
        </main>
    )
}

export default ThirdStepCreate