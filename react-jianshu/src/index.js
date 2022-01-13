import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyle } from './style';
import './style'
import App from './App';
import './statics/iconfont/iconfont'
import { GlobalStyleFont } from './statics/iconfont/iconfont'


ReactDOM.render(
  <div>
    <GlobalStyle/>
    <GlobalStyleFont/>
    <App />
  </div>,
  document.getElementById('root')
);