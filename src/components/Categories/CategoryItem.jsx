import styled from "styled-components";


const CategoryItem = ({ item }) => {
    return (
      <Container>
        <Image src={item.img} />
        <Info>
          <Title>{item.title}</Title>
          <Button>SHOP NOW</Button>
        </Info>
      </Container>
    );
  };
  
  export default CategoryItem;