import { takeEvery, call, put, select } from 'redux-saga/effects';
import { QUEST_RESULT_TYPES, CONFIG_TYPES } from "../../constants/types";
import { getConfigUserId, getQuest } from "../selectors";
import * as api from "../../api";

const workerCreate = function* ({payload, navigate}) {
    try {
        const { id } = yield select(getQuest);
        const userId = yield select(getConfigUserId);
        yield call(api.createQuestResult, userId, id, {
            isCompleted: payload.isCompleted,
            timeInQuest: "0",
            result: payload.mark,
            sentResultToEmail: true
        });
        yield put({type: CONFIG_TYPES.SET_CONFIG, payload: { questResult: payload }});
        yield call(navigate, "/result-quest");
    }
    catch(e) {
        console.log(e);
    }
}

export const watchCreate = function* () {
    yield takeEvery(QUEST_RESULT_TYPES.CREATE, workerCreate);
}