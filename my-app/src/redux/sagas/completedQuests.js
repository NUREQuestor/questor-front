import { takeEvery, call, put, select } from 'redux-saga/effects';
import { COMPLETED_QUESTS_TYPES } from "../../constants/types";
import { getConfigUserId } from "../selectors";
import * as api from "../../api";

const workerGet = function* () {
    try {
        const userId = yield select(getConfigUserId);
        const responseQuestResults = yield call(api.getQuestResultByUser, userId);
        
        let quests = [];

        for(let i = 0; i < responseQuestResults.data.length; i++) {
            const responseQuest = yield call(api.getQuest, responseQuestResults.data[i].questId);
            const responseQuestions = yield call(api.getQuestionsByQuest, responseQuestResults.data[i].questId)

            quests = [...quests, {
                ...responseQuest.data, 
                questResult: responseQuestResults.data[i],
                questions: responseQuestions.data
            }];
        }
        
        yield put({type: COMPLETED_QUESTS_TYPES.SET, payload: { quests }});
    }
    catch(e) {
        console.log(e);
    }
}

export const watchGet = function* () {
    yield takeEvery(COMPLETED_QUESTS_TYPES.GET, workerGet);
}