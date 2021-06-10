import React from "react";
import styled from "styled-components";
import { PageHero, CategoryLinks, EarphoneCategory } from "../components";


const Earphones = () => {

    return (
      <main>
        <PageHero title='Earphones' />
        <EarphoneCategory />
        <CategoryLinks />
      </main>
    );
};


const Wrapper = styled.div` `
export default Earphones;
