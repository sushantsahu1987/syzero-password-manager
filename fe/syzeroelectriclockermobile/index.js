/** @format */
import React from "react";

import {AppRegistry} from 'react-native';
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";

import loginReducer from "./src/store/reducer/login_reducer";
import { loginSaga } from "./src/store/sagas";

import App from './App';
import {name as appName} from './app.json';

const rootReducer = combineReducers({
    login: loginReducer
  });
  
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));  
sagaMiddleware.run(loginSaga);

const ElektrikApp = () => (
    <Provider store={store}>
      <App />
    </Provider>
);

AppRegistry.registerComponent(appName, () => ElektrikApp);
