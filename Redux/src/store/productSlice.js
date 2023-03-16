import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Object.freeze() method freezes object means existing properties can not be changed
export const STATUS = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});

const productSlice = createSlice({
  name: "Product",
  initialState: {
    status: "",
    data: [],
  },
  // standard reducer logic, with auto-generated action types per reducer
  reducers: {
    setProducts(state, action) {
      state.data = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
  },
  extraReducers: (builder) => {
    // works like switch case
    // Add reducers for additional action types here, and handle state as needed
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.status = STATUS.LOADING;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.status = STATUS.IDLE;
      state.data = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.status = STATUS.ERROR;
    });
  },
});

export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;

// Thunk Function from Redux toolkit->
// 1. First, create the thunk 2. Then, handle actions in your reducers
// createAsyncThunk accepts 3 parameters string type, payloadCreator callback & options obj
export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const res = await fetch("https://api.escuelajs.co/api/v1/products");
  const data = await res.json();
  return data;
});

// Default Thunk function
// export function fetchProducts() {
//   When fetchProducts() is called it returns a new async function
//   return async function fetchProductThunk(dispatch, getState) {
//     dispatch(setStatus(STATUS.LOADING));
//     try {
//       const res = await fetch("https://api.escuelajs.co/api/v1/products");
//       const data = await res.json();
//       dispatch(setProducts(data));
//       dispatch(setStatus(STATUS.IDLE));
//     } catch (error) {
//       dispatch(setStatus(STATUS.ERROR));
//       return;
//     }
//   };
// }
