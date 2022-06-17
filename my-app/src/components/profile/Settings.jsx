import { useEffect } from "react";
import { Box, TextField , Button } from "@mui/material"
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../../redux/selectors";
import { useFormik } from "formik";
import { USER_TYPES } from "../../constants/types";

import ChangePassword from "../modals/ChangePassword"

const Settings = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = useSelector(getUser);

    const {values, handleSubmit, handleChange} = useFormik({
        initialValues: {
            username: user.userName,
            email: user.email
        },
        onSubmit: async (values) => {
            dispatch({ type: USER_TYPES.EDIT, payload: values, navigate });
        }
    });

    return(
        <main>
            <section>
                <div className="container">
                    <Box sx={{width:400 , margin: "100px auto"}}>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="username"
                            name="username"
                            label="Username"
                            type="text"
                            variant="filled"
                            fullWidth
                            onChange={handleChange}
                            value={values.username}
                            sx={{backgroundColor: "white"}}
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="userEmail"
                            name="email"
                            label="Email"
                            type="email"
                            variant="filled"
                            fullWidth
                            onChange={handleChange}
                            value={values.email}
                            sx={{backgroundColor: "white"}}
                        />
                        <ChangePassword />
                        <Button sx={{marginTop: "20px"}} variant="contained" onClick={handleSubmit}>Відредагувати</Button>
                        <Button sx={{margin: "20px 0 0 20px"}} variant="outlined" onClick={() => navigate("/profile") }>Перейти до профілю</Button>
                    </Box>
                </div>
            </section>
        </main>
    )
}

export default Settings