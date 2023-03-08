import React, { useState } from "react";
import { useSelector } from "react-redux/es/exports";
import { Link } from "react-router-dom";

function Navbar() {
  const items = useSelector((state) => state.cart);

  return (
    <nav className="navbar">
      <h2>REDUX</h2>
      <div className="nav-items">
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
      </div>
      <h1>Cart Item: {items.length}</h1>
    </nav>
  );
}

export default Navbar;
