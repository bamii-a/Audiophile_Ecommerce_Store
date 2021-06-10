import React from "react";
import { HiMinusSm, HiPlusSm } from "react-icons/hi";
import { useCartContext } from "../context/CartContext";
import styled from "styled-components";
import { formatPrice } from "../utility/helpers";

const CartItems = ({id, images, price, name, amount}) => {
  const { removeItem, toggleAmount } = useCartContext();
//   const [amount, setAmount] = useState(1);

    const increase = () => {
   toggleAmount(id, 'increase')
  };
    const decrease = () => {
    toggleAmount(id, 'decrease')
  };

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
          <HiMinusSm onClick={() => decrease()} />
          <h4 className="count">{amount}</h4>
          <HiPlusSm onClick={() => increase()} />
        </div>
      </div>
      <button
        type="button"
        className=" btn trashBtn"
        onClick={() => removeItem(id)}
      >
        delete item
      </button>
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
  .trashBtn {
    font-size:9px;
    cursor: pointer;
    padding: 5px;
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
    width: 6rem;
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
    }
  }
`;
export default CartItems;
