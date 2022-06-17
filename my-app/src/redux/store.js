import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { persistReducer, persistStore } from 'redux-persist';

import storage from 'redux-persist/lib/storage';
import initialState from "./initialState";
import rootReducer from "./reducers";
import rootSaga from "./sagas";

const createConfiguredStore = () => {
    const sagaMiddleware = createSagaMiddleware();

    const persistedReducer = persistReducer(
    {
        key: 'config',
        storage,
        whitelist: ['config', "user"],
    },
        rootReducer
    );

    const store = createStore(
        persistedReducer,
        initialState,
        compose(applyMiddleware(sagaMiddleware))
    );

    sagaMiddleware.run(rootSaga);

    return store;
};

export const store = createConfiguredStore();
export const persistor = persistStore(store, {});
