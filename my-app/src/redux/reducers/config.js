import { CONFIG_TYPES } from "../../constants/types";

const configReducer = (state = {}, { type, payload }) => {
    switch(type) {
        case CONFIG_TYPES.SET_JWT_TOKEN:
            return {...state, access: payload.jwt}
        default:
            return state;
    }
}

export default configReducer;