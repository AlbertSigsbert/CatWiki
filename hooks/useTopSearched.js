import { usePopularContext } from "./usePopularContext"


export const useTopSearched = (n) => {
  const state =  usePopularContext()
   
  const cats = state.breeds;

  //sort them in desc
  const sortedCats = cats.sort((a, b) => parseFloat(b.vote) - parseFloat(a.vote));

  //take top n
  const topN = sortedCats.slice(0, n);

  return topN;
}