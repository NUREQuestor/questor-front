import {useState} from "react"
import {Dialog ,DialogTitle , DialogContent , DialogActions , Button , TextField , Typography} from "@mui/material"
import {Link} from "react-router-dom"
import className from "classnames"

function Header() {
    const listAvailableQuests = className(
        "header__button-quest"
    )
    // const linkRegistration = className(
    //     display: flex;
    //     justify-content: right;
    //     margin-top: 25px;
    // )

    const [open , setOpen] = useState(false)

    const handleClose = () => {
        setOpen(false)
    }

    const handleOpen = () => {
        setOpen(true)
    }

    return(
        <header className="header">
            <div className="container">
                <div className="header__block">
                    <Link to="/" className="header__logo">Questor?</Link>
                    <Link to="/availableQuests" className={listAvailableQuests}>Веб-квести</Link>
                    <input type="text"
                        className="header__search"
                        placeholder="пошук квеста"/>
                    <div className="header-btn">
                        <div className="header-btn__sign-in btn" onClick={handleOpen}>Увійти до системи</div>
                        <Dialog
                            open={open}
                            onClose={handleClose}
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
                                <Typography align="right" onClick={() => console.log("Пример")}>
                                    Зареєуструватися
                                </Typography>
                            </DialogContent>
                            <DialogActions>
                                <Button сolor="error" onClick={handleClose}>Скасувати</Button>
                                <Button color="success" onClick={handleClose} autoFocus>
                                    Увійти
                                </Button>
                            </DialogActions>
                        </Dialog>
                        <div className="header-btn__register btn">Зареєструватися</div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;