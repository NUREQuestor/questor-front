import {FormControl , Select , MenuItem , Box} from "@mui/material"
import { useTranslation } from 'react-i18next';
import { LANGUAGES } from "../constants"

const SelectLocalization = () => {
    const {i18n} = useTranslation();

    const handleChange = ({target}) => {
        i18n.changeLanguage(target.value);
    }

    return(
        <Box sx={{ minWidth: 120 , backgroundColor: 'white' , borderRadius: "14px"}}>
            <FormControl fullWidth>
                <Select
                    value={i18n.language}
                    onChange={handleChange}
                >
                    <MenuItem value={LANGUAGES.UA}>UA</MenuItem>
                    <MenuItem value={LANGUAGES.EN}>EN</MenuItem>
                </Select>
            </FormControl>
        </Box>
    )
}

export default SelectLocalization