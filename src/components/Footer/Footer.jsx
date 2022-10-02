import styled from "styled-components";
// import mobile responsive

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

const Footer = () => {
  return <div>Footer</div>;
};

export default Footer;
