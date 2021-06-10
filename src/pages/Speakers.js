import React, { useState, useEffect } from "react";
import mainData from "../data.json";
import { PageHero, CategoryLinks, SpeakerCategory } from "../components";

const Speakers = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(mainData)
    
  }, [])

  const speakers = data.filter((item) => item.id === 5 || item.id === 6);

  const speakerCategories = speakers.map((speaker, index) => {
    return <SpeakerCategory key={index} {...speaker} />;
  });

  return (
    <main>
      <PageHero title="speakers" />
      {speakerCategories}
      <CategoryLinks />
    </main>
  );
};

export default Speakers;
