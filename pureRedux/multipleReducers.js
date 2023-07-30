import {applyMiddleware, combineReducers, createStore} from "redux"
import logger from "redux-logger";
import thunk from 'redux-thunk';

const inc  = "account/increment"; // stateName/actionType
const dec  = "account/decrement";
const incBonus  = "bonus/increment";

// now if we want to use many reducer we can't write reducer here directly in store. 
// Need to use combineReducers({ stateName: ReducerName }) 
const store = createStore(
  combineReducers({ // combineReducers is used to combine reducers
    account: accountReducer, // account is state name and accountReducer is reducer name
    bonus: bonusReducer
  }), applyMiddleware(logger.default, thunk.default));

// store.getState() - it is the combination of all state i.e global state 

// accountReducer
function accountReducer(state = { amount: 1 }, action){
  switch(action.type){
    case inc: return { amount : state.amount + action.payload }
    default: return state;
  }
}

// bonusReducer
function bonusReducer(state = { points: 0 } ,action){
  switch(action.type){
    case inc: 
      if(action.payload > 100 && action.payload < 1000){
        return { points: state.points + 1}
      }
      else if(action.payload >= 1000){
        return { point: state.points + 5}
      }
      return state
    case incBonus: return { points: state.points + 1 }
    default: return state
  }
}

// dispatch se hum action bhejte ha { type: action.name , payload: value }
store.dispatch( { type: inc, payload: 10 } );
// agar dono reducer m same action type ka naam dedoge to dono reducer chalenge