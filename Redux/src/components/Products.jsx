import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import Loading from "../assets/loading.gif";
import { STATUS } from "../store/productSlice";

function Products() {
  const dispatch = useDispatch();
  // renaming data as products
  const { data: products, status } = useSelector((state) => state.product);

  const addProduct = (product) => {
    dispatch(add(product));
  };

  if (status === STATUS.LOADING) {
    return (
      <h3 className="loading">
        Loading...
        <img className="loading-img" src={Loading} alt="Loading" />
      </h3>
    );
  }

  return (
    <>
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

export default Products;
