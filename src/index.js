import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import './App.scss'
import './Style.css';
import App from './App';
import 'alertifyjs/build/css/alertify.min.css';
import { BrowserRouter } from 'react-router-dom'
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);