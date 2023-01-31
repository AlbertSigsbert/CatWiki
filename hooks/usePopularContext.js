import { useContext } from "react";
import { PopularContext } from "../context/PopularContext";



export const usePopularContext = () => {
  const context = useContext(PopularContext);

  if (!context) {
    throw Error("usePopularContext must be used inside PopularContextProvider");
  }
  
  return context;
};