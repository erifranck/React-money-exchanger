import {takeEvery} from 'redux-saga/effects';
import {SagaIterator} from '@redux-saga/types';
import {ActionType} from "typesafe-actions";

import {getCurrentChange} from "store/sagas/exchangeSaga";
import {Type} from "store/reducers/exchange";


export function * rootSaga(): SagaIterator {
    yield takeEvery(Type.GET_EXCHANGE_VALUE as ActionType<string>, getCurrentChange);
}
