import React, { useContext, useReducer, useEffect, useState } from "react";
import reducer from "../reducers/products_Reducer";
import mainData from "../data.json";

const initialState = {
  product: [],
};

const ProductContext = React.createContext();
export const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState([]);
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    setProduct(mainData);
  }, []);

  return (
    <ProductContext.Provider value={{ ...state, product }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  return useContext(ProductContext);
};
