import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";

function Cart() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart);

  const removeProduct = (productId) => {
    dispatch(remove(productId));
  };

  return (
    <div className="cart">
      <h3>Cart</h3>
      {items.map((product) => (
        <div key={product.id} className="cart-product">
          <img
            className="cart-img "
            src={product.images[0]}
            alt={product.title}
          />
          <h4>{product.title}</h4>
          <h4>{product.price}</h4>
          <button onClick={() => removeProduct(product.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

export default Cart;
