import React from "react";
import styled from "styled-components";
import image from "../assets/shared/desktop/image-best-gear.jpg";

const prefooter = () => {
  return (
    <Wrapper>
      <article className="section-center prefooter-container">
        <div className="column-two">
          <img src={image} alt="image" className="image"/>
        </div>
        <div className="column-one">
          <h3>
            Bringing you the <br />
            <span>best</span> audio gear
          </h3>
          <p>
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  text-align: center;
  .image {
    width: 90vw;
    border-radius: var(--radius);
    margin: 1.3rem auto;
  }
  .prefooter-container {
    h3 {
      text-transform: uppercase;
      span {
        color: var(--clr-primary-1);
      }
    }
    p {
      width: 80vw;
      margin: 2rem auto;
      color: var(--clr-primary-3);
    }
  }
  @media (min-width: 992px) {
    width: 95vw;
    margin: 0 auto;
    .prefooter-container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-areas: "box1 box2";
      .column-two {
        margin: 0 0 0 1rem;
        grid-area: box2;
      }
      .column-one {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: start;
        margin: 0 2.5rem;
        grid-area: box1;
        h3 {
          font-size: 2.5rem;
          margin-bottom: 2rem;
          line-height:1.2;
        }
      }
      p {
        width: 90%;
        margin: 0;
        line-height: 1.7;
      }
      img {
        width: 35rem;
        float: left;
      }
    }
  }
`;
export default prefooter;
