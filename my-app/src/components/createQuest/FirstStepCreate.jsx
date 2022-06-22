import {Box , Button , TextField , Radio , RadioGroup , FormControlLabel , Checkbox } from "@mui/material"
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from "react-router-dom";
import { useFormik } from "formik";
import { QUEST_TYPES } from "../../constants/types";
import { getConfigSettingsCreatedQuest } from "../../redux/selectors";

const FirstStepCreate = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { state } = useLocation();
    const settingsQuest = useSelector(getConfigSettingsCreatedQuest);

    const {values, handleSubmit, handleChange} = useFormik({
        initialValues: {
            name: "",
            description: "",
            isPublic: true,
            writeOffControlMode: false,
            timeLimit: 0,
            ...(state?.isCreate ? {} : settingsQuest)
        },
        onSubmit: (values) => {
            const prepareValues = {
                ...values,
                isPublic: typeof values.isPublic === "string" ? values.isPublic === "true" : values.isPublic
            }
            if(state?.isCreate) {
                dispatch({type: QUEST_TYPES.CREATE, payload: prepareValues, navigate});
            }
            else {
                dispatch({type: QUEST_TYPES.UPDATE, payload: prepareValues, navigate});
            }
        }
    });

    return(
        <main>
            <section className="step-create">
                <div className="container">
                    <h2 className="step-create__title">{t("Let'sThinkAboutSettingUpAQuest")}</h2>
                    <Box sx={{width:400 , margin: "40px auto"}}>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="questName"
                            name="name"
                            label="Quest name"
                            type="text"
                            variant="filled"
                            sx={{background : "white" , borderRadius : "14px" , marginBottom : "14px"}}
                            onChange={handleChange}
                            value={values.name}
                            fullWidth
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="questDescription"
                            name="description"
                            label="Quest description"
                            type="text"
                            variant="filled"
                            sx={{background : "white" , borderRadius : "14px" , marginBottom : "14px"}}
                            onChange={handleChange}
                            value={values.description}
                            fullWidth
                        />
                        <h3>{t("TypeQuest")}</h3>
                        <RadioGroup
                            name="isPublic"
                            sx={{flexDirection:"row" , justifyContent:"space-between"}}
                            onChange={handleChange}
                            value={values.isPublic}
                        >
                            <FormControlLabel control={<Radio />} value={true} label="public" />
                            <FormControlLabel control={<Radio />} value={false} label="private" />
                        </RadioGroup>
                        <FormControlLabel name="writeOffControlMode" control={<Checkbox checked={values.writeOffControlMode} />} onChange={handleChange} label="without cheating" />
                        <h3>{t("Time")}</h3>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="questTime"
                            name="timeLimit"
                            type="number"
                            variant="filled"
                            sx={{background : "white" , borderRadius : "14px" , margin : "16px 0"}}
                            onChange={handleChange}
                            value={values.timeLimit}
                            fullWidth
                        />
                        <Button variant="contained" onClick={handleSubmit}>{t("NextStep")}</Button>
                    </Box>
                </div>
            </section>
        </main>
    )
}

export default FirstStepCreate