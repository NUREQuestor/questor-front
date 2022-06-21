import {Button , Dialog , DialogActions , DialogContent , DialogContentText , DialogTitle} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import {useState} from "react"

const ResultQuestModal = ({mark}) => {
    const [open, setOpen] = useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button sx={{display:"block" , margin: "50px auto" }} variant="contained"  onClick={handleClickOpen}>Подивитись результат</Button>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
            >
                <DialogTitle id="responsive-dialog-title">
                    Ваші результати
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Ваша оцінка {mark}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                        Закрити
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default ResultQuestModal