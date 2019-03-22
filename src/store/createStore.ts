import {createStore as createReduxStore, applyMiddleware} from "redux";
import {rootReducer} from "store/reducers";
import createSagaMiddleware from 'redux-saga';
import {rootSaga} from "store/sagas";

export function createStore() {
    const sagaMiddleware = createSagaMiddleware()
    const store = createReduxStore(rootReducer, applyMiddleware(sagaMiddleware));
    sagaMiddleware.run(rootSaga);
    return store;
}
