/**
 * Created by MagicLizi on 2016/12/30.
 */
import React from 'react';
import ReactDom from 'react-dom';
import {createStore,combineReducers,applyMiddleware} from 'redux';
import { Provider } from 'react-redux'
import createLogger from 'redux-logger';
import * as Reducers  from './reducers';
import App from './App';

const logger = createLogger();

const store = createStore(combineReducers(Reducers),{},applyMiddleware(logger));

ReactDom.render(
    <Provider store = {store}>
       <App />
    </Provider>,
    document.getElementById('app')
);