import * as React from 'react';
import {Fragment} from "react";
import {Provider} from "react-redux"
import {ThemeProvider, theme} from 'theme'
import {Header} from "components/Header/Header";
import {Footer} from "components/Footer/Footer";
import {Exchanger} from "components/Exchanger/Exchanger";
import {createStore} from "store/createStore";
import {actions} from "store/reducers/exchange";

const store = createStore();
export class App extends React.Component {
    componentDidMount() {
        store.dispatch(actions.getExchangeValue());
    }
    onCalculate(usd: string) {
        store.dispatch(actions.exchange(Number(usd)));
    }
    render () {
        return (
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <Fragment>
                        <Header />
                        <Exchanger onCalculate={this.onCalculate} eur={store.getState().exchange.eur}/>
                        <Footer />
                    </Fragment>
                </ThemeProvider>
            </Provider>
        )
    }
}
