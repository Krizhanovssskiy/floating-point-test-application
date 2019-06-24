import React from 'react';
import ReactDOM from 'react-dom';
import ErrorBoundry from "./component/Error-boundry";

import './index.css';
import App from './App';

ReactDOM.render(
  <ErrorBoundry>
    <App />
  </ErrorBoundry>,
  document.getElementById('root')
);

