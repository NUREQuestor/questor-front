import { takeEvery, call, put } from 'redux-saga/effects';
import { PUBLIC_QUESTS_TYPES } from "../../constants/types";
import * as api from "../../api";

const workerGet = function* () {
    try {
        const response = yield call(api.getPublicQuests)   
        
        yield put({type: PUBLIC_QUESTS_TYPES.SET, payload: { quests: response.data }});
    }
    catch(e) {
        console.log(e);
    }
}

export const watchGet = function* () {
    yield takeEvery(PUBLIC_QUESTS_TYPES.GET, workerGet);
}