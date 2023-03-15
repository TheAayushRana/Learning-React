import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../store/productSlice";
import Products from "../components/Products";

function HomePage() {
  // useDispatch hook is used to access redux dispatch function
  const dispatch = useDispatch();

  // useSelector is used to get state and useDispatch is used to update state

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <>
      <h2 style={{ padding: "0px 20px" }}>Welcome to Store</h2>
      <Products />
    </>
  );
}

export default HomePage;
