import {createReducer, ActionCreators, createActions, CreatedActions} from 'reduxsauce'

export const enum Type {
    EXCHANGE = 'EXCHANGE',
}

interface Creator extends ActionCreators {
    appStart: () => { type: Type.EXCHANGE };
}
interface State {

}

const {Types, Creators}: CreatedActions = createActions({
    exchange: ['usd'],
    getExchangeValue: null,
    getExchangeValueSuccess: ['conversionValue'],
    getExchangeValueFail: ['error'],
});

export const actions = Creators as Creator;
export const types = Types;

const INITIAL_STATE = {
    'usd': 0,
    'eur': 0,
    'conversionValue': 0
};

const getExchangeSuccess = (state, action) => ({
    ...state,
    'conversionValue': action.conversionValue,
});

export default createReducer(INITIAL_STATE, {
    [Type.EXCHANGE]: getExchangeSuccess,
});
