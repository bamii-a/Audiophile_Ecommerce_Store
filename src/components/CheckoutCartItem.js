import React from "react";
import styled from "styled-components";
import { formatPrice } from "../utility/helpers";

const CheckoutCartItem = ({ id, images, price, name, amount }) => { 

  return (
    <Wrapper>
      <div className="item-card">
        <div className="cartItemNamePriceImg">
          <img src={images} alt="name" className="cart-Item-Img" />
          <div className="cartItemNamePrice">
            <h5>{name}</h5>
            <h4>{formatPrice(price * amount)}</h4>
          </div>
        </div>
        <div className="amount">
          <h4 className="count"><span>x</span>{amount}</h4>
        </div>
      </div>
      <hr />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 4rem;
  hr {
    width: 20%;
    margin: 0.5rem auto;
    height: 1px;
    border: none;
    border-top: 1px solid var(--clr-primary-3);
  }
  
  .item-card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1rem 0;
    ${"" /* height:3rem; */}
  }
  .cartItemNamePriceImg {
    display: flex;
    justify-contents: flex-start;
    align-items: center;
    width: 60%;
  }
  .cartItemNamePrice {
    margin: 1rem;
    h4 {
      margin: 0;
      font-size: 15px;
    }
  }
  .amount {
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: var(--clr-primary-4);
    font-size: 17px;
    padding: 3px 10px;
    border-radius: var(--radius);
    h4 {
      margin: 0;
      font-size: 15px;
      align-self: center;
      span {
        text-transform: none;
      }
    }
  }
`;
export default CheckoutCartItem;
