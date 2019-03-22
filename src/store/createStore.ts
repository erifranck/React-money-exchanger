import {createStore as createReduxStore, applyMiddleware} from "redux";
import {rootReducer} from "store/reducers";
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import {rootSaga} from "store/sagas";


export function createStore() {
    const sagaMiddleware = createSagaMiddleware()
    const compose = composeWithDevTools(
        applyMiddleware(sagaMiddleware)
    );
    const store = createReduxStore(rootReducer, compose);
    sagaMiddleware.run(rootSaga);
    return store;
}
