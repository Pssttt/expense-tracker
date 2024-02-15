import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//Initial state
const initialState = {
  transactions: [
    { id: 1, text: "rose", amount: -20 },
    { id: 2, text: "bouquet", amount: -200 },
    { id: 3, text: "salary", amount: +400 },
    { id: 4, text: "gas", amount: -5 },
  ],
};

//Create context
export const GlobalContext = createContext(initialState);

//Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <GlobalContext.Provider value={{ transactions: state.transactions }}>
      {children}
    </GlobalContext.Provider>
  );
};
