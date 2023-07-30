import { applyMiddleware, createStore } from "redux"
import logger from "redux-logger"
import axios from "axios"
import thunk from "redux-thunk"

// action const name
const amountIncPending = "amountInc/pending"
const amountIncFulfilled = "amountInc/fulfilled"
const amountIncRejected = "amountInc/rejected"

// store
const store = createStore(amountReducer, applyMiddleware(logger.default, thunk.default))

// amountReducer
function amountReducer(state= {amount : 1 }, action){
    switch (action.type) {
        case amountIncPending:
                return { ...state, loading: true}
                break;
        case amountIncFulfilled:
                return { amount: state.amount + action.payload, loading: false}
                break;
        case amountIncRejected: 
                return { ...state, error: action.error, loading: false} // action.error to get error
                break;
        default: return state;
                break;
    }
}

// If we want to wait for dispatch or want to make async calls (api) we need to send 
// function defination to dispatch but here we also need to get id parameter so we
// created another function which is returning function.

function getUser(id){
    return async (dispatch, getState) => {
        try {
            dispatch(userIncrementPending())   
            const { data } = await axios.get(`http://localhost:3000/acconts/${id}`);
            dispatch(userIncrementFulfilled(data.amount))   
        } catch (error) {
            dispatch(userIncrementRejected(error.message))   
        }
    }
}
// for each api call there are 3 actions pending, rejected and fulfilled
  function userIncrementPending(){
    return { type: amountIncPending }
  }
  
  function userIncrementFulfilled(value){
    return { type: amountIncFulfilled , payload: value }
  }
  
  function userIncrementRejected(error){
    return { type: amountIncRejected , error }
  }

// when we want to dispatch a action where we need to wait for sometime (for api call) then we 
// need to pass a function defination in the dispatch which takes 2 arguments (dispatch, getState)
store.dispatch(getUser(1))
// actions are always plain object which has type and payload. But if we want to send function
// we need to add middleware to store to handle dispatching. redux-thunk handles dispatching function