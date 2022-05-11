import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/cart_reducer";
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  // TOGGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  // COUNT_CART_TOTALS,
} from "../actions";

const getLocalStorage = () => {
  let cart = localStorage.getItem("cart");

  if (cart) {
    return JSON.parse(cart);
  } else {
    return [];
  }
};

const initialState = {
  cart: getLocalStorage(),
  total_items: 0,
  total_amount: 0,
  shipping_fee: 534,
};

const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //set cart on changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  //add to cart
  const addToCart = (id, color, quantity, product) => {
    dispatch({ type: ADD_TO_CART, payload: { id, color, quantity, product } });
  };

  //remove Item
  const removeItem = (id) => {
    dispatch({ type: REMOVE_CART_ITEM, payload: id });
  };

  //toggle Amount
  const toggleAmount = (id, value) => {};

  //clear cart items
  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  return (
    <CartContext.Provider
      value={{ ...state, addToCart, removeItem, clearCart, toggleAmount }}
    >
      {children}
    </CartContext.Provider>
  );
};

//make use of context
export const useCartContext = () => {
  return useContext(CartContext);
};
