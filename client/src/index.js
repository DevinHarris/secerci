import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from "./store";
import './styles/main.scss';
import App from './App.js'

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,

document.querySelector('#root'));