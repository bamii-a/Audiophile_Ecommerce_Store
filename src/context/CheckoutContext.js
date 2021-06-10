import React, { useContext, useReducer, useEffect, useState } from "react";
import { GET_CHANGE, HANDLE_SUBMIT } from "../actions";
import reducer from '../reducers/Checkout_Reducer'
const initialState = {
    name:'',
  email: "",
  phone: "",
  address: "",
  zip: "",
  city: "",
    country: "",
  paymentMethod:''
};
const CheckoutContext = React.createContext();

export const CheckoutProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
    // const [customer, setCustomer]=useState({name:'', email:''})

  

  const handleChange = (e) => {
    //   const name= e.target.name
    //   const value = e.target.value
    //   setCustomer({...customer, [name]:value})
    dispatch({
      type: GET_CHANGE,
      name: e.target.name,
      payload: e.target.value,
    });
  };
const handleSubmit = (e) => {
  e.preventDefault();
  console.log("hello world");
    dispatch({ type: HANDLE_SUBMIT });
};
  return (
    <CheckoutContext.Provider value={{  state, handleChange, handleSubmit }}>
      {children}
    </CheckoutContext.Provider>
  );
};
export const useCheckoutContext = () => {
  return useContext(CheckoutContext);
};

// export {  CheckoutProvider };
