import axios from 'axios';

// action const name
export const inc = 'account/increment'; // stateName/actionType
export const dec = 'account/decrement';
export const incBonus = 'bonus/increment';
export const incByAmount = 'account/incByAmount'
export const amountIncPending = 'amountInc/pending';
export const amountIncFulfilled = 'amountInc/fulfilled';
export const amountIncRejected = 'amountInc/rejected';

export function getUser(id) {
  return async (dispatch, getState) => {
    try {
      dispatch(userIncrementPending());
      const { data } = await axios.get(`http://localhost:3000/acconts/${id}`);
      dispatch(userIncrementFulfilled(data.amount));
    } catch (error) {
      dispatch(userIncrementRejected(error.message));
    }
  };
}

export function increment(){
  return { type: inc }
}

export function decrement(){
  return { type: dec }
}

export function incrementByAmount(value){
  return { type: incByAmount, payload: value }
}

export function userIncrementPending() {
  return { type: amountIncPending };
}

export function userIncrementFulfilled(value) {
  return { type: amountIncFulfilled, payload: value };
}

export function userIncrementRejected(error) {
  return { type: amountIncRejected, error };
}

export function incrementBonus(){
  return { type: incBonus }
}