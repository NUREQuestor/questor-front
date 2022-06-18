import { takeEvery, call, put, select } from 'redux-saga/effects';
import { QUESTION_TYPES, CONFIG_TYPES } from "../../constants/types";
import { getConfigCreatedQuestId } from "../selectors";
import * as api from "../../api";

const workerCreate = function* ({payload, navigate}) {
    try {
        const questId = yield select(getConfigCreatedQuestId);
        const response = yield call(api.createQuestion, questId, {...payload, qeustionType: Number(payload.qeustionType)});
        const { message } = response.data;
        yield put({type: CONFIG_TYPES.SET_CONFIG, payload: { idCreatedQuestion: message, settingsCreatedQuestion: payload }});
        yield call(navigate, "/third_step_create");
    }
    catch(e) {
        console.log(e);
    }
}

export const watchCreate = function* () {
    yield takeEvery(QUESTION_TYPES.CREATE, workerCreate);
}