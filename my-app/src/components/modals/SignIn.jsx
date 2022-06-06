import {useState} from "react"
import {Dialog ,DialogTitle , DialogContent , DialogActions , Button , TextField} from "@mui/material"
import {useFormik} from "formik"
import {useDispatch} from "react-redux"
import { CONFIG_TYPES } from "../../constants/types";

const SignIn = () => {
    const dispatch = useDispatch()

    const [openSignIn , setOpenSignIn] = useState(false)
    
    const handleCloseSignIn = () => {
        setOpenSignIn(false)
    }

    const handleOpenSignIn = () => {
        setOpenSignIn(true)
    }
    
    const {handleSubmit, handleChange} = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        onSubmit: (values) => {
            dispatch({type: CONFIG_TYPES.SIGN_IN, payload: values});
            handleCloseSignIn();
        }
    })

    return(
        <>
            <div className="header-btn__sign-in btn" onClick={handleOpenSignIn}>Увійти до системи</div>
            <Dialog
                open={openSignIn}
                onClose={handleCloseSignIn}
                aria-labelledby="signIn"
                >
                <DialogTitle>Увійти до системи</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="email"
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
                    <Button сolor="error" onClick={handleCloseSignIn}>Скасувати</Button>
                    <Button color="success" onClick={handleSubmit} autoFocus>
                        Увійти
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default SignIn