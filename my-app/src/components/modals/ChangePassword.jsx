import {useState} from "react";
import {useDispatch} from "react-redux";
import { useTranslation } from 'react-i18next';
import {Button , Dialog , DialogActions , DialogContent , TextField , DialogTitle} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { USER_TYPES } from "../../constants/types";

const ChangePassword = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const [open, setOpen] = useState(false);
    const [password, setPassword] = useState("");
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleConfirmChange = () => {
        dispatch({ type: USER_TYPES.EDIT_PASSWORD, payload: { newPassword: password }});
        setOpen(false);
    }

    return (
        <div>
            <Button sx={{width: "100%" , marginTop: "20px"}} variant="contained" onClick={handleClickOpen}>{t("ChangePassword")}</Button>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
            >
                <DialogTitle id="responsive-dialog-title">
                {t("ChangePassword")}
                </DialogTitle>
                <DialogContent>
                        <TextField
                        autoFocus
                        margin="dense"
                        id="password"
                        name="password"
                        label="Password"
                        type="password"
                        variant="standard"
                        onChange={handleChangePassword}
                        fullWidth
                        />
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" onClick={handleConfirmChange}>{t("Edit")}</Button>
                    <Button autoFocus onClick={handleClose}>
                    {t("Cancel")}
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default ChangePassword