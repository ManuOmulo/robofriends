import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import { createLogger } from "redux-logger"
import thunkMiddleware from "redux-thunk"
import rootReducer from "./reducers/rootReducer"

import * as serviceWorkerRegistration from './serviceWorkerRegistration';

import "./index.css"
import App from './App';

const logger = createLogger()
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger))

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

