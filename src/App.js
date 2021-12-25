import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import Product from "./Product";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Product />
      </BrowserRouter>
      <HomePage />
    </div>
  );
}

export default App;
