import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { ConnectedRouter } from "react-router-redux";
import { Provider } from "react-redux";
import store, { history } from "./helpers/store";

const target = document.querySelector('#root')

render(
    <Provider store = {store}>
        <ConnectedRouter history = {history}>
            <div>
                <App />
            </div>
        </ConnectedRouter>
    </Provider>,
    target
)