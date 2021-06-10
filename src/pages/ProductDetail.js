import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useProductContext } from "../context/productContext";
import {
  CategoryLinks,
  SingleProductDetail,
} from "../components";

const ProductDetail = () => {
  const { id } = useParams();
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