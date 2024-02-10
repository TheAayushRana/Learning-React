import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  points: 0,
}

// CreateSlice: A function that accepts an initial state, an object full of reducer functions, & 
// "slice name", & it automatically generates action creators & action types that correspond 
// to the reducers & state.

export const bonusSlice = createSlice({
  name: 'bonus',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.points += 1
    },
    decrement: (state) => {
      state.points -= 1
    },
    incrementByAmount: (state, action) => {
      state.points += action.payload
    },
    reset: (state) => {
      state.points = 0;
    }
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, } = bonusSlice.actions

export default bonusSlice.reducer