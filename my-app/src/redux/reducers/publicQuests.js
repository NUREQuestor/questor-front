import { PUBLIC_QUESTS_TYPES } from "../../constants/types";

const publicQuestsReducer = (state = [], { type, payload }) => {
    switch(type) {
        case PUBLIC_QUESTS_TYPES.SET:
            return payload.quests
        case PUBLIC_QUESTS_TYPES.CLEAR:
            return [];
        default:
            return state;
    }
}

export default publicQuestsReducer;