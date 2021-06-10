import React from "react";
import styled from "styled-components";
import { useCartContext } from "../context/CartContext";
import { CheckoutCartItem, CheckoutTotals } from "../components";


const CheckoutCartSummary = () => {
  const { cart } = useCartContext();
  return (
    <Wrapper>
      <article className="cartDiv">
        <div className="cart-contents">
          <h4 className="cart-heading">Summary</h4>

          <article className="cart-details">
            {cart.map((item) => {
              return <CheckoutCartItem key={item.id} {...item} />;
            })}
          </article>
          <CheckoutTotals />
        </div>
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .cartDiv {
    position: relative;
    background: var(--clr-white);
    width: 90%;
    margin: 0 auto;
    border-radius: var(--radius);
  }

  .cart-contents {
    margin: 2rem auto;
    .cart-heading {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 20px;
      text-transform: uppercase;
      margin: 0;
    }
  }
  .cart-Item-Img {
    width: 30%;
    border-radius: var(--radius);
  }

  .cart-extras {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1rem 0;
  }

  @media (min-width: 992px) {
    width: 70%;
    .cartDiv {
      width: 100%;
      margin: 0 auto;
    }
  }
`;
export default CheckoutCartSummary;
