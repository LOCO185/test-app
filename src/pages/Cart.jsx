import styled from "styled-components";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { mobile } from "../responsive";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Cart = () => {
  return (
    <Container>
      <Wrapper></Wrapper>
    </Container>
  );
};

export default Cart;
