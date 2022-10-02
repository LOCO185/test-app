import styled from "styled-components";
// import mobile responsive

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Footer = () => {
  return <div>Footer</div>;
};

export default Footer;
