import {useState} from "react"
import { useTranslation } from 'react-i18next';
import {Dialog ,DialogTitle , DialogContent , DialogActions , Button , TextField} from "@mui/material"
import {useFormik} from "formik";
import {useDispatch} from "react-redux"
import { CONFIG_TYPES } from "../../constants/types";

const RegistrationModal = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch()
    const [openRegistration , setOpenRegistration] = useState(false)

    const handleCloseRegistration = () => {
        setOpenRegistration(false)
    }

    const handleOpenRegistration = () => {
        setOpenRegistration(true)
    }

    const {handleSubmit, handleChange} = useFormik({
        initialValues: {
            email: "",
            username: "",
            password: "",
        },
        onSubmit: (values) => {
            dispatch({type: CONFIG_TYPES.REGISTER, payload: values});
            handleCloseRegistration();
        }
    })

    return(
        <>
            <div className="header-btn__register btn" onClick={handleOpenRegistration}>{t("Registration")}</div>
            <Dialog
                open={openRegistration}
                onClose={handleCloseRegistration}
                aria-labelledby="registration"
            >
                <DialogTitle>Зареєструватися</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="username"
                        name="username"
                        label="Username"
                        type="name"
                        variant="standard"
                        onChange={handleChange}
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="registration-email"
                        name="email"
                        label="Email Adress"
                        type="email"
                        variant="standard"
                        onChange={handleChange}
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="registration-password"
                        name="password"
                        label="Password"
                        type="password"
                        variant="standard"
                        onChange={handleChange}
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button сolor="error" onClick={handleCloseRegistration}>Скасувати</Button>
                    <Button color="success" onClick={handleSubmit} autoFocus>
                        Зареєструватися
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default RegistrationModal