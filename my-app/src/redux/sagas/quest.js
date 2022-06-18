import { takeEvery, call, put, select } from 'redux-saga/effects';
import { QUEST_TYPES, CONFIG_TYPES } from "../../constants/types";
import { getConfigUserId } from "../selectors";
import * as api from "../../api";

const workerCreate = function* ({payload, navigate}) {
    try {
        const userId = yield select(getConfigUserId);
        const response = yield call(api.createQuest, userId, payload);
        const { message } = response.data;
        yield put({type: CONFIG_TYPES.SET_CONFIG, payload: { idCreatedQuest: message }});
        yield call(navigate, "/second_step_create");
    }
    catch(e) {
        console.log(e);
    }
}

export const watchCreate = function* () {
    yield takeEvery(QUEST_TYPES.CREATE, workerCreate);
}