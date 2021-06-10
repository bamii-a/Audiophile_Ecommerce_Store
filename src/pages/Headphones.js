import React, { useState, useEffect } from "react";
import mainData from "../data.json";
import { PageHero, CategoryLinks, HeadphoneCategory } from "../components";

const Headphones = () => {
  const [data, setData] = useState([]);
useEffect(() => {
  setData(mainData)
}, [])
  
  const headphones = data.filter(
    (item) => item.id === 2 || item.id === 3 || item.id === 4
  );

  const headphoneCategories = headphones.map((headphone, index) => {
    return <HeadphoneCategory key={index} {...headphone} />;
  });
  return (
    <main>
      <PageHero title="Headphones" />
      {headphoneCategories}
      <CategoryLinks />
    </main>
  );
};

export default Headphones;
