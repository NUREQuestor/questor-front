import { takeEvery, call, put, select } from 'redux-saga/effects';
import { QUEST_TYPES } from "../../constants/types";
import { getConfigUserId } from "../selectors";
import * as api from "../../api";

const workerCreate = function* ({payload}) {
    try {
        const userId = yield select(getConfigUserId);
        yield call(api.createQuest, userId, payload);

    }
    catch(e) {
        console.log(e);
    }
}

export const watchCreate = function* () {
    yield takeEvery(QUEST_TYPES.CREATE, workerCreate);
}