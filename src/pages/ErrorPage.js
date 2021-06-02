import React from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
      <Wrapper className="section section-center">
        <h4>Error loading Page</h4>
        <Link to="/" className="btn">
          go back home
        </Link>
        <Link to="/speakers" className="btn">
          see speakers category
        </Link>
        <Link to="/headphones" className="btn">
          see headphones category
        </Link>
        <Link to="/earphones" className="btn">
          see earphones category
        </Link>
      </Wrapper>
    );
}

const Wrapper = styled.div`
text-align:center;
display:grid;
gap:1rem;
`
export default ErrorPage
