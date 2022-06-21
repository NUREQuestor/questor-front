import { COMPLETED_QUESTS_TYPES } from "../../constants/types";

const createdQuestsReducer = (state = [], { type, payload }) => {
    switch(type) {
        case COMPLETED_QUESTS_TYPES.SET:
            return payload.quests
        case COMPLETED_QUESTS_TYPES.CLEAR:
            return [];
        default:
            return state;
    }
}

export default createdQuestsReducer;