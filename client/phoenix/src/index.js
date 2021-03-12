import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import allReducers from './components/redux/reducer/allReducers';
import { Provider } from 'react-redux';
import { composeWithDevTools } from "redux-devtools-extension";
import {createStore, applyMiddleware} from 'redux';
import thunk from "redux-thunk";

const middleware = [thunk];
const store = createStore( allReducers,composeWithDevTools(applyMiddleware(...middleware)));

ReactDOM.render(
  <React.StrictMode>
     <Provider  store={store}>
     <BrowserRouter>
    <App />
    </BrowserRouter>
        </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
serviceWorker.unregister();
