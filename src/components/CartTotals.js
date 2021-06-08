import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import styled from "styled-components";


const CartTotals = () => {
  const {
    setShowCart,
    cart,
    clearCart,
    total_amount,
    shipping_fee,
    valueAddedTax,
  } = useCartContext();
  let vat = 0.2;
  vat = 0.2 * total_amount;
  return (
    <Wrapper>
      <div className="subtotal">
        <h5>subtotal</h5>
        <h5>${total_amount}</h5>
      </div>
      <div className="shipping">
        <h5>shipping</h5>
        <h5>${shipping_fee}</h5>
      </div>
      <div className="vat">
        <h5>VAT</h5>
        <h5>${vat}</h5>
          </div>
          <hr />
      <div className="total">
        <h4>total</h4>
        <h4>${total_amount + vat + shipping_fee}</h4>
          </div>
          <hr />
      <Link to="/checkout" onClick={() => setShowCart(false)}>
        <button className="btn checkoutBtn">Checkout</button>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div``

export default CartTotals;
