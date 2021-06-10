import React, {useState} from "react";
import styled from "styled-components";
import { CheckoutCartSummary, CheckoutForm } from "../components";
import { useCheckoutContext} from '../context/CheckoutContext'
const CheckoutPage = () => {
   const {handleSubmit} = useCheckoutContext()

  return (
    <Wrapper>
      <CheckoutForm  />
          <CheckoutCartSummary />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  @media (min-width: 992px) {
    width: 60vw;
    margin: 0 auto;
    margin-top: 3rem;
    display: flex;
  }
  @media (min-width: 992px) and (max-width: 1400px) {
    width: 50vw;
  }
  ${"" /* justify-content:center; */}
`;
export default CheckoutPage;
