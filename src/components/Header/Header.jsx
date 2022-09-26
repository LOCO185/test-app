import React from "react";
import "./style.css";
// import Cart from "../Cart/Cart";
// import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div>
        <a href="#/">
          <h1>Clothing App</h1>
        </a>
      </div>
      <div className="right">
        <a href="#/shop">Shop</a>
        <a href="#/categories">Categories</a>
        <a href="#/signin">Sign In</a>
        <a href="#/cart">Cart ()</a>
      </div>
    </header>
  );
};
export default Header;
