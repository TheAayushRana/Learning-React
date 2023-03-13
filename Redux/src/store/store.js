import { configureStore } from "@reduxjs/toolkit"; // need to import from binding react-redux
import cartReducer from "./cartSlice";
import productReducer from "./productSlice";

// configStore is also object like createSlice function
const store = configureStore({
  reducer: {
    // In this reducer object it contains 2 reducers
    cart: cartReducer, // state name: reducer
    product: productReducer,
  },
});

export default store;
