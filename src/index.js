import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import reducer, { initialState } from "./reducer";
// import reportWebVitals from './reportWebVitals';
import * as serviceWorker from "./serviceWorker";
import { StateProvider } from './StateProvider';

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState = {initialState} reducer={reducer} >
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
// serviceWorker.unregister();
// reportWebVitals();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();