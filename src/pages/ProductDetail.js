import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory, useParams } from "react-router-dom";
import { useProductContext } from "../context/productContext";
import {
  CategoryLinks,
  SingleProductDetail,
  Error,
  Loading,
} from "../components";

const ProductDetail = () => {
  const { id } = useParams();
  const history = useHistory();
  const {product} = useProductContext();

  const products = product.filter((item) => item.id == id);
  const singleProduct = products.map((item, index) => {
    return <SingleProductDetail key={index} {...item} />;
  });
 

  return (
    <Wrapper>
      <section className="section-center">
    {singleProduct}
        <CategoryLinks />
      </section>
    </Wrapper>
  );
};;

const Wrapper = styled.div`

`
export default ProductDetail;

 
  // useEffect(() => {
  //   if (error) {
  //     setTimeout(() => {
  //       history.push('/')
  //     }, 3000)
  //   }
  // }, [error])

  // if (loading) {
  // return <Loading/>
  // }
  // if (error) {
  //   return <Error/>
  // }