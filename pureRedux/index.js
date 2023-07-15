import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger'

const store = createStore(reducer, applyMiddleware(logger.default));

const array = [];

// reducer
function reducer(state = { count: 1 }, action) {
  // immutability
  if (action.type === 'increment') {
    return {count : state.count+1}
  }
  else if (action.type === 'decrement') {
    return {count : state.count-1}
  }
  else if (action.type === 'incrementByValue') {
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

// action
setInterval(() => store.dispatch({ type: 'incrementByValue', payload:10 }), 2000);

// console.log(store.getState());
