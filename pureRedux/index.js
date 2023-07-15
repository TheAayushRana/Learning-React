import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger'

// action const names
const inc = 'increment';
const dec = 'decrement';
const incByValue = 'incrementByValue';

const store = createStore(reducer, applyMiddleware(logger.default));

const array = [];

// reducer
function reducer(state = { count: 1 }, action) {
  // immutability
  if (action.type === inc) {
    return {count : state.count+1}
  }
  else if (action.type === dec) {
    return {count : state.count-1}
  }
  else if (action.type === incByValue) {
    return {count : state.count + action.payload}
  }
  return state;
}

// whenever reducer is run
// store.subscribe(() => {
//   array.push(store.getState());
//    console.log(array);
// });

// state
// console.log(store.getState());

// action creators 
function increment(){
  return { type : inc}
}
function decrement(){
  return { type : dec}
}
function incrementByValue(value){
  return { type : incByValue, payload: value}
}

// action
setInterval(() => store.dispatch(decrement()), 2000);

// console.log(store.getState());
