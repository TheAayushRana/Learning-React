import { configureStore } from "@reduxjs/toolkit";
import bonusReducer from "./slices/bonusSlice";
import accountReducer from "./slices/accountSlice";

export const store = configureStore({
    reducer: {
        account: accountReducer,
        bonus: bonusReducer
    }
})