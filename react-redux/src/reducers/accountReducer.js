import { amountIncFulfilled, amountIncPending, amountIncRejected, dec, decByAmount, inc, incByAmount } from '../actions';

export function accountReducer(state = { amount: 0 }, action) {
  switch (action.type) {
    case inc:
      return { amount: state.amount + 1 };
    case dec:
      return { amount: state.amount - 1 };
    case incByAmount:
      return { amount: state.amount + action.payload };
    case decByAmount:
      if(state.amount > action.payload) {
        return { amount: state.amount - action.payload };
      }
      else{
        return { amount: state.amount, error: 'Low balance'}
      }
    case amountIncPending:
        return { ...state, loading: true}
    case amountIncFulfilled:
        return { amount: state.amount + action.payload, loading: false}
    case amountIncRejected: 
        return { ...state, error: action.error, loading: false} // action.error to get error
    default:
      return state;
  }
}
