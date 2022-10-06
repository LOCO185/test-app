import React from "react";
import styled from "styled-components";
import { mobile } from "../../responsive";
import SendIcon from "@mui/icons-material/Send";

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;

const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center" })}
`;

const NewsLetter = () => {
  return <div>NewsLetter</div>;
};

export default NewsLetter;
