import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import styled from "styled-components";
import { formatPrice } from "../utility/helpers";
import { useCheckoutContext } from "../context/CheckoutContext";


const CheckoutTotals = () => {
  const { total_amount, shipping_fee, valueAddedTax } =
    useCartContext();
      const { handleSubmit } = useCheckoutContext();


  let vat = valueAddedTax;
  vat = valueAddedTax * total_amount;

  return (
    <Wrapper>
      <div className="subtotal">
        <h5>subtotal</h5>
        <h5>{formatPrice(total_amount)}</h5>
      </div>
      <div className="shipping">
        <h5>shipping</h5>
        <h5>{formatPrice(shipping_fee)}</h5>
      </div>
      <div className="vat">
        <h5>VAT</h5>
        <h5>{formatPrice(vat)}</h5>
      </div>
      <hr />
      <div className="total">
        <h4>total</h4>
        <h4>
          <span>{formatPrice(total_amount + shipping_fee + vat)}</span>
        </h4>
      </div>
      <hr />
      <Link to="/checkout" >
        <button type='submit' className="btn continueBtn" onClick={handleSubmit}>
          continue & pay
        </button>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .shipping,
  .vat,
  .subtotal {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .total {
    display: flex;
    justify-content: space-between;
    margin: 1rem 0;
    h4 {
      text-transform: uppercase;
    }
    span {
      color: var(--clr-primary-1);
    }
  }
  .continueBtn {
    width: 100%;
    padding: 15px 25px;
    margin: 1rem 0;
  }
`;

export default CheckoutTotals;
