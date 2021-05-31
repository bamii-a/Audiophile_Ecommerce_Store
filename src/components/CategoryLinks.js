import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import data from "../menu.json";
import { FaAngleRight } from "react-icons/fa";

const CategoryLinks = () => {
  return (
    <Wrapper>
      <section className="categoryLinks-container section-center">
        {data.map(({ id, category, image, url }) => {
          return (
            <div key={id} className="item-container">
              <img src={image} alt={category} />
              <div className="item-container-text">
                <Link to={url} className="link-to-category">
                  <h4>{category}</h4>
                  <h5>
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
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  text-align: center;
  .categoryLinks-container {
    width: 100%;
    min-height: 50vh;
    border-radius: var();
  }
  .item-container {
    position: relative;
    z-index: 1;
    width: 90vw;
    margin: 4rem auto;
    height: 10rem;
    background: var(--clr-primary-4);
    border-radius: var(--radius);
    img {
      width: 10rem;
      position: absolute;
      top: -30%;
      left: 35%;
      transform: translate(-10%, -5%);
    }
    .item-container-text {
      padding-top: 5.5rem;
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
        h5 {
          color: var(--clr-primary-1);
        }
        h4 {
          color: var(--clr-black);
        }
      }

      .icon {
        color: var(--clr-primary-1);
        margin-left: 10px;
        font-size: 1.5rem;
        display: grid;
      }
    }
  }

  @media (min-width: 414px) and (max-width: 991px) {
    .categoryLinks-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0 auto;

      .item-container {
        width: 30%;
        height: 100%;

        img {
          width: 70%;
          left: 50%;
          transform: translate(-50%);
        }
      }
    }
  }

  @media (min-width: 992px) {
    .categoryLinks-container {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      margin: 0 auto;
    }
    .item-container {
      width: 100%;
      height: 100%;
      margin: 2rem 1rem;
      img {
        width: 15rem;
        position: absolute;
        top: -20%;
        left: 50%;
        transform: translate(-50%);
      }
      .item-container-text {
        padding-top: 11rem;
        h4 {
          font-size: 1.5rem;
        }
      }
    }
  }
`;

export default CategoryLinks;
