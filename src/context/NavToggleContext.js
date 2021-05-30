import React, { useContext, useEffect, useReducer } from "react";


const ACTIONS = {
    MENU_OPEN: 'menu-open',
    MENU_CLOSE: 'menu-close'
}
const initialState = {
  isSidebarOpen: false,
};
const reducer = (state, action) => {
    if (action.type === ACTIONS.MENU_OPEN) {
    return { ...state, isSidebarOpen:true };
    }
    if (action.type === ACTIONS.MENU_CLOSE) {
        return { ...state, isSidebarOpen:false };
    }
    return state;
}
const NavToggleContext = React.createContext();

export const NavProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

    const openMenu = () => {
        dispatch({type:ACTIONS.MENU_OPEN})
    }
    const closeMenu = () => {
      dispatch({ type: ACTIONS.MENU_CLOSE });
    };
    
  return (
    <NavToggleContext.Provider value={{...state, openMenu, closeMenu}}>
      {children}
    </NavToggleContext.Provider>
  );
};

export const useNavToggleContext = () => {
    return useContext(NavToggleContext);
}