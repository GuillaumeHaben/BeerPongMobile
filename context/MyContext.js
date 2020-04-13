import React, { useReducer } from "react";
import { initialState, reducer } from "../reducers/Main.js";

export const Context = React.createContext()

export const ContextProvider = props => {
  
    const [state, dispatch] = useReducer(reducer, initialState);
  
    return (
      <Context.Provider value={[state, dispatch]}>
        {props.children}
      </Context.Provider>
    );
  };