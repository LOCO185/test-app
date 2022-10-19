import styled from "styled-components";
import { mobile } from "../responsive";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import NewsLetter from "../components/NewsLetter/NewsLetter";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;

const Product = () => {
  return <div>Product</div>;
};

export default Product;
