import React, { useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../reducers/products_Reducer";
import {
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from "../actions";

const initialState = {
  products_loading: false,
  products_error: false,
  products: [],
  single_product_loading: false,
  single_product_error: false,
  single_product: [],
};

const globalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchProducts = async (url) => {
    dispatch({ type: GET_PRODUCTS_BEGIN });
    try {
      const response = await axios.get("data.json");
      const products = response.data;
      // console.log(products);
      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products });
    } catch (error) {
      dispatch({ type: GET_PRODUCTS_ERROR });
    }
  };





  // const fetchSingleProduct = async (url) => {
  //   dispatch({ type: GET_SINGLE_PRODUCT_BEGIN });
  //   try {
  //     const response = await axios.get(url);
  //     const singleProduct = response.data;
  //     console.log(singleProduct);
  //     dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: mainData });
  //   } catch (error) {
  //     dispatch({ type: GET_SINGLE_PRODUCT_ERROR });
  //   }
  // };


  

  useEffect(() => {
    fetchProducts();
  }, [])


  return (
    <globalContext.Provider value={{ ...state, fetchProducts }}>
      {children}
    </globalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(globalContext);
};
