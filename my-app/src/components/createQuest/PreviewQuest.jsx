import {Box, Button, TextField, ButtonGroup} from "@mui/material"
import {useNavigate} from "react-router-dom";
import { useSelector } from "react-redux";
import { getConfigCreatedQuestId } from "../../redux/selectors";


const PreviewQuest = () => {
    const navigate = useNavigate();
    const questId = useSelector(getConfigCreatedQuestId);

    return(
        <main>
            <section className="preview">
                <div className="container">
                    <h2 className="preview__title">Тепер ви можете переглянути створенний квест</h2>
                    <Box sx={{width:400 , margin: "40px auto"}}>
                        <h3>Название квеста</h3>
                        <p>Вопросы</p>  
                        <Button  variant="contained" onClick={() => navigate("/profile")}>Повернутися до профілю</Button>
                    </Box>
                </div>
            </section>
        </main>
    )
}

export default PreviewQuest;