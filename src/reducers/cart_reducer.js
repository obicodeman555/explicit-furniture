import {
  ADD_TO_CART,
  // CLEAR_CART,
  // COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  // TOGGLE_CART_ITEM_AMOUNT,
} from "../actions";

const cart_reducer = (state, action) => {
  if (action.type === ADD_TO_CART) {
    const { id, quantity, color, product } = action.payload;
    const existingItem = state.cart.find((i) => i.id === id + color);

    if (existingItem) {
      const tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === id + color) {
          //increase quantity
          let newQuantity = cartItem.quantity + quantity;

          //check btween stock and new quantity of item
          if (newQuantity > cartItem.max) {
            newQuantity = cartItem.max;
          }

          return { ...cartItem, quantity: newQuantity };
        } else {
          return cartItem;
        }
      });

      return { ...state, cart: tempCart };
    } else {
      const newItem = {
        id: id + color,
        name: product.name,
        color,
        quantity,
        image: product.images[0].url,
        price: product.price,
        max: product.stock,
      };

      return { ...state, cart: [...state.cart, newItem] };
    }
  }

  //remove
  if (action.type === REMOVE_CART_ITEM) {
    const tempCart = state.cart.filter((item) => item.id !== action.payload);

    return { ...state, cart: tempCart };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default cart_reducer;
