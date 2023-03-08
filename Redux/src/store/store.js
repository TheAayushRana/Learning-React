import { configureStore } from "@reduxjs/toolkit"; // need to import from binding react-redux
import cartSlice from "./cartSlice";

// configStore is also object like createSlice function
const store = configureStore({
  reducer: {
    cart: cartSlice, // reducer name
  },
});

export default store;
