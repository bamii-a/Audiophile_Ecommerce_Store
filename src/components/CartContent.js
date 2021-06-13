import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import { IoClose } from "react-icons/io5";
import { CartItems, CartTotals } from "../components";

const CartContent = () => {
  const { showCart, setShowCart, cart, clearCart, total_items } =
    useCartContext();

  if (cart.length < 1) {
    return (
      <Wrapper>
        <section
          className={`${showCart ? "show-overlay overlay " : "overlay"}`}
          onClick={() => setShowCart(false)}
        >
          <article
            className={`${
              showCart ? "show-cart emptyCartHeight cartDiv " : "cartDiv "
            }`}
          >
            <button
              type="button"
              className="closeCartBtn closeEmptyCart"
              onClick={() => setShowCart(false)}
            >
              <IoClose />
            </button>
            <h4 style={{ "text-align": "center", "margin-top": "1rem" }}>
              cart is empty
            </h4>
            <Link
              to="/headphones"
              className="btn"
              style={{
                "border-radius": "16px",
                width: "40%",
                margin: "0 auto",
                display: "flex",
                "justify-content": "center",
                "align-items": "center",
              }}
              onClick={() => setShowCart(false)}
            >
              fill cart
            </Link>
          </article>
        </section>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <section className={`${showCart ? "show-overlay overlay " : "overlay"}`} onClick={() => setShowCart(false)}>
        <article className={`${showCart ? "show-cart cartDiv " : "cartDiv"}`}>
          <div className="cart-contents">
            <div className="cart-heading">
              <h4>
                {" "}
                cart<span>({total_items})</span>
              </h4>
              <button
                type="button"
                className="closeCartBtn"
                onClick={() => setShowCart(false)}
              >
                <IoClose />
              </button>
            </div>
            <article className="cart-details">
              {cart.map((item) => {
                return <CartItems key={item.id} {...item} />;
              })}
            </article>
            <div className="cart-extras">
              <Link
                to="/speakers"
                className="btn shopping"
                onClick={() => setShowCart(false)}
              >
                conitnue shopping
              </Link>
              <button
                type="button"
                className="removeBtn"
                onClick={() => clearCart()}
              >
                Remove all
              </button>
            </div>
            <CartTotals />
          </div>
        </article>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: grid;
    place-items: center;
    transition: var(--transition);
    visibility: hidden;
    z-index: -1;
  }
  .show-overlay {
    visibility: visible;
    transition: var(--transition);
    z-index: 10;
  }
  .cartDiv {
    position: absolute;
    background: var(--clr-white);
    width: 90%;
    border-radius: var(--radius);
    transform: scale(0);
    visibility: hidden;
    transition: var(--transition);
  }
  .emptyCartHeight {
    height: 30vh !important;
  }
  .show-cart {
    height: 80vh;
    visibility: visible;
    z-index: 2;
    transform: scale(1);
    animation: cartMove 1s;
    transition: var(--transition);
  }
  .closeCartBtn {
    border: none;
    font-size: 22px;
    background: transparent;
    color: var(--clr-primary-1);
    cursor: pointer;
    transition: var(--transition);
  }
  .closeCartBtn:hover {
    transform: rotate(360deg);
    transition: var(--transition);
  }
  .closeEmptyCart {
    margin: 4rem 4rem 1rem;
    font-size: 26px;
  }
  @keyframes cartMove {
    0% {
      transform: scale(0);
    }
    25% {
      transform: scale(0);
    }
    75% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
  .removeBtn {
    background-color: transparent;
    display: inline-block;
    cursor: pointer;
    color: var(--clr-black);
    font-size: 10px;
    text-decoration: none;
    border: none;
    text-transform: uppercase;
    transition: var(--transition);
    font-weight: 400;
    border-bottom: 2px solid var(--clr-primary-1);
  }
  .removeBtn:hover {
    border-bottom: 4px solid var(--clr-primary-1);
    ransition: var(--transition);
  }
  .cart-heading {
    h4 {
      font-size: 20px;
      text-transform: uppercase;
      margin: 0;
    }
  }
  .cart-contents {
    margin: 2rem;
    .cart-heading {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  .cart-Item-Img {
    width: 30%;
    border-radius: var(--radius);
  }

  .cart-details {
    height: 25vh;
    overflow: auto;
  }

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
    span {
      color: var(--clr-primary-1);
    }
  }
  .checkoutBtn {
    width: 100%;
    padding: 15px 25px;
    margin: 1rem 0;
  }
  .cart-extras {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1rem 0;
  }
  .shopping {
    padding: 5px 5px;
    font-size: 12px;
  }
  @media (min-width: 992px) {
    .cartDiv {
      width: 30%;
      margin: 0;
    }
    .show-cart {
      height: 60vh;
    }
  }
`;
export default CartContent;
