import { takeEvery, call, put, select } from 'redux-saga/effects';
import { CONFIG_TYPES, USER_TYPES } from "../../constants/types";
import { getConfigUserId } from "../selectors";
import * as api from "../../api";

const workerSignIn = function*({payload, setIsError, close}) {
    try {
        const response = yield call(api.login, payload);
        const { token, message } = response.data;
        yield put({type: CONFIG_TYPES.SET_CONFIG, payload: {access: token, id: message}});
        yield call(close);
    }
    catch(e) {
        yield call(setIsError, true)
    }
}

export const watchSignIn = function*() {
    yield takeEvery(CONFIG_TYPES.SIGN_IN, workerSignIn);
}

const workerRegister = function*({payload, setIsError, close}) {
    try {
        yield call(api.register, payload);
        const response = yield call(api.login, payload);
        const { token, message } = response.data;

        yield put({type: CONFIG_TYPES.SET_CONFIG, payload: {access: token, id: message}});
        yield call(close);
    }
    catch(e) {
        yield call(setIsError, true)
    }
}

export const watchRegister = function*() {
    yield takeEvery(CONFIG_TYPES.REGISTER, workerRegister)
}

const workerMe = function*({payload}) {
    try {
        const response = yield call(api.getUser, payload);
        const user = response.data;

        yield put({type: USER_TYPES.SET, payload: {user}});
    }
    catch(e) {
        console.log(e);
    }
}

export const watchMe = function*() {
    yield takeEvery(USER_TYPES.ME, workerMe);
}

const workerSignOut = function*() {
    try {
        yield put({type: USER_TYPES.REMOVE});
        yield put({type: CONFIG_TYPES.CLEAR});
    }
    catch(e) {
        console.log(e);
    }
}

export const watchSignOut = function*() {
    yield takeEvery(USER_TYPES.SIGN_OUT, workerSignOut);
}

const workerEdit = function*({payload, navigate}) {
    try {
        const userId = yield select(getConfigUserId);
        yield call(api.editUser, userId, payload);
        yield put({type: USER_TYPES.ME, payload:{ id: userId }});
        yield call(navigate, "/profile");
    }
    catch(e) {
        console.log(e);
    }
}

export const watchEdit = function*() {
    yield takeEvery(USER_TYPES.EDIT, workerEdit);
}

const workerEditPassword = function*({payload}) {
    try {
        const userId = yield select(getConfigUserId);
        yield call(api.editPasswordUser, userId, payload);
    }
    catch(e) {
        console.log(e);
    }
}

export const watchEditPassword = function*() {
    yield takeEvery(USER_TYPES.EDIT_PASSWORD, workerEditPassword);
}