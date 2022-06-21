import { combineReducers } from 'redux';
import config from "./config";
import user from "./user";
import createdQuests from "./createdQuests";
import publicQuests from "./publicQuests";
import quest from "./quest";
import completedQuests from "./completedQuests";

export default combineReducers({
    config,
    user,
    createdQuests,
    publicQuests,
    quest,
    completedQuests
});