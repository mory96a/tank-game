import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import sagas from './sagas';

import rootReducer from "./rootReducer";

const persistConfig = {
    'key': 'root',
    storage,
    'whitelist': ['players']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const storeCreator = () => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        persistedReducer,
        applyMiddleware(sagaMiddleware)
    );
    store.rootTask = sagaMiddleware.run(sagas);
    const persistor = persistStore(store);
    return {store, persistor}
};