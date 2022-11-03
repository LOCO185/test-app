import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Product from "./pages/Product";
// import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";

function App() {
  return (
    <Router>
      <Route path="/">
        <Home />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/cart">
        <Cart />
      </Route>
      <Route path="/product">
        <Product />
      </Route>
    </Router>
  );
}

export default App;
