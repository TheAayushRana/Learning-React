import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

// createSlice takes 3 properties- name, initialState and reducers
const cartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    // A reducer is a pure function that takes the current state of an application & an
    // action dispatched to the store, and returns the new state.
    add(state, action) {
      // State parameter represents the current state of application, while the action parameter
      // contains information about action that was dispatched, such as type & payload data
      state.push(action.payload);
    },
    remove(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
