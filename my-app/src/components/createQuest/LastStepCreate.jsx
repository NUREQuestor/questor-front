import {Box, Button, TextField, ButtonGroup} from "@mui/material"
import {useNavigate} from "react-router-dom";
import { useSelector } from "react-redux";
import { getConfigCreatedQuestId } from "../../redux/selectors";


const LastStepCreate = () => {
    const navigate = useNavigate();
    const questId = useSelector(getConfigCreatedQuestId);

    return(
        <main>
            <section className="step-create">
                <div className="container">
                    <h2 className="step-create__title">Тепер ви можете надіслати всім посилання на свій квест, щоб люди могли зайти туди</h2>
                    <Box sx={{width:400 , margin: "40px auto"}}>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="questLink"
                            name="questLink"
                            label="Quest link"
                            type="text"
                            variant="filled"
                            sx={{background : "white" , borderRadius : "14px" , marginBottom : "14px"}}
                            fullWidth
                            value={`${window.location.origin}/quest/${questId}`}
                        />
                        <ButtonGroup variant="outlined" sx={{marginTop: "40px" , display:"flex" , justifyContent:"space-between"}}>
                            <Button  variant="contained" onClick={() => navigate("/profile")}>Повернутися до профілю</Button>
                            <Button  variant="contained" onClick={() => navigate(`/quest/${questId}/preview`)}>Подивитися квест</Button>
                        </ButtonGroup>
                    </Box>
                </div>
            </section>
        </main>
    )
}

export default LastStepCreate;