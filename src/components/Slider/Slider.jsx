import { useState } from "react";
import styled from "styled-components";
import sliderItems from "../../Data";
import { mobile } from "../../responsive";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ display: "none" })}
`;

const Slider = () => {
  return <div>Slider</div>;
};

export default Slider;
