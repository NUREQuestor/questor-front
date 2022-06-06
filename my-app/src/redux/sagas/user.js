import { takeEvery, call, put } from 'redux-saga/effects';
import { CONFIG_TYPES } from "../../constants/types";

const workerSignIn = function*({payload}) {
    try {
        yield put({type: CONFIG_TYPES.SET_JWT_TOKEN, payload: {jwt: "sdfsdfvsdfhgbvsdjfnsafdkjhlksdlfbhaslkd"}})
    }
    catch(e) {

    }
}

export const watchSignIn = function*() {
    yield takeEvery(CONFIG_TYPES.SIGN_IN, workerSignIn);
}

const workerRegister = function*({payload}) {
    try {
        yield put({type: CONFIG_TYPES.SET_JWT_TOKEN, payload: {jwt: "sdbjfjasdfbjas,dkbfkjasdbfnkjashbdfkjahsdf"}})
    }
    catch(e) {

    }
}

export const watchRegister = function*() {
    yield takeEvery(CONFIG_TYPES.REGISTER, workerRegister)
}