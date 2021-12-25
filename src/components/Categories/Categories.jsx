import React from "react";
import "./style.css";

const Categories = () => {
  return (
    <div className="categories">
      <div className="container">
          <a href="/shops"><div className="card card1">SHOPS</div></a>
          <a href="/mens"><div className="card card2">MENS</div></a>
          <a href="/exclusive"><div className="card card3">EXCLUSIVE</div></a>
          <a href="/womens"><div className="card card4">WOMENS</div></a>
      </div>
    </div>
  );
};
export default Categories;
