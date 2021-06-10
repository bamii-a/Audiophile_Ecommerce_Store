import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../assets/shared/desktop/logo.svg";
import facebookIcon from "../assets/shared/desktop/icon-facebook.svg";
import InstagramIcon from "../assets/shared/desktop/icon-instagram.svg";
import TwitterIcon from "../assets/shared/desktop/icon-twitter.svg";
import { backToTop } from "../utility/helpers";

const Footer = () => {
  return (
    <Wrapper>
      <div className="underline"></div>
      <div className="footer-container">
        <div className="column-one">
          <img src={logo} alt="logo" className="logo" />
          <ul className="footer-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Headphones" onClick={() => backToTop()}>
                Headphones
              </Link>
            </li>
            <li>
              <Link to="/Speakers" onClick={() => backToTop()}>
                Speakers
              </Link>
            </li>
            <li>
              <Link to="/Earphones" onClick={() => backToTop()}>
                Earphones
              </Link>
            </li>
          </ul>
        </div>
        <div className="column-two">
          <div className="content">
            <p>
              Audiophile is an all in one stop to fulfill your audio needs.
              We're a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we’re open 7 days a week.
            </p>
            <h5>
              &copy;{new Date().getFullYear()}
              <span> All rights reserved</span>
            </h5>
          </div>
          <div className="social-icons">
            <img src={facebookIcon} alt="facebook" className="icon" />
            <img src={TwitterIcon} alt="twitter" className="icon" />
            <img src={InstagramIcon} alt="instagram" className="icon" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  margin-top: 5rem;
  text-align: center;
  background: black;
  min-height: 10vh;
  .underline {
    background: var(--clr-primary-1);
    margin: auto;
    width: 30%;
    height: 0.2rem;
  }
  .logo {
    margin: 1.5rem auto;
  }
  p,
  h5 {
    color: var(--clr-primary-3);
    margin: 1.5rem 1rem;
  }
  .icon {
    margin: 1rem 0.5rem;
    &:hover {
      color: var(--clr-primary-1) !important;
    }
  }

  .footer-links {
    li {
      margin: 1rem 0;
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

  @media (min-width: 992px) {
    .footer-container {
      width: 90vw;
      margin: 0 auto;
      max-width: var(--max-width);
    }
    .column-one {
      display: flex;
      align-items: center;
      img {
        padding-right: 30rem;
      }
    }
    .column-two {
      display: flex;
      .content {
        width: 50%;
        text-align: initial;
      }
      .social-icons {
        width: 50%;
        text-align: end;
        padding-top: 2.5rem;
        .icon {
          cursor: pointer;
          margin: 0 1rem;
          &:hover {
            color: var(--clr-primary-1);
          }
        }
      }
    }
    .underline {
      width: 10%;
    }
    .footer-links {
      width: 50%;
      display: flex;
      justify-content: flex-end;
    }
  }
`;
export default Footer;
