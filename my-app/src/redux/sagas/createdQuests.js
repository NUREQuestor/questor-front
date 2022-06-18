import { takeEvery, call, put, select } from 'redux-saga/effects';
import { CREATED_QUESTS_TYPES } from "../../constants/types";
import { getConfigUserId } from "../selectors";
import * as api from "../../api";

const workerGet = function* () {
    try {
        const userId = yield select(getConfigUserId);
        const response = yield call(api.getCreatedQuests, userId)   
        
        yield put({type: CREATED_QUESTS_TYPES.SET, payload: { quests: response.data }});
    }
    catch(e) {
        console.log(e);
    }
}

export const watchGet = function* () {
    yield takeEvery(CREATED_QUESTS_TYPES.GET, workerGet);
}