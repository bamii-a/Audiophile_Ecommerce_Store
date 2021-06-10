import React from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import speakerZX9 from "../assets/home/mobile/image-speaker-zx9.png";
import speakerZX7_mobile from "../assets/home/mobile/image-speaker-zx7.jpg";
import speakerZX7_desktop from "../assets/home/desktop/image-speaker-zx7.jpg";
import earphonesYX1 from "../assets/home/mobile/image-earphones-yx1.jpg";
import { backToTop } from "../utility/helpers";

const ProductLinks = () => {
  const { id } = useParams();
  
  return (
    <Wrapper>
      <section className="productLinks-container section-center">
        <div className="speaker-ZX9-container">
          <div className="img-container">
            <img src={speakerZX9} alt="zx9" className="speakerZX9-img" />
            {/*<img src={circles} alt="circles" className="circles" />*/}
          </div>

          <div className="content-container">
            <h3>
              ZX9 <br />
              speaker
            </h3>
            <p>
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <Link to={`/ProductDetail/${6}`} onClick={() => backToTop()}>
              <button
                type="button"
                className="zx9-btn btn"
                onClick={() => backToTop()}
              >
                see product
              </button>
            </Link>
          </div>
        </div>

        <div className="speaker-ZX7-container">
          <div className="ZX7-contents">
            <h3>ZX7 SPEAKER</h3>
            <Link to={`/ProductDetail/${5}`} onClick={() => backToTop()}>
              <button
                type="button"
                className="zx7-btn btn"
                onClick={() => backToTop()}
              >
                see product
              </button>
            </Link>
          </div>
        </div>
        <div className="earphones-YX1-container">
          <div className="earphones-YX1">
            <img src={earphonesYX1} alt="yx1" className="earphones-YX1-image" />
          </div>

          <div className="YX1-content">
            <h3>yx1 earphones</h3>
            <Link to={`/ProductDetail/${1}`} onClick={() => backToTop()}>
              <button
                type="button"
                className="yx1-btn btn"
                onClick={() => backToTop()}
              >
                {" "}
                see product
              </button>
            </Link>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 90vw;
  margin: 0 auto;

  .productLinks-container {
    h3 {
      text-transform: uppercase;
    }
    .content-container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

   {
    /* SPEAKER ZX9 */
  }
  .speaker-ZX9-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background: var(--clr-primary-1);
    border-radius: var(--radius);
    position: relative;

    .img-container {
      display: flex;
      justify-content: center;
      margin: 2rem auto 2rem;
    }

    .content-container {
      margin: 1rem auto 2rem;
    }
    h3 {
      color: white;
      text-align: center;
      margin-bottom: 1rem;
    }
    p {
      color: white;
      text-align: center;
      width: 80%;
      margin: 0 auto 1rem;
    }

    .circles {
      width: 100%;
    }
    .speakerZX9-img {
      width: 90%;
    }

    .zx9-btn {
      background-color: var(--clr-black);
      &:hover {
        background-color: var(--clr-primary-3);
      }
    }
  }

   {
    /* SPEAKER ZX7 */
  }

  .speaker-ZX7-container {
    min-height: 30rem;
    width: 90vw;
    border-radius: var(--radius);
    background: url(${speakerZX7_mobile});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    object-fit: cover;
    margin: 1rem auto;
    padding: 1rem;
    position: relative;

    .ZX7-contents {
      position: absolute;
      top: 30%;

      h3 {
        margin: 2rem 0;
      }
    }
  }

  .YX1-content {
    min-height: 10rem;
    width: 90vw;
    background: var(--clr-primary-4);
    border-radius: var(--radius);
    padding: 1rem;
    margin: 1rem 0 4rem;
    h3 {
      padding: 1rem 0;
    }
  }
  .earphones-YX1-image {
    width: 90vw;
    border-radius: var(--radius);
  }
  .yx1-btn,
  .zx7-btn {
    background-color: transparent;
    border: 1px solid;
    color: var(--clr-black);
    &:hover {
      background-color: var(--clr-black);
      color: var(--clr-white);
    }
  }

  @media (min-width: 415px) and (max-width: 992px) {
    .earphones-YX1-container {
      display: flex;
      width: 100%;
      flex-wrap:wrap;
    }
    .earphones-YX1-image {
    
  }
  .YX1-content {
    padding: 1rem;
    margin: 0;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    h3{
      font-size:1.3rem;
    }
  }
  }

  @media (min-width: 992px) {
    .speaker-ZX9-container {
      min-height: 35rem;
      margin: 2rem auto;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      position: relative;

      .speakerZX9-img {
        position: absolute;
        width: 20rem;
        top: 20%;
        left: 25%;
        transform: translate(-35%);
      }
      .content-container {
        display: flex;
        justify-content: center;
        align-items: flex-start;
      }
      h3 {
        text-align: initial;
      }
      p {
        width: 50%;
        margin: 1rem auto 2rem 0;
        text-align: initial;
      }
    }

    .speaker-ZX7-container {
      width: 100%;
      background: url(${speakerZX7_desktop});
      margin: 2rem auto;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      object-fit: cover;
      .ZX7-contents {
        padding-left: 5rem;
      }
    }

    .earphones-YX1-container {
      min-height: 35vh;
      display: flex;

      width: 100%;
    }

    .earphones-YX1-image {
      width: 40rem;
      margin: 1rem 1rem 1rem 0;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      object-fit: cover;
    }
    .YX1-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: 1rem;
      padding: 2rem;
    }
  }
  .yx1-btn,
  .zx7-btn,
  .zx9-btn {
    font-size: 15px;
    padding: 15px 30px;
  }
`;

export default ProductLinks;
