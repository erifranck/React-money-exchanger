import * as React from 'react';
import {render} from 'react-dom';
import {createGlobalStyles} from 'styled-components';
import { createGlobalStyle } from 'styled-components'
import {App} from "layouts/App/App";
import {Fragment} from "react";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0px;
        padding: 0px;
    }
    body {
        background-color: #fefefe;
    }
`

render(
   <Fragment>
       <GlobalStyle />
       <App />
   </Fragment> , document.getElementById('app'))
