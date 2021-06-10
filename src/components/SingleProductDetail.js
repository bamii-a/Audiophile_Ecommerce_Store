import React, { useState} from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { backToTop } from "../utility/helpers";
import { AddToCart } from '../components'
import { formatPrice } from '../utility/helpers'

const SingleProductDetail = ({ ...item }) => {
  const [count, setCount] = useState(1);
  const {
    id,
    name,
    slug,
    image,
    description,
    price,
    features,
    includes,
    new: isNew,
    gallery,
    others,
  } = item;

  let imageForScreen;
  if (window.screen.width <= 414) {
    imageForScreen = `${image.mobile}`;
  } else if (window.screen.width < 800 && window.screen.width >= 415) {
    imageForScreen = `${image.tablet}`;
  } else {
    imageForScreen = `${image.desktop}`;
  }

  let galleryScreenSize;
  if (window.screen.width <= 414) {
    galleryScreenSize = `${gallery.first.mobile}`;
  } else if (window.screen.width < 800 && window.screen.width >= 415) {
    galleryScreenSize = `${gallery.first.tablet}`;
  } else {
    galleryScreenSize = `${gallery.first.desktop}`;
  }

  let galleryScreenSize2;
  if (window.screen.width <= 414) {
    galleryScreenSize2 = `${gallery.second.mobile}`;
  } else if (window.screen.width < 800 && window.screen.width >= 415) {
    galleryScreenSize2 = `${gallery.second.tablet}`;
  } else {
    galleryScreenSize2 = `${gallery.second.desktop}`;
  }

  let galleryScreenSize3;
  if (window.screen.width <= 414) {
    galleryScreenSize3 = `${gallery.third.mobile}`;
  } else if (window.screen.width < 800 && window.screen.width >= 415) {
    galleryScreenSize3 = `${gallery.third.tablet}`;
  } else {
    galleryScreenSize3 = `${gallery.third.desktop}`;
  }

  if (count < 1) {
    setCount(1);
  }

  // const { mobile, desktop, tablet } = image;
  // console.log(mobile);
  return (
    <Wrapper>
      <section className="section-center product-style-container">
        <article className="idInfo">
          <div className="catImageContainer">
            <img src={imageForScreen} alt={slug} className="catImage" />
          </div>
          <div className="productContent">
            {/*<h3 className="">new product</h3>*/}
            {/*isNew && <h3 className="">new product</h3>*/}
            <h2>{name}</h2>
            <p>{description}</p>
            <h4>{formatPrice(price)}</h4>
          </div>
        </article>
        <AddToCart {...item}/>

        <article className="featuresBox">
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
        </article>
        <article className="gallery">
          <div className="gallery1-2">
            <img
              src={galleryScreenSize}
              alt={slug}
              className="gallery-img gallery1"
            />
            <img
              src={galleryScreenSize2}
              alt={slug}
              className="gallery-img gallery2"
            />
          </div>
          <div className="gallery-last">
            <img
              src={galleryScreenSize3}
              alt={slug}
              className="gallery-img gallery3"
            />
          </div>
        </article>

        <article className="extras">
          <h4>you may also like</h4>
          <div className="extras-container">
            {others.map((other, index) => {
              const { slug, name, image, id } = other;
              let imageSizeOthers;
              if (window.screen.width <= 414) {
                imageSizeOthers = `${image.mobile}`;
              } else if (
                window.screen.width < 800 &&
                window.screen.width >= 415
              ) {
                imageSizeOthers = `${image.tablet}`;
              } else {
                imageSizeOthers = `${image.desktop}`;
              }
              return (
                <div key={index} className="extras-content">
                  <img
                    src={imageSizeOthers}
                    alt={slug}
                    className="extras-img"
                  />
                  <h4>{name}</h4>
                  <Link to={`/ProductDetail/${id}`}>
                    <button className="btn" onClick={() => backToTop()}>
                      SEE PRODUCT
                    </button>
                  </Link>
                </div>
              );
            })}
          </div>
        </article>
      </section>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  text-align: left;
  .product-style-container {
    margin: 1rem auto;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  .catImageContainer {
    height: 30rem;
    width: 95%;
    margin: 1rem auto 1rem;
    border-radius: var(--radius);
    display: flex;
    justify-content: center;
    align-content: center;
  }
  .catImage {
    align-self: center;
    height: 100%;
    width: 100%;
    border-radius: var(--radius);
    margin: 0;
    object-fit: cover;
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
    
  }
  .inTheBox {
    margin: 4rem 0;
    h4 {
      text-transform: uppercase;
      margin: 0 0 1rem 0;
    }
    .quantity {
      color: var(--clr-primary-1);
      margin-right: 1rem;
    }
  }

  .gallery {
    margin: 3rem 0;
    .gallery-img {
      width: 100%;
      border-radius: var(--radius);
    }
  }
  .extras {
    text-align: center;
    margin: 1rem 0 1rem 0;
    .extras-img {
      margin-bottom: 2rem;
      width: 100%;
      border-radius: var(--radius);
    }
    h4 {
      letter-spacing: 2px;
      font-weight: 700;
      font-size: 1.4rem;
      text-transform: uppercase;
    }

    .extras-content {
      margin: 1rem 0 2rem 0;
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

  @media (min-width: 415px) and (max-width: 991px) {
    margin-top: 5rem;
    .extras {
      margin: 3rem 0 0 0;
    }

    .extras-container {
      display: flex;

      .extras-img {
        width: 90%;
      }
    }
    .idInfo {
      display: flex;
      flex-wrap: wrap;

      .catImageContainer {
        flex: 2 1 40rem;
      }
      .productContent {
        flex: 1 1 40rem;
        margin: 0;
        h4 {
          padding: 1rem 0 1rem 0;
        }
        p {
          margin: 1rem 0 1rem;
        }
      }

      .catImage {
        height: 100%;
        width: 100%;
      }
    }
  }
  @media (min-width: 992px) {
    margin-top: 7rem;
    .extras-container {
      display: flex;
      justify-content: space-between;
      .extras-img {
        width: 90%;
      }
    }
    .gallery {
      display: flex;
      min-height: 40vh;
      flex-direction: row;
      justify-content: space-between;

      .gallery1-2 {
        width: 40%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        object-fit: cover;
      }
      .gallery3 {
        height: 100%;
        object-fit: cover;
      }
    }
    .featuresBox {
      display: flex;
    }
    .features {
      flex: 2 1 40rem;
      margin-right: 3rem;
    }
    .feature-text {
      width: 90%;
    }
    .inTheBox {
      flex: 1 1 20rem h4 {
        margin: 0;
      }
    }
    .idInfo {
      display: flex;

      .productContent {
        margin: 5rem 3rem 3rem 5rem;
        h4 {
          padding: 1rem 0 1rem 0;
        }
        p {
          margin: 1rem 0 1rem;
        }
      }

      .catImage {
        height: 100%;
        width: 100%;
      }
    }
    .extras {
      margin: 3rem 0 0 0;
    }
  }
`;
export default SingleProductDetail;
