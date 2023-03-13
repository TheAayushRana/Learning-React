import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { fetchProducts } from "../store/productSlice";

function HomePage() {
  const dispatch = useDispatch(); // useDispatch hook is used to access redux dispatch function
  const { data: products, status } = useSelector((state) => state.product); 

  // useSelector is used to get data from state and useDispatch is used to update state

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const addProduct = (product) => {
    dispatch(add(product));
  };

  if (status === "ERROR") {
    return <h1>ERROR</h1>;
  }

  return (
    <>
      <h2 style={{ textAlign: "center" }}>Welcome to Store</h2>
      <div className="products">
        {products.map((product) => (
          <div className="product" key={product.id}>
            <img className="product-img" src={product.images[0]} />
            <p>
              <b>{product.title}</b>
            </p>
            <p>
              Price: <b>{product.price}</b>
            </p>
            <button onClick={() => addProduct(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default HomePage;
