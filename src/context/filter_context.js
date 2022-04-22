import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/filter_reducer";
import {
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  UPDATE_SORT,
  UPDATE_FILTERS,
  // CLEAR_FILTERS,
  SET_LISTVIEW,
  SORT_PRODUCTS,
  FILTER_PRODUCTS,
} from "../actions";

import { useProductsContext } from "./products_context";

const initialState = {
  filtered_products: [],
  all_products: [],
  grid_view: true,
  sort: "price-lowest",
  filters: {
    text: "",
    company: "all",
    category: "all",
    color: "all",
    min_price: 0,
    max_price: 0,
    price: 0,
    shipping: false,
  },
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
    dispatch({ type: FILTER_PRODUCTS });
    dispatch({ type: SORT_PRODUCTS });
  }, [products, state.sort, state.filters]);

  //function sets grid view of products
  const setGridView = () => {
    dispatch({ type: SET_GRIDVIEW });
  };

  //function set list view of products
  const setListView = () => {
    dispatch({ type: SET_LISTVIEW });
  };

  //update state for filtering funtionality
  const updateFilters = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    //check if button is click
    //get text content of button clicked
    if (name === "category") {
      value = e.target.textContent;
    }

    if (name === "color") {
      value = e.target.dataset.color;
    }

    dispatch({ type: UPDATE_FILTERS, payload: { name, value } });
  };

  const clearFilters = () => {};

  //update the states for sort functionality
  const updateSort = (e) => {
    const value = e.target.value;
    dispatch({ type: UPDATE_SORT, payload: value });
  };
  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
        updateSort,
        updateFilters,
        clearFilters,
      }}
    >
      {props.children}
    </FilterContext.Provider>
  );
};

//make use of context
export const useFilterContext = () => {
  return useContext(FilterContext);
};
