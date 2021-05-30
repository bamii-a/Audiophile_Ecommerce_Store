import React, { useState, useEffect, useReducer } from "react";
import styled from "styled-components";
import { useParams, Link } from "react-router-dom";
import { HiMinusSm, HiPlusSm } from "react-icons/hi";
import { CategoryLinks } from "../components";
import mobileImage from "../assets/product-yx1-earphones/mobile/image-product.jpg";
import mainData from "../data.json";

const SingleProductDetail = ({
  id,
  name,
  slug,
  image,
  description,
  category,
  price,
  features,
  includes,
  new: isNew,
  gallery,
  others,
}) => {
  const [product, setProduct] = useState(mainData);
  const [count, setCount] = useState(1);

  if (count < 0) {
    setCount(0);
  }

  // const { mobile, desktop, tablet } = image;
  // console.log(mobile);
  return (
    <Wrapper>
      <section className="section-center product-style-container">
        <div className="catImageContainer">
          <img src={image.mobile} alt={slug} className="catImage" />
        </div>
        <div className="productContent">
          {/*<h3 className="">new product</h3>*/}
          {/*isNew && <h3 className="">new product</h3>*/}
          <h2>{name}</h2>
          <p>{description}</p>
          <h4>${price}</h4>
          <div className="cartAdd">
            <div className="amount">
              <HiMinusSm onClick={() => setCount(count - 1)} />
              <h4 className="count">{count}</h4>
              <HiPlusSm onClick={() => setCount(count + 1)} />
            </div>
            <Link to="">
              <button className="btn">add to cart</button>
            </Link>
          </div>
          <div className="features">
            <h4>Features</h4>
            <p className="feature-text">{features}</p>
          </div>
          <div className="inTheBox">
            <h4> in the box</h4>
            {includes.map((data, index) => {
              const { quantity, item } = data;
              return (
                <h5 key={index}>
                  <span className="quantity">{quantity}x</span> {item}
                </h5>
              );
            })}
          </div>
          <div className="gallery">
            <img
              src={gallery.first.mobile}
              alt={slug}
              className="gallery-img"
            />
            <img
              src={gallery.second.mobile}
              alt={slug}
              className="gallery-img"
            />
            <img
              src={gallery.third.mobile}
              alt={slug}
              className="gallery-img"
            />
          </div>

          <div className="extras">
            <h4>you may also like</h4>
            {others.map((other, index) => {
              // console.log(other);
              const { slug, name, image } = other;
              return (
                <div className="extras-content">
                  <img src={image.mobile} alt={slug} className="extras-img" />
                  <h4>{name}</h4>
                  <Link to={`/ProductDetail/${id}`}>
                    <button className="btn">SEE PRODUCT</button>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  text-align: left;

  .product-style-container {
    margin: 1rem auto;
  }
  .catImageContainer {
    height: 30rem;
    width: 95%;
    margin: 1rem auto 1rem 0;
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
    margin: 0;
  }
  .productContent {
    margin: 1rem auto;
    h3 {
      letter-spacing: 7px;
      color: var(--clr-primary-1);
      text-transform: uppercase;
      font-size: 0.75rem;
    }
    h2 {
      width: 70%;
      margin: 1rem auto 1rem 0;
      text-transform: uppercase;
    }
    p {
      width: 100%;
      margin: 1rem auto 2rem;
      font-size: 0.9rem;
    }
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
  }
  .inTheBox {
    margin: 4rem 0;
    h4 {
      text-transform: uppercase;
      margin: 2rem 0 1rem 0;
    }
    .quantity {
      color: var(--clr-primary-1);
      margin-right: 1rem;
    }
  }

  .gallery {
    margin:3rem 0;
    .gallery-img {
      width: 100%;
      border-radius: var(--radius);
    }
  }
  .extras {
    text-align: center;
    margin: 2rem 0 10rem 0;
    .extras-img {
      width: 100%;
    }
    h4 {
      letter-spacing: 2px;
      font-weight: 700;
      font-size: 1.4rem;
      text-transform:uppercase;
    }

    .extras-content {
      margin: 3rem 0 5rem 0;
    }
  }
  .features {
    h4 {
      text-transform: uppercase;
      letter-spacing: 2px;
      margin: 4rem auto 1rem 0;
    }
  }
  .feature-text {
    line-height: 1.7;
  }
`;
export default SingleProductDetail;
