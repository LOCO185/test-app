import React from "react";
import { Redirect, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Exclusive from "./components/Exclusive/Exclusive";
import Shops from "./components/Shops/Shops";
import Mens from "./components/Mens/Mens";
import Womens from "./components/Womens/Womens";


function Product() {
  return (
    <div className="main">
        <div>
          <Header />
          <Switch>
            <Redirect path="/shops" exact component={Shops} />
            <Redirect path="/mens" exact component={Mens} />
            <Redirect path="/exclusive" exact component={Exclusive} />
            <Redirect path="/womens" exact component={Womens} />
          </Switch>
        </div>
    </div>
  );
}

export default Product;