import {useState} from "react"
import { useTranslation } from 'react-i18next';
import {Dialog ,DialogTitle , DialogContent , DialogActions , Button , TextField} from "@mui/material"
import {useFormik} from "formik";
import {useDispatch} from "react-redux"
import { CONFIG_TYPES } from "../../constants/types";

const RegistrationModal = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch()
    const [openRegistration , setOpenRegistration] = useState(false);
    const [isError, setIsError] = useState(false);

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
            dispatch({type: CONFIG_TYPES.REGISTER, payload: values, setIsError, close: handleCloseRegistration});
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
                <DialogTitle>{t("Registration")}</DialogTitle>
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
                    <Button сolor="error" onClick={handleCloseRegistration}>{t("Cancel")}</Button>
                    <Button color="success" onClick={handleSubmit} autoFocus>
                        {t("CheckIn")}
                    </Button>
                    {isError ? <div>Error</div> : null}
                </DialogActions>
            </Dialog>
        </>
    )
}

export default RegistrationModal