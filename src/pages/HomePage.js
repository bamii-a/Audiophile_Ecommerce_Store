import React from "react";
import styled from "styled-components";
import Hero from "../components/Hero";
import data from "../data.json";
import ProductLinks from "../components/ProductLinks";
import CategoryLinks from "../components/CategoryLinks";

function HomePage() {
  return (
    <>
      <Hero />
      <CategoryLinks />
      <ProductLinks />
    </>
  );
}

export default HomePage;
