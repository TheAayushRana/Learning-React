import React from "react";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import "./App.css";
import { Provider } from "react-redux/es/exports";
import store from "./store/store";
import { Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Provider>
  );
}

export default App;
