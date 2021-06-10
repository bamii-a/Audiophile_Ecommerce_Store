import React, { useContext, useReducer, useEffect, useState } from "react";
import reducer from "../reducers/cart_reducer";
import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from "../actions";

const getLocalStorage = () => {
  let cart = localStorage.getItem("cart");
  if (cart) {
    return JSON.parse(localStorage.getItem("cart"));
  } else {
    return [];
  }
};
const initialState = {
  cart: getLocalStorage(),
  total_items: 0,
  total_amount: 0,
  shipping_fee: 5000,
  valueAddedTax: 0.2,
};
const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
      dispatch({type:COUNT_CART_TOTALS})
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  // Add To Cart
  const addToCart = (id, amount, item) => {
    dispatch({ type: ADD_TO_CART, payload: { id, amount, item } });
  };

  //remove item
    const removeItem = (id) => {
      dispatch({type:REMOVE_CART_ITEM, payload:id})
  };
  // toggle amount
    const toggleAmount = (id, value) => {
        // console.log(id, value);
      dispatch({ type: TOGGLE_CART_ITEM_AMOUNT , payload:{id, value}});
  };
  // clear cart
    const clearCart = () => {
      dispatch({type:CLEAR_CART})
  };

  return (
    <CartContext.Provider
      value={{
        ...state,
        showCart,
        setShowCart,
        addToCart,
        removeItem,
        toggleAmount,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export const useCartContext = () => {
  return useContext(CartContext);
};

// export { CartContext, CartProvider }
