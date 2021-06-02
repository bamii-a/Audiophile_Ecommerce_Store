import React, {  useContext, useReducer, useEffect, useState } from "react";
import reducer from '../reducers/cart_reducer'


const CartContext = React.createContext()


const initialState = {
    loading: false,
    cart: [],
    total: 0,
    amount:0
}
const CartProvider = ({ children }) => {
    const [ state, dispatch] = useReducer(reducer, initialState)


    return (
        <CartContext.Provider value=''>
            {children}
        </CartContext.Provider>
    )
}
export const useGlobalCartContext = () => {
    return useContext(CartContext)
}

export { CartContext, CartProvider }
