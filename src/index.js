import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {HashRouter as Router} from 'react-router-dom'
import App from './App'
import {ContextProvider} from './Context'

ReactDOM.render(
  <ContextProvider>
      <Router >
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </ContextProvider>
,
  document.getElementById('root')
);


