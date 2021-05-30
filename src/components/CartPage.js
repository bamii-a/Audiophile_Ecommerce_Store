import React from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";

const CartPage = () => {
    return (
      <Wrapper>
        <aside className="sidebar-wrapper">cartpage</aside>
      </Wrapper>
    );
}

const Wrapper = styled.div`
  height: 30rem;
  background: blue;
  width:90%;
  margin: 2rem auto;
`;
export default CartPage
