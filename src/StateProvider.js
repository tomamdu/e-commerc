import React,{createContext,useContext,useReducer} from "react";

//prepares the dataLayer
export const StateContext = createContext();

//provide the Data layer
export const StateProvider = ({reducer, initialState, children})=>(
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
);
  
//pull information ffrom the data layer
export const useStateValue = () => useContext(StateContext);