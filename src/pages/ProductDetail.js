import React, { useState, useEffect, useReducer } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import mainData from "../data.json";
import { CategoryLinks, SingleProductDetail } from "../components";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(mainData);

  const products = product.filter(item => item.id == id)
  const singleProduct = products.map((item, index) => {
    return <SingleProductDetail key={id} {...item}/>
  })

        
    return (
     
        <main>
          <section className="section-center">
            {singleProduct}
            <CategoryLinks />
          </section>
        </main>
     
    );
};


export default ProductDetail;
