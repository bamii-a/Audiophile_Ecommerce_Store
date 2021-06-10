import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import styled from "styled-components";
import { backToTop, formatPrice } from "../utility/helpers";



const CartTotals = () => {
  const {
    setShowCart,
    total_amount,
    shipping_fee,
    valueAddedTax,
  } = useCartContext();
    
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
      <Link to="/checkout" onClick={() => setShowCart(false)}>
        <button className="btn checkoutBtn" onClick={() => backToTop()}>
          Checkout
        </button>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div``

export default CartTotals;
