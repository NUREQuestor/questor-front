import {useState} from "react"
import {Dialog ,DialogTitle , DialogContent , DialogActions , Button , TextField} from "@mui/material"

const FirstStep = () => {
    const [openFirstStep , setOpenFirstStep] = useState(false)

    const handleCloseFirstStep = () => {
        setOpenFirstStep(false)
    }

    const handleOpenFirstStep = () => {
        setOpenFirstStep(true)
    }
    return(
        <>
            <div className="header__create-quest btn" onClick={handleOpenFirstStep}>Створити квест</div>
            <Dialog
                open={openFirstStep}
                onClose={handleCloseFirstStep}
                aria-labelledby="registration"
            >
                <DialogTitle>Давайте подумаємо про налаштування квесту</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="username"
                        name="username"
                        label="Username"
                        type="name"
                        variant="standard"
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
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button сolor="error" onClick={handleCloseFirstStep}>Скасувати</Button>
                    <Button color="success" autoFocus>
                        Зареєструватися
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default FirstStep