import {FormControl , Select , MenuItem} from "@mui/material"
import { useTranslation } from 'react-i18next';
import { LANGUAGES } from "../constants"

const SelectLocalization = () => {
    const {i18n} = useTranslation();

    const handleChange = ({target}) => {
        i18n.changeLanguage(target.value);
    }

    return(
        <FormControl fullWidth>
            <Select
                value={i18n.language}
                onChange={handleChange}
            >
                <MenuItem value={LANGUAGES.UA}>UA</MenuItem>
                <MenuItem value={LANGUAGES.EN}>EN</MenuItem>
            </Select>
        </FormControl>
    )
}

export default SelectLocalization