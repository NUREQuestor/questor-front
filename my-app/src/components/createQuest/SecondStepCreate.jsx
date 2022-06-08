import {Box , Button , TextField , Radio , RadioGroup , FormControlLabel , ButtonGroup} from "@mui/material"
import { useNavigate } from "react-router-dom";

const SecondStepCreate = () => {
    const navigate = useNavigate();
    return(
        <main>
            <section className="step-create">
                <div className="container">
                    <h2 className="step-create__title">Давайте подумаємо про налаштування 1 питання</h2>
                    <Box sx={{width:400 , margin: "40px auto"}}>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="questionTitle"
                            name="questionTitle"
                            label="Question title"
                            type="text"
                            variant="filled"
                            sx={{background : "white" , borderRadius : "14px" , marginBottom : "14px"}}
                            fullWidth
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="questionMark"
                            name="questionMark"
                            label="Question mark"
                            type="number"
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
                        <h3>Тип питання</h3>
                        <RadioGroup
                            name="radio-buttons-type"
                            sx={{flexDirection:"row" , justifyContent:"space-between"}}
                        >
                            <FormControlLabel value="Quiz" control={<Radio />} label="Quiz" />
                            <FormControlLabel value="Text response" control={<Radio />} label="Text response" />
                            <FormControlLabel value="Multi-quiz" control={<Radio />} label="Multi-quiz" />
                        </RadioGroup>
                        <ButtonGroup variant="outlined" sx={{marginTop: "40px"}}>
                            <Button  variant="contained" onClick={() => navigate("/first_step_create")}>Повернутися</Button>
                            <Button  variant="contained" onClick={() => navigate("/third_step_create")}>Наступний крок</Button>
                            <Button  variant="contained" onClick={() => navigate("/last_step_create")}>Кінець</Button>
                        </ButtonGroup>
                    </Box>
                </div>
            </section>
        </main>
    )
}

export default SecondStepCreate