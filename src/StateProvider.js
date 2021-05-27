// // import React from 'react'
// import React, {createContext, useContext,  useReducer} from "react"

// // Prepare the DataLayer
// export const StateContext = createContext();

// // WRAP OUR APP AND PROVIDE THE DATA LAYER

// // $stateProvider is used to define different states of one route. 
// // You can give the state a name, different controller, different view without having to use a direct href to a route.

// // createContext() . Using this property lets you consume the nearest current value of that Context type using this. context . You can reference this in any of the lifecycle methods including the render function.

// export const StateProvider = ({reducer, initialState, children }) => (
//     <StateContext.Provider value={useReducer(reducer, initialState, )}>
//         {children}
//     </StateContext.Provider>
// );
// // PULL INFORMATION FROM THE DATA LAYER
// export const useStateValue = () => useContext(StateContext);







import React, { createContext, useContext, useReducer } from "react";

// Prepares the dataLayer
export const StateContext = createContext();

// Wrap our app and provide the Data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Pull information from the data layer
export const useStateValue = () => useContext(StateContext);