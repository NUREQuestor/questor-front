import {Button, ButtonGroup, TextField} from "@mui/material"
import {useNavigate} from "react-router-dom";

const CompletionQuest = () => {
    const navigate = useNavigate();
    return(
        <main>
            <section className="completion-quest">
                <div className="container">
                    <h2 className="completion-quest__title">Питання</h2>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="questionTitle"
                        name="questionName"
                        label="Answer"
                        type="text"
                        variant="filled"
                        sx={{background : "white" , borderRadius : "14px" , marginBottom : "14px"}}
                        fullWidth
                    />
                    <ButtonGroup variant="outlined" sx={{display: "block" , margin: "50px auto"}}>
                        <Button variant="contained"  onClick={() => navigate("/completion-quest")}>Наступне питання</Button>
                        <Button  variant="contained" onClick={() => navigate("/result-quest")}>Завершити</Button>
                    </ButtonGroup>
                </div>
            </section>
        </main>
    )
}

export default CompletionQuest