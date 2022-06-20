import {all, fork} from "redux-saga/effects"
import * as userSaga from "./user";
import * as questSaga from "./quest";
import * as questionSaga from "./question";
import * as answerSaga from "./answer";
import * as createdQuestsSaga from "./createdQuests";
import * as publicQuestsSaga from "./publicQuests";

const rootSaga = function*() {
    yield all([
        fork(userSaga.watchSignIn),
        fork(userSaga.watchRegister),
        fork(userSaga.watchMe),
        fork(userSaga.watchSignOut),
        fork(userSaga.watchEdit),
        fork(userSaga.watchEditPassword),
        fork(questSaga.watchCreate),
        fork(questSaga.watchGet),
        fork(questionSaga.watchCreate),
        fork(answerSaga.watchCreate),
        fork(createdQuestsSaga.watchGet),
        fork(publicQuestsSaga.watchGet)
    ])
}

export default rootSaga;