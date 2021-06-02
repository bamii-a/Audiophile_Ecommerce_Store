import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory, useParams } from "react-router-dom";
import mainData from "../data.json";
import { useGlobalContext } from "../context/GlobalContext";
import {
  CategoryLinks,
  SingleProductDetail,
  Error,
  Loading,
} from "../components";

const ProductDetail = () => {
  const { id } = useParams();
  const history = useHistory();
  const [product, setProduct] = useState([]);
  // const [loading, setLoading] = useState(false)
  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product,
    fetchProducts,
    fetchSingleProduct,
  } = useGlobalContext();

  useEffect(() => {
    setProduct(mainData)
  }, [mainData])
  // console.log(product);
  
  const products = product.filter((item) => item.id == id);
  const singleProduct = products.map((item, index) => {
    return <SingleProductDetail key={index} {...item} />;
  });
  
  // useEffect(() => {
  //   if (error) {
  //     setTimeout(() => {
  //       history.push('/')
  //     }, 3000)
  //   }
  // }, [error])

  if (loading) {
  return <Loading/>
  }
  if (error) {
    return <Error/>
  }

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
