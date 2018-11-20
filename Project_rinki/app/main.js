import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App.jsx';
require('./sass/site.scss');

render((
    <BrowserRouter>
      <App />
    </BrowserRouter>
), document.getElementById('container'));
