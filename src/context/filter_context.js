import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/filter_reducer";
import {
  LOAD_PRODUCTS,
  // SET_GRIDVIEW,
  // UPDATE_SORT,
  // SORT_PRODUCTS,
  // UPDATE_FILTERS,
  // FILTER_PRODUCTS,
  // CLEAR_FILTERS,
} from "../actions";

import { useProductsContext } from "./products_context";

const FilterContext = React.createContext();

const initialState = {
  filtered_products: [],
  all_products: [],
};

export const FilterProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // payload from products context
  const { products } = useProductsContext();

  //dispatch an action when this component mounts
  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products });
  }, [products]);

  return (
    <FilterContext.Provider value={{ ...state }}>
      {props.childern}
    </FilterContext.Provider>
  );
};

//make use of context
export const useFilterContext = () => {
  return useContext(FilterContext);
};
