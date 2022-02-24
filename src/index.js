import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCzWVqa5EqBYdg1aDwBZDEI2ktoE4GJES4",
  authDomain: "e-commerce-lezcano.firebaseapp.com",
  projectId: "e-commerce-lezcano",
  storageBucket: "e-commerce-lezcano.appspot.com",
  messagingSenderId: "283960251",
  appId: "1:283960251:web:de52b96bdb050f7ce25a9e"
};

initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
