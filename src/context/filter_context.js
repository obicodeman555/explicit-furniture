import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/filter_reducer";
import {
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  UPDATE_SORT,
  // SORT_PRODUCTS,
  // UPDATE_FILTERS,
  // FILTER_PRODUCTS,
  // CLEAR_FILTERS,
  SET_LISTVIEW,
  SORT_PRODUCTS,
} from "../actions";

import { useProductsContext } from "./products_context";

const initialState = {
  filtered_products: [],
  all_products: [],
  grid_view: true,
  sort: "price-lowest",
};
const FilterContext = React.createContext();

export const FilterProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // payload from products context
  const { products } = useProductsContext();

  //dispatch an action when this component mounts
  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products });
  }, [products]);

  useEffect(() => {
    dispatch({ type: SORT_PRODUCTS });
  }, [products, state.sort]);

  //function sets grid view of products
  const setGridView = () => {
    dispatch({ type: SET_GRIDVIEW });
  };

  //function set list view of products
  const setListView = () => {
    dispatch({ type: SET_LISTVIEW });
  };

  const updateSort = (e) => {
    const value = e.target.value;
    dispatch({ type: UPDATE_SORT, payload: value });
  };
  return (
    <FilterContext.Provider
      value={{ ...state, setGridView, setListView, updateSort }}
    >
      {props.children}
    </FilterContext.Provider>
  );
};

//make use of context
export const useFilterContext = () => {
  return useContext(FilterContext);
};
