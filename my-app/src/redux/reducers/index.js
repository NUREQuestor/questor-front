import { combineReducers } from 'redux';
import config from "./config";
import user from "./user";

export default combineReducers({
    config,
    user
});