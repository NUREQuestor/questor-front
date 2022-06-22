import {useState} from "react"
import { useTranslation } from 'react-i18next';
import {Dialog ,DialogTitle , DialogContent , DialogActions , Button , TextField} from "@mui/material"
import {useFormik} from "formik"
import {useDispatch} from "react-redux"
import { CONFIG_TYPES } from "../../constants/types";

const SignInModal = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch()

    const [openSignIn , setOpenSignIn] = useState(false)
    const [isError, setIsError] = useState(false);
    
    const handleCloseSignIn = () => {
        setOpenSignIn(false)
    }

    const handleOpenSignIn = () => {
        setOpenSignIn(true)
    }
    
    const {handleSubmit, handleChange} = useFormik({
        initialValues: {
            username: "",
            password: "",
        },
        onSubmit: (values) => {
            dispatch({type: CONFIG_TYPES.SIGN_IN, payload: values, setIsError, close: handleCloseSignIn});
        }
    })

    return(
        <>
            <div className="header-btn__sign-in btn" onClick={handleOpenSignIn}>{t("SignIn")}</div>
            <Dialog
                open={openSignIn}
                onClose={handleCloseSignIn}
                aria-labelledby="signIn"
                >
                <DialogTitle>{t("SignIn")}</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="username"
                        name="username"
                        label="User name"
                        type="text"
                        variant="standard"
                        onChange={handleChange}
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="password"
                        name="password"
                        label="Password"
                        type="password"
                        variant="standard"
                        onChange={handleChange}
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button сolor="error" onClick={handleCloseSignIn}>{t("Cancel")}</Button>
                    <Button color="success" onClick={handleSubmit} autoFocus>
                    {t("Enter")}
                    </Button>
                    {isError ? <div>Error</div> : null}
                </DialogActions>
            </Dialog>
        </>
    )
}

export default SignInModal