import {createReducer, ActionCreators, createActions, CreatedActions} from 'reduxsauce'

export const enum Type {
    EXCHANGE = 'EXCHANGE',
    START_FETCH = 'START_FETCH',
    GET_EXCHANGE_VALUE = 'GET_EXCHANGE_VALUE',
    GET_EXCHANGE_VALUE_SUCCESS = 'GET_EXCHANGE_VALUE_SUCCESS',
    GET_EXCHANGE_VALUE_FAIL = 'GET_EXCHANGE_VALUE_FAIL',
}

interface Creator extends ActionCreators {
    exchange: (usd: number) => { type: Type.EXCHANGE; usd: number };
    startFetch: () => { type: Type.START_FETCH };
    getExchangeValue: () => { type: Type.GET_EXCHANGE_VALUE };
    getExchangeValueSuccess: (conversion: string) => { type: Type.GET_EXCHANGE_VALUE_SUCCESS, conversionValue: string };
    getExchangeValueFail: (error: any) => { type: Type.GET_EXCHANGE_VALUE_FAIL, error: any };
}

const {Creators}: CreatedActions = createActions({
    exchange: ['usd'],
    getExchangeValue: null,
    startFetch: null,
    getExchangeValueSuccess: ['conversionValue'],
    getExchangeValueFail: ['error'],
});

export const actions = Creators as Creator;

export interface ExchangeState {
    readonly usd: number;
    readonly eur: number;
    readonly fetch: boolean;
    readonly conversionValue: number;
}

const INITIAL_STATE: ExchangeState = {
    usd: 0,
    eur: 0,
    conversionValue: 0,
    fetch: false
};

const getExchangeSuccess = (state: ExchangeState, action): ExchangeState => ({
    ...state,
    fetch: false,
    'conversionValue': action.conversionValue,
});

const onFetch = (state: ExchangeState, action): ExchangeState => ({
    ...state,
    fetch: true,
});

const exchangeEUR = (state: ExchangeState, action): ExchangeState => ({
    ...state,
    eur: action.usd / state.conversionValue,
});
export default createReducer(INITIAL_STATE, {
    [Type.START_FETCH]: onFetch,
    [Type.GET_EXCHANGE_VALUE_SUCCESS]: getExchangeSuccess,
    [Type.EXCHANGE]: exchangeEUR,
});
