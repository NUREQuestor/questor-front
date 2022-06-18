import { combineReducers } from 'redux';
import config from "./config";
import user from "./user";
import createdQuests from "./createdQuests";

export default combineReducers({
    config,
    user,
    createdQuests
});