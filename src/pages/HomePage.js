import React from "react";
import Hero from "../components/Hero";
import mainData from "../data.json";
import ProductLinks from "../components/ProductLinks";
import CategoryLinks from "../components/CategoryLinks";

function HomePage() {
  return (
    <>
      <Hero />
      <CategoryLinks />
      <ProductLinks data={mainData}/>
    </>
  );
}

export default HomePage;
