import {put, call, delay} from 'redux-saga/effects';
import {SagaIterator} from '@redux-saga/types';
import {ActionTypes} from "reduxsauce";
import {actions} from "store/reducers/exchange";
import {getConversion} from "store/services/fixer.io";

export function * getCurrentChange(action: ActionTypes): SagaIterator {
   yield put(actions.startFetch());
   const response = yield call(getConversion);
   if (response.status === 200) {
       yield put(actions.getExchangeValueSuccess(response.data.rates.USD));
   } else {
       yield put(actions.getExchangeValueFail(response.error));
   }
   yield delay(600000);
   yield call(getCurrentChange, action);
}
