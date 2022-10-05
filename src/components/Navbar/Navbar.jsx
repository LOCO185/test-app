import React from "react";
import { Badge } from "@material-ui/core";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import styled from "styled-components";
import { mobile } from "../../responsive";

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input placeholder="Search" />
                    <SearchIcon style={{ color: "gray", fontSize: 16}} />
                </SearchContainer>
            </Left>
            <Center>
                <Logo>LOCO,</Logo>
            </Center>
            <Right>
                <MenuItem>REGISTER</MenuItem>
                <MenuItem>SIGN IN</MenuItem>
                <MenuItem>
                    
                </MenuItem>
            </Right>
        </Wrapper>
    </Container>
  );
};

export default Navbar;
