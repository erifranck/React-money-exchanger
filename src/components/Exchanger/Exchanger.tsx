import * as React from 'react';
import {styled, withTheme} from "theme";
import {Field} from "components/Field/Field";
import {Button} from "components/Button/Button";
import {ExchangerProps} from "components/Exchanger/Exchanger.props";

export const ExchangerComponent = (props: ExchangerProps) => {
    const [usd, setUsdValue] = React.useState('');
    return (
        <div className={props.className}>
            <div className='exchanger-fields'>
                <Field placeholder='USD' type='number' value={usd} onChange={(ev) => setUsdValue(ev.target.value)} />
                <Field placeholder='EUR' value={props.eur} disabled/>
            </div>
            <Button uppercase primary onClick={() => props.onCalculate(usd)} >
                Calculate
            </Button>
        </div>
    )
}

export const Exchanger = withTheme(styled(ExchangerComponent)`
    height: 300px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    flex-wrap: wrap;
    padding: 20px;
    .exchanger-fields {
        width: 100%;
        display: flex;
        justify-content: space-around;
        input {
            width: 30%;
        }
    }
    button {
        font-size: ${({theme}) => theme.fontTitle};
        padding: 10px;
        width: 200px;
    }
`);
