import React from 'react'
import styled from "styled-components";

const NavbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  margin: 0px 10px 15px 0px;
`
const NavbarTitle = styled.h2`
  margin: 10px;
  margin-left: 0px;
  margin-top: 0px;
  font-size: 45px;
  color: #3262a8;
`

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarTitle>Penn Course Cart</NavbarTitle>
    </NavbarContainer>
  );
};

export default Navbar;
