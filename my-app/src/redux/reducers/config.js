import { CONFIG_TYPES } from "../../constants/types";

const configReducer = (state = {}, { type, payload }) => {
    console.log("jj", type, payload);

    switch(type) {
        case CONFIG_TYPES.SET_JWT_TOKEN:
            return {...state, access: payload.jwt}
        case CONFIG_TYPES.SET_CONFIG:
            return {...state, ...payload}
        case CONFIG_TYPES.CLEAR:
            return {};
        default:
            return state;
    }
}

export default configReducer;