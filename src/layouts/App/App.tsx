import * as React from 'react';
import {Fragment} from "react";
import {Provider} from "react-redux"
import {ThemeProvider, theme} from 'theme'
import {Header} from "components/Header/Header";
import {Footer} from "components/Footer/Footer";
import {Exchanger} from "components/Exchanger/Exchanger";
import {createStore} from "store/createStore";

export const App = () => (
    <Provider store={createStore()}>
       <ThemeProvider theme={theme}>
           <Fragment>
               <Header />
               <Exchanger />
               <Footer />
           </Fragment>
       </ThemeProvider>
    </Provider>
)
