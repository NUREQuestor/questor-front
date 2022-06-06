import {useState} from "react"
import { useTranslation } from 'react-i18next';
import {Dialog ,DialogTitle , DialogContent , DialogActions , Button , TextField} from "@mui/material"

const Registration = () => {
    const { t } = useTranslation();
    const [openRegistration , setOpenRegistration] = useState(false)

    const handleCloseRegistration = () => {
        setOpenRegistration(false)
    }

    const handleOpenRegistration = () => {
        setOpenRegistration(true)
    }

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
                        label="Username"
                        type="name"
                        variant="standard"
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="registration-email"
                        label="Email Adress"
                        type="email"
                        variant="standard"
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="registration-password"
                        label="Password"
                        type="password"
                        variant="standard"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button сolor="error" onClick={handleCloseRegistration}>Скасувати</Button>
                    <Button color="success" onClick={handleCloseRegistration} autoFocus>
                        Зареєструватися
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default Registration