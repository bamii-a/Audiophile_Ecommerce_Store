import React from 'react'
import styled from "styled-components";

const hr = () => {
    return (
      <Wrapper>
        <hr />
      </Wrapper>
    );
}

const Wrapper = styled.div`
  text-align: center;
  hr {
    color: rgb(46, 46, 46);
  }
`;
export default hr
