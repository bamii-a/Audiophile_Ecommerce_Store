import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import heroBackgroundMobile from "../assets/home/mobile/image-header.jpg";
import heroBackgroundDesktop from "../assets/home/desktop/image-hero.jpg";
import heroBackgroundTablet from "../assets/home/tablet/image-header.jpg";
import { backToTop } from "../utility/helpers";

const Hero = () => {

  let imageForScreen;
  if (window.screen.width <= 414) {
    imageForScreen = `${heroBackgroundMobile}`;
  } else if (window.screen.width >= 415 && window.screen.width === 991) {
    imageForScreen = `${heroBackgroundTablet}`;
  } else {
    imageForScreen = `${heroBackgroundDesktop}`;
  }

  return (
    <Wrapper>
      <section className="hero">
        <img src={imageForScreen} alt="" className="hero-background" />
        <div className="hero-content">
          <h5>new product</h5>
          <h2>
            XX99 Mark II <br /> Headphone
          </h2>
          <p>
            Experience natural, life like audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Link to={`/ProductDetail/${4}`} onClick={()=> backToTop()}>
            <button type="submit" className="btn hero-btn">
              see product
            </button>
          </Link>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  text-align: center;
  hr {
    color: var(--clr-primary-3);
  }

  .hero {
    position: relative;
    height: 80vh;
    margin-top: 0px;
    display: flex;
    justify-content: center;
    align-items: center;

    .hero-background {
      position: absolute;
      z-index: -1;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    hero-content {
      align-self: center;
    }
    h5 {
      text-transform: uppercase;
      letter-spacing: 7px;
      color: var(--clr-primary-3);
      margin: 2rem auto;
    }
    h2 {
      text-transform: uppercase;
      color: var(--clr-white);
      margin: 2rem auto;
    }
    p {
      width: 70%;
      margin: 0 auto;
      color: var(--clr-white);
      margin: 2rem auto;
      line-height: 1.5;
    }
    .hero-btn:hover {
      background: var(--clr-primary-hover);
      color: var(--clr-black);
      transform: scale(1.1);
    }
  }

  @media (min-width: 992px) {
    .hero {
      width: 100%;
      min-height: 90vh;
      object-fit: cover;
      display: flex;
      justify-content: center;
      align-item: center;
      position: relative;
    }
    .hero-background {
      position: absolute !important;
      z-index: -1;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .hero-content {
      width: 90vw;
      margin: 0 auto;
      max-width: var(--max-width);
      text-align: initial;
      align-self: center;
    }
    h5 {
      margin: 0;
    }
    h2 {
      font-size: 4rem;
      letter-spacing: 6px;
    }
    p {
      width: 40% !important;
      font-size: 1.3rem;
      margin: 2rem 0 !important;
    }
    .hero-btn {
      font-size: 15px;
      padding: 15px 30px;
    }
  }
`;
export default Hero;
