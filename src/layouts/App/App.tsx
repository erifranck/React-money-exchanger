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
    static state: {readonly eur: string} = {
        eur: ''
    }
    constructor(props) {
        super(props);
        this.state = {
            eur: ''
        }
    }
    componentDidMount() {
        store.dispatch(actions.getExchangeValue());
        store.subscribe(() => {
            this.setState({
                eur: store.getState().exchange.eur
            })
        })
    }
    onCalculate(usd: string) {
        store.dispatch(actions.exchange(Number(usd)));
    }
    render () {
        console.log(this.state);
        return (
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <Fragment>
                        <Header />
                        <Exchanger onCalculate={this.onCalculate} eur={this.state['eur']}/>
                        <Footer />
                    </Fragment>
                </ThemeProvider>
            </Provider>
        )
    }
}
