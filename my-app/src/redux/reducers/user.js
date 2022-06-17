import { USER_TYPES } from "../../constants/types";

const userReducer = (state = {}, { type, payload }) => {
    switch(type) {
        case USER_TYPES.SET:
            return payload.user
        case USER_TYPES.REMOVE:
            return {};
        default:
            return state;
    }
}

export default userReducer;