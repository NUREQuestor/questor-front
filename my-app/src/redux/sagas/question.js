import { takeEvery, call, put, select } from 'redux-saga/effects';
import { QUESTION_TYPES, CONFIG_TYPES } from "../../constants/types";
import { getConfigCreatedQuestId, getCreatedQuestions, getConfigCreatedQuestionId } from "../selectors";
import * as api from "../../api";

const workerCreate = function* ({payload, navigate}) {
    try {
        const questId = yield select(getConfigCreatedQuestId);
        const createdQuestions = yield select(getCreatedQuestions);
        const response = yield call(api.createQuestion, questId, {...payload, qeustionType: Number(payload.qeustionType)});
        const { message } = response.data;
        yield put({type: CONFIG_TYPES.SET_CONFIG, payload: { idCreatedQuestion: message, settingsCreatedQuestion: payload, createdQuestions: [...createdQuestions, message] }});
        yield call(navigate, "/third_step_create");
    }
    catch(e) {
        console.log(e);
    }
}

export const watchCreate = function* () {
    yield takeEvery(QUESTION_TYPES.CREATE, workerCreate);
}

const workerUpdate = function* ({payload, navigate}) {
    try {
        const questId = yield select(getConfigCreatedQuestId);
        const questionId = yield select(getConfigCreatedQuestionId);
        yield call(api.updateQuestion, questionId, {...payload, questId, qeustionType: Number(payload.qeustionType)});
        yield put({type: CONFIG_TYPES.SET_CONFIG, payload: { settingsCreatedQuestion: payload }});
        yield call(navigate, "/third_step_create");
    }
    catch(e) {
        console.log(e);
    }
}

export const watchUpdate = function* () {
    yield takeEvery(QUESTION_TYPES.UPDATE, workerUpdate);
}