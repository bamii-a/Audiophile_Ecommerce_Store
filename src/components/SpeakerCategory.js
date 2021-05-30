import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SpeakerCategory = ({
  name,
  slug,
  id,
  description,
  image,
  new: isNew,
}) => {
  let tempName = 'ZX7 Speaker';


  return (
    <Wrapper>
      <section key={id} className={"section-center category-style-container"}>
        <div className="catImageContainer">
          <img src={image.mobile} alt={slug} className="catImage" />
        </div>
        <div className="productContent">
          {isNew && <h3 className="">new product</h3>}
          {<h2>{name}</h2>}
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
    margin: 2rem auto 4rem;
  }
  .catImageContainer {
    height: 30rem;
    width: 95%;
    margin: 2rem auto 1rem;
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
    padding: 10px;
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
    .flex-reverse {
      flex-direction: row-reverse;
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

export default SpeakerCategory;
