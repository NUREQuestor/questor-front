import { QUEST_TYPES } from "../../constants/types";

const publicQuestsReducer = (state = {}, { type, payload }) => {
    switch(type) {
        case QUEST_TYPES.SET:
            return payload.quest
        case QUEST_TYPES.CLEAR:
            return {};
        default:
            return state;
    }
}

export default publicQuestsReducer;