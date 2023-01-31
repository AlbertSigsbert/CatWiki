import { createContext, useReducer, useEffect } from "react";

export const PopularContext = createContext();

export const PopularReducer = (state, action) => {
  switch (action.type) {
 
    case "INIT_STORE":
      return { breeds: action.payload };
    case "INCREMENT_VOTE":
      // console.log("updating", action.payload);
      return {
        breeds:  state.breeds.map((breed) => {
          if (breed.id === action.payload) {
            breed.vote = breed.vote + 1;
          }
          return breed;
        }),
      };
    default:
      return state;
  }
};

export const initialState = {
  breeds: [],
};

export function PopularContextProvider({ children }) {
  const [state, dispatch] = useReducer(PopularReducer, initialState);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("breeds"))) {
      //checking if there already is a state in localstorage
      //if yes, update the current state with the stored one
      dispatch({
        type: "INIT_STORE",
        payload: JSON.parse(localStorage.getItem("breeds")),
      });
    }
  }, []);

  useEffect(() => {

    // console.log(`Initial State: ${JSON.stringify(initialState)}`);
    // console.log(`Current State: ${JSON.stringify(state)}`);

    if (state !== initialState) {
      localStorage.setItem("breeds", JSON.stringify(state.breeds));
    }
  }, [state]);



  return (
    <PopularContext.Provider value={{ ...state, dispatch }}>
      {children}
    </PopularContext.Provider>
  );
}
