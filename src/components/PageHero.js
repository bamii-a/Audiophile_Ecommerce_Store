import React from 'react'
import styled from "styled-components";


const PageHero = ({title}) => {
    return (
        <Wrapper>
            <h3>
            {title}
            </h3>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  text-align: center;
  height: 13vh;
  background: var(--clr-primary-2);
  color: var(--clr-white);
  display: flex;
  justify-content: center;
  align-items: center;
  h3 {
    letter-spacing: 5px;
    text-transform:uppercase;
  }
`;

export default PageHero
