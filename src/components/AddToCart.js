import React, { useState } from "react";
import styled from "styled-components";
import { useCartContext } from "../context/CartContext";
import { HiMinusSm, HiPlusSm } from "react-icons/hi";
import { Link } from "react-router-dom";


const AddToCart = ({...item}) => {
  const { showCart, setShowCart, addToCart } = useCartContext();
    const [amount, setAmount] = useState(1);
    const {id} = item


  if (amount < 1) {
    setAmount(1);
  }

  return (
    <Wrapper>
      <div className="cartAdd">
        <div className="amount">
          <HiMinusSm onClick={() => setAmount(amount - 1)} />
          <h4 className="count">{amount}</h4>
          <HiPlusSm onClick={() => setAmount(amount + 1)} />
        </div>
        <Link to="" onClick={() => setShowCart(!showCart)}>
          <button className="btn" onClick={() => addToCart(id, amount, item)}>
            add to cart
          </button>
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .cartAdd {
    display: flex;
    justify-content: flex-start;
    margin: 1rem auto 1rem 0;
    width: 100%;
  }
  .amount {
    width: 35%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: var(--clr-primary-4);
    font-size: 17px;
    padding: 3px 20px;
    h4 {
      margin: 0;
      font-size: 15px;
      align-self: center;
    }
  }
  @media (min-width: 415px) and (max-width: 991px) {
    .cartAdd {
      width: 100%;
      justify-content: space-between;
    }
  }
  @media (min-width: 992px) {
    .cartAdd {
      width: 70%;
      justify-content: space-between;
    }
  }
`;

export default AddToCart;
