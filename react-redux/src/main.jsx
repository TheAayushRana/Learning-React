import React from 'react';
import ReactDOM from 'react-dom/client';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import App from './App.jsx';
import './index.css';
import { accountReducer } from './reducers/accountReducer.js';  
import { bonusReducer } from './reducers/bonusReducer.js';  
import thunk from 'redux-thunk'
import logger from 'redux-logger'

const store = createStore(
  combineReducers({
    account: accountReducer,
    bonus: bonusReducer,
  }),
  applyMiddleware(logger, thunk)
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>
);
