import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router} from 'react-router-dom'
import App from './App'
import {ContextProvider} from './Context'

ReactDOM.render(
  <ContextProvider>
      <Router basename={process.env.PUBLIC_URL}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </ContextProvider>
,
  document.getElementById('root')
);


