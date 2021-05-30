import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import mobileImage from "../assets/product-yx1-earphones/mobile/image-product.jpg";


const HeadphoneCategory = ({
  id,
  name,
  description,
  image,
  slug,
  new: isNew,
}) => {
  return (
    <Wrapper>
      <section key={id} className="section-center category-style-container">
        <div className="catImageContainer">
          <img src={image.mobile} alt={slug} className="catImage" />
        </div>
        <div className="productContent">
          {isNew && <h3 className="">new product</h3>}
          <h2>{name}</h2>
          <p>{description}</p>
          <Link to={`/ProductDetail/${id}`}>
            <button className="btn">see product</button>
          </Link>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  text-align: center;

  .category-style-container {
    margin: 2rem auto;
  }
  .catImageContainer {
    height: 30rem;
    width: 95%;
    margin: 1rem auto;
    border-radius: var(--radius);
    display: flex;
    justify-content: center;
    align-content: center;
  }
  .catImage {
    align-self: center;
    height: 25rem;
    width: 100%;
    border-radius: var(--radius);
  }
  .productContent {
    padding: 30px;
    h3 {
      letter-spacing: 7px;
      color: var(--clr-primary-1);
      text-transform: uppercase;
      font-size: 0.75rem;
    }
    h2 {
      width: 70%;
      margin: 1rem auto;
      text-transform: uppercase;
    }
    p {
      width: 100%;
      margin: 1rem auto 2rem;
      font-size: 0.9rem;
    }
  }

  @media (min-width: 992px) {
    .category-style-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .catImageContainer {
      margin-right: 2rem;
      .catImage {
        height: 30rem;
      }
    }
    .productContent {
      text-align: initial;
      h2 {
        margin: 1rem auto 0 0;
      }
      p {
        width: 70%;
        margin: 2rem auto 2rem 0;
        line-height: 1.5;
      }
    }
  }
`;
export default HeadphoneCategory;