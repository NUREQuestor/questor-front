import {all} from "redux-saga/effects"
import {watchSignIn, watchRegister} from "./user";

const rootSaga = function*() {
    yield all([
        watchSignIn(),
        watchRegister()
    ])
}

export default rootSaga;