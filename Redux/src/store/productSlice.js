import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "Product",
  initialState: {
    status: "",
    data: [],
  },
  reducers: {
    setProducts(state, action) {
      state.data = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;

//Thunk function
export function fetchProducts() {
  // When fetchProducts() is called it returns a new async function
  return async function fetchProductThunk(dispatch, getState) {
    dispatch(setStatus("LOADING"));
    try {
      const res = await fetch("https://api.escuelajs.co/api/v1/products");
      const data = await res.json();
      dispatch(setProducts(data));
      dispatch(setStatus("IDLE"));
    } catch (error) {
      dispatch(setStatus("ERROR"));
      return;
    }
  };
}
