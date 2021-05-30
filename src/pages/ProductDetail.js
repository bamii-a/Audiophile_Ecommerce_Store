import React, { useState, useEffect, useReducer } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import mainData from "../data.json";
import { CategoryLinks, SingleProductDetail } from "../components";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(mainData);
  const [count, setCount] = useState(1);

    const products = product.filter(item => item.id === id)
    const SingleProduct = products.map((item, index) => {
        return <SingleProductDetail key={id} {...item}/>
    })

    useEffect(() => {
        setProduct(SingleProduct);
    }, [id])

    if (count < 1) {
    setCount(1);
  }
        
  return (
    <Wrapper>
      <h2>id:{id}</h2>
      <section className="section-center product-style-container">
        {SingleProduct}
        <CategoryLinks />
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
      .feature-text {
        line-height: 3;
      }
    }
    .cartAdd {
      display: flex;
      justify-content: space-between;
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
    h4 {
      text-transform: uppercase;
      margin: 2rem 0;
    }
  }
  .extras {
    text-align: center;
  }
`;

export default ProductDetail;
