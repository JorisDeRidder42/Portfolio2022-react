import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Alles } from './Header/Header';

ReactDOM.render(
  <BrowserRouter>
      <Alles/>
  </BrowserRouter>,
  document.getElementById('root')
);
 