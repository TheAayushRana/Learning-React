import axios from 'axios';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const inc = 'increment';
const incByAmount = 'incrementByAmount';

const store = createStore(
  reducer,
  applyMiddleware(logger.default, thunk.default)
);

// reducer changes the state depending upon the action. It takes 2 arguments (currentState, action)
// reducer always return a new state
function reducer(state = { amount: 1 }, action) {
  switch (action.type) {
    case inc:
      return { amount: state.amount + 1 };
    case incByAmount:
      return { amount: state.amount + action.payload };
    default:
      return state;
  }
}

// Async API Call
// async function getUser() {
//   const { data } = await axios.get('http://localhost:3000/accounts/1');
// }
// getUser();

// action creators - action return karta ha
function increment() {
  return { type: inc };
}

// actions can't be asynchronous , they don't wait. So For a asynchronous call use thunkmiddleware
// jab hum dispatch kar rahe ha to instantly hona chahiye
function getId(id) {
  return async (dispatch, getState)=> {
    const { data } = await axios.get(`http://localhost:3000/accounts/${id}`);
    dispatch(incrementByAmount(data.amount));
  };
}

function incrementByAmount(value) {
  return { type: incByAmount, payload: value };
}

// whenever we dispatch a action from here it will go to the reducer
// action is a object which has type and payload properties
store.dispatch(getId(2));
// Agar action jo dispatch kar rahe ha vo plain object ha to seedha reducer m jaise kaam karta ha vaise hi karega par
// jab function defination milti ha to function ko execute karta ha (samajata ha ki middleware ha)

// Using thunk if we want to do something where you need to wait a dispatch so send a function defination 
// into dispatch. In that function we get 2 parameters (dispatch, getState)
