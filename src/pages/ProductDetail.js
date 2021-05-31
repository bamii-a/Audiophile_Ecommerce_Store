import React, { useState, useEffect, useReducer } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import mainData from "../data.json";
import { CategoryLinks, SingleProductDetail } from "../components";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(mainData);
  const [count, setCount] = useState(1);

    const products = product.filter(item => item.id === 6)
    const SingleProduct = products.map((item, index) => {
        return <SingleProductDetail key={id} {...item}/>
    })

  
    if (count < 1) {
    setCount(1);
  }
        
    return (
     
        <main>
          <h2>id:{id}</h2>
          <section className="section-center">
            {SingleProduct}
            <CategoryLinks />
          </section>
        </main>
     
    );
};


export default ProductDetail;
