import { takeEvery, call, put, select } from 'redux-saga/effects';
import { ANSWER_TYPES } from "../../constants/types";
import { getConfigCreatedQuestionId } from "../selectors";
import * as api from "../../api";

const workerCreate = function* ({payload, navigate}) {
    try {
        const questionId = yield select(getConfigCreatedQuestionId);
        for(let i = 0; i < payload.answers.length; i++) {
            if(payload.answers[i].value) {
                yield call(api.createAnswer, questionId, payload.answers[i]);
            }

        }
    
        yield call(navigate, "/second_step_create");
    }
    catch(e) {
        console.log(e);
    }
}

export const watchCreate = function* () {
    yield takeEvery(ANSWER_TYPES.CREATE_MANY, workerCreate);
}