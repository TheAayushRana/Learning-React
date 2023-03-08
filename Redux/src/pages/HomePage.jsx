import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../store/cartSlice";

function HomePage() {
  const dispatch = useDispatch(); // useDispatch hook is used to access redux dispatch function

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProduct = () => {
      fetch("https://api.escuelajs.co/api/v1/products", {
        method: "GET",
      })
        .then((response) => response.json())
        .then((data) => setProducts(data));
    };
    fetchProduct();
  }, []);

  const addProduct = (product) => {
    dispatch(add(product));
  };

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
