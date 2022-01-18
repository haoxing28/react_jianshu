import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyle } from './style';
import './style'
import App from './App';
import './statics/iconfont/iconfont'
import { GlobalStyleFont } from './statics/iconfont/iconfont'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.render(
  <BrowserRouter>
    <GlobalStyle/>
    <GlobalStyleFont/>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);