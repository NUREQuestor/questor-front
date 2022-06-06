import {useState} from "react"
import {Dialog ,DialogTitle , DialogContent , DialogActions , Button , TextField , Typography} from "@mui/material"
import {Link} from "react-router-dom"
import className from "classnames"

const Header = () => {
    const listAvailableQuests = className(
        "header__button-quest"
    )
    // const linkRegistration = className(
    //     display: flex;
    //     justify-content: right;
    //     margin-top: 25px;
    // )

    const [openSignIn , setOpenSignIn] = useState(false)
    const [openRegistration , setOpenRegistration] = useState(false)

    const handleCloseSignIn = () => {
        setOpenSignIn(false)
    }

    const handleOpenSignIn = () => {
        setOpenSignIn(true)
    }

    const handleCloseRegistration = () => {
        setOpenRegistration(false)
    }

    const handleOpenRegistration = () => {
        setOpenRegistration(true)
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
                                <Typography align="right" onClick={() => console.log("Пример")}>
                                    Зареєуструватися
                                </Typography>
                            </DialogContent>
                            <DialogActions>
                                <Button сolor="error" onClick={handleCloseSignIn}>Скасувати</Button>
                                <Button color="success" onClick={handleCloseSignIn} autoFocus>
                                    Увійти
                                </Button>
                            </DialogActions>
                        </Dialog>
                        <div className="header-btn__register btn" onClick={handleOpenRegistration}>Зареєструватися</div>
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
                                <Typography align="right" onClick={handleOpenSignIn}>
                                    Увійти до системи
                                </Typography>
                            </DialogContent>
                            <DialogActions>
                                <Button сolor="error" onClick={handleCloseRegistration}>Скасувати</Button>
                                <Button color="success" onClick={handleCloseRegistration} autoFocus>
                                    Зареєструватися
                                </Button>
                            </DialogActions>
                        </Dialog>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;