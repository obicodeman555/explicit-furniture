import React, { useContext } from "react";

const FilterContext = React.createContext();

export const FilterProvider = (props) => {
  return <FilterContext.Provider>{props.childern}</FilterContext.Provider>;
};

//make use of context
export const useFilterContext = () => {
  return useContext(FilterContext);
};
