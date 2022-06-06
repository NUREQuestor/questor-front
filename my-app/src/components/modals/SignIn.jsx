import {Dialog ,DialogTitle , DialogContent , DialogActions , Button , TextField} from "@mui/material"
import {useState} from "react"

const SignIn = () => {

    const [openSignIn , setOpenSignIn] = useState(false)
    
    const handleCloseSignIn = () => {
        setOpenSignIn(false)
    }

    const handleOpenSignIn = () => {
        setOpenSignIn(true)
    }

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
                        label="Email Adress"
                        type="email"
                        variant="standard"
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="password"
                        label="Password"
                        type="password"
                        variant="standard"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button сolor="error" onClick={handleCloseSignIn}>Скасувати</Button>
                    <Button color="success" onClick={handleCloseSignIn} autoFocus>
                        Увійти
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default SignIn