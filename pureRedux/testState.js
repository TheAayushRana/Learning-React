const state = { account: { amount: 1 }, bonus: { point: 1 } };
// Now if we create a new state to change bonus point by 1

// const newState= { account: state.account , bonus: { point: state.bonus.point + 1 } }
// newState account value has same reference of account state

const newState = {account: {...state.account} , bonus: { point: state.bonus.point + 2 } }
// this makes shallow copy of state account value

console.log(state, newState)
state.account.amount +=1; 
console.log(state, newState)

// So it is difficult to update the long state so we need to create multiple reducer to manage state