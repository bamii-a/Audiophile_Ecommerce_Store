import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import hamburger from "../assets/shared/tablet/icon-hamburger.svg";
import data from "../menu.json";
import logo from "../assets/shared/desktop/logo.svg";
import cartIcon from "../assets/shared/desktop/icon-cart.svg";
import navlinks from "../navlinks.json";
import { FaAngleRight } from "react-icons/fa";
import { Cart } from "../components";
import { useCartContext } from "../context/CartContext";
import { backToTop } from "../utility/helpers";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const { showCart, setShowCart, total_items } = useCartContext()

  return (
    <Wrapper>
      <nav className="nav-center">
        <div className="nav-header">
          <button
            type="button"
            className="nav-toggle"
            onClick={() => setShowLinks(!showLinks)}
          >
            <img src={hamburger} alt="menu" className="hamburger" />
          </button>
          <Link to="/" onClick={() => setShowLinks(false)}>
            <img src={logo} alt="logo" className="logo" />
          </Link>
          <ul className="nav-links">
            {navlinks.map(({ id, url, text }) => {
              return (
                <li key={id}>
                  <Link to={url}>{text}</Link>
                </li>
              );
            })}
          </ul>
          <div
            className="cart-container"
            onClick={() => setShowCart(!showCart)}
          >
            <img src={cartIcon} alt="cart" className="cart" />
            <span className="cart-value">{total_items}</span>
          </div>
        </div>

        <div className={`${showLinks ? "sidebar show-sidebar" : "sidebar"}`}>
          {data.map(({ id, category, image, url }) => {
            return (
              <div key={id} className="item-container">
                <img src={image} alt={category} />
                <div className="item-container-text">
                  <h4>{category}</h4>
                  <Link
                    to={url}
                    className="link-to-category"
                    onClick={() => setShowLinks(!showLinks)}
                  >
                    <h5 onClick={() => backToTop()}>
                      shop
                      <span className="icon">
                        <FaAngleRight />
                      </span>
                    </h5>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
        <Cart />
      </nav>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  background: var(--clr-primary-2);
  display: flex;
  align-items: center;
  position: sticky;
  width: 100%;
  top: 0;
  z-index: 2;
  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
    z-index: 999;
    position: relative;
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0;
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    cursor: pointer;
  }
  .nav-links {
    display: none;
  }
  .cart-container {
    display: flex;
    align-items: center;
    position: relative;
    z-index: 111;
    img {
      height: 1.6rem;
    }
  }
  .cart-value {
    position: absolute;
    top: -10px;
    right: -10px;
    background: var(--clr-primary-1);
    color: var(--clr-primary-4);
    width: 18px;
    height: 18px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2px;
    font-weight: 700;
    font-size: 0.75rem;
    z-index: 111;
  }
  .cart {
    cursor: pointer;
    &:hover {
      color: var(--clr-primary-1);
    }
  }
  .hamburger {
    transition: var(--transition);
    height: 1.4rem;
  }
  .hamburger:hover {
    transition: var(--transition);
    transform: rotate(90deg);
  }

  .sidebar {
    position: absolute;
    width: 100%;
    height: 0;
    overflow: hidden;
    transition: var(--transition);
    background: white;
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
  }
  .show-sidebar {
    height: 40rem;
    transition: var(--transition);
  }
  .item-container {
    text-align: center;
    position: relative;
    z-index: 1;
    width: 85%;
    margin: 4rem auto;
    height: 8rem;
    background: var(--clr-primary-4);
    border-radius: var(--radius);
    img {
      width: 7rem;
      position: absolute;
      top: -20%;
      left: 50%;
      transform: translate(-50%);
    }
    .item-container-text {
      padding-top: 3.5rem;
      h4 {
        text-transform: uppercase;
        font-size: 1.2rem;
      }
      h5 {
        font-weight: 900;
        text-transform: uppercase;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .link-to-category {
        color: var(--clr-primary-1);
      }
      .icon {
        color: var(--clr-primary-1);
        margin-left: 10px;
        font-size: 1.5rem;
        display: grid;
      }
    }
  }

  @media (min-width: 992px) {
    height: 8vh;
    .cartDiv {
      width: 30%;
      margin: 0 0 0 60rem;
    }

    .sidebar {
      visibility: hidden;
    }
    .sidebarContainer {
      height: auto !important;
    }
    .nav-toggle {
      display: none;
    }
    .nav-center {
      width: 95vw;
      height: 5vh;
      background: var(--clr-primary-2);
    }
    .logo {
      height: 2rem;
    }
    .nav-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 0;
      .hamburger {
        display: none;
      }
      .nav-links {
        display: flex;
        justify-content: center;
        li {
          margin: 0 0.5rem;
        }
        a {
          color: var(--clr-white);
          font-size: 1rem;
          text-transform: capitalize;
          letter-spacing: var(--spacing);
          padding: 0.5rem;
          &:hover {
            color: var(--clr-primary-1);
          }
        }
      }
    }
    .cart-container {
      img {
        height: 2rem;
      }
    }
    .cart-value {
      width: 23px;
      height: 23px;
      border-radius: 50%;
      padding: 2px;
      font-weight: 700;
      font-size: 1rem;
      z-index: 111;
    }
    .cart {
      cursor: pointer;
      &:hover {
        color: var(--clr-primary-1);
      }
    }
  }
`;
export default Navbar;
