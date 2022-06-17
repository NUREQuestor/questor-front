import {all, fork} from "redux-saga/effects"
import * as userSaga from "./user";
import * as questSaga from "./quest";

const rootSaga = function*() {
    yield all([
        fork(userSaga.watchSignIn),
        fork(userSaga.watchRegister),
        fork(userSaga.watchMe),
        fork(userSaga.watchSignOut),
        fork(userSaga.watchEdit),
        fork(userSaga.watchEditPassword),
        fork(questSaga.watchCreate)
    ])
}

export default rootSaga;