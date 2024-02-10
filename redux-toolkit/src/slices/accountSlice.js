import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  amount: 0,
}

// CreateSlice: A function that accepts an initial state, an object full of reducer functions, & 
// "slice name", & it automatically generates action creators & action types that correspond 
// to the reducers & state.

export const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    increment : (state) => {
        state.amount += 1; 
    },
    decrement : (state) => {
      state.amount -= 1;
    },
    incrementByValue : (state, action) => {
      state.amount += action.payload;
    },
    decrementByValue : (state, action) => {
      state.amount -= action.payload;
    },
    reset : (state) => {
      state.amount = 0;
    }
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByValue, decrementByValue, reset } = accountSlice.actions;
export default accountSlice.reducer;