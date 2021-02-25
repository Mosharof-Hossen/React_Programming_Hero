import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app';
import MyfunctionalComponent from './components/functionalApp';
import Profile from "./components/profile/index"
import StateApp from './components/stateApp';
import Timer from "./components/timer"
import "bootstrap/dist/css/bootstrap.css"

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
