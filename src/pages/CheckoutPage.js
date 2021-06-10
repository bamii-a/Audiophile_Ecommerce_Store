import React from "react";
import styled from "styled-components";
import { CheckoutCartSummary, CheckoutForm } from "../components";
const CheckoutPage = () => {

  return (
    <Wrapper>
      <CheckoutForm  />
          <CheckoutCartSummary />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  @media (min-width: 992px) {
    width: 65vw;
    margin: 0 auto;
    max-width: var(--max-width);
    margin-top: 3rem;
    display: flex;
    justify-content:space-between;
  }
  @media (min-width: 992px) and (max-width: 1400px) {
    width: 50vw;
  }
  ${"" /* justify-content:center; */}
`;
export default CheckoutPage;
