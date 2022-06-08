import {Box, TextField , Button} from "@mui/material"
import { useNavigate } from "react-router-dom";

const Settings = () => {
    const navigate = useNavigate();
    return(
        <main>
            <section>
                <div className="container">
                    <Box sx={{width:400 , margin: "100px auto"}}>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="userName"
                            name="userName"
                            label="Username"
                            type="text"
                            variant="filled"
                            fullWidth
                            sx={{backgroundColor: "white"}}
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="userSurname"
                            name="userSurname"
                            label="Surname"
                            type="text"
                            variant="filled"
                            fullWidth
                            sx={{backgroundColor: "white"}}
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="userEmail"
                            name="userEmail"
                            label="Email"
                            type="email"
                            variant="filled"
                            fullWidth
                            sx={{backgroundColor: "white"}}
                        />
                        <Button sx={{marginTop: "20px"}} variant="contained" onClick={() => navigate("/profile") }>Відредагувати</Button>
                        <Button sx={{margin: "20px 0 0 20px"}} variant="outlined" onClick={() => navigate("/profile") }>Перейти до профілю</Button>
                    </Box>
                </div>
            </section>
        </main>
    )
}

export default Settings