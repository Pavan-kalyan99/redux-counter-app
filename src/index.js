import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {legacy_createStore as createStore} from 'redux';
//import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux';
//import { Reducer } from './Redux/Reducer';
import {rootReducer} from './Redux/CombineRe';
//import { Increment,Decrement } from './Redux/Action';
export const store = createStore(rootReducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  




const root = ReactDOM.createRoot(document.getElementById('root'));
store.subscribe(()=>console.log(store.getState()));
root.render(
  <React.StrictMode>
    <Provider store ={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
