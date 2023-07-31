import React from 'react';
import ReactDOM from 'react-dom/client';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import App from './App.jsx';
import './index.css';
import { accountReducer } from './reducers/accountReducer.js';  
import { bonusReducer } from './reducers/bonusReducer.js';  
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { Provider } from 'react-redux'

const store = createStore(
  combineReducers({
    account: accountReducer,
    bonus: bonusReducer,
  }),
  applyMiddleware(logger, thunk)
);

// Using Provider now we can use methods from store anywhere in the app using react-redux libaray 
// i.e dispatch method and state value. Redux ki state, React ki state se map hoti ha 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}> 
      <App/>
    </Provider>
  </React.StrictMode>
);
