import React, { useState } from "react";
import { formatPrice } from "../../utils/helpers";
import QuantityStepper from "../quantityStepper/QuantityStepper";
// import { useProductsContext } from "../../context/products_context";
import { useCartContext } from "../../context/cart_context";
import "./cartItem.scss";

const CartItem = ({ item }) => {
  //   const { single_product: product } = useProductsContext();

  const { removeItem } = useCartContext();

  const [quantity] = useState(1);

  const increase = () => {};
  const decrease = () => {};

  return (
    <li className="cart__item">
      <div>
        <span>
          <img src={item.image} alt="cart item" />
        </span>
        <span>
          <span>{item.name}</span>
          <span>
            Color:
            <span
              style={{ backgroundColor: item.color }}
              className="cart__item__color"
            ></span>
          </span>
          <span>{formatPrice(item.price)}</span>
        </span>
        <span className="subtotal">{formatPrice(item.price * quantity)}</span>
      </div>
      <div>
        <div>
          <button type="button" onClick={() => removeItem(item.id)}>
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28.3333 10H36.6667V13.3333H33.3333V35C33.3333 35.442 33.1577 35.8659 32.8452 36.1785C32.5326 36.4911 32.1087 36.6667 31.6667 36.6667H8.33333C7.8913 36.6667 7.46738 36.4911 7.15482 36.1785C6.84226 35.8659 6.66666 35.442 6.66666 35V13.3333H3.33333V10H11.6667V5C11.6667 4.55797 11.8423 4.13405 12.1548 3.82149C12.4674 3.50893 12.8913 3.33333 13.3333 3.33333H26.6667C27.1087 3.33333 27.5326 3.50893 27.8452 3.82149C28.1577 4.13405 28.3333 4.55797 28.3333 5V10ZM30 13.3333H9.99999V33.3333H30V13.3333ZM22.3567 23.3333L25.3033 26.28L22.9467 28.6367L20 25.69L17.0533 28.6367L14.6967 26.28L17.6433 23.3333L14.6967 20.3867L17.0533 18.03L20 20.9767L22.9467 18.03L25.3033 20.3867L22.3567 23.3333ZM15 6.66667V10H25V6.66667H15Z"
                fill="black"
              />
            </svg>
            <span>Remove</span>
          </button>
        </div>
        <QuantityStepper
          quantity={quantity}
          increase={increase}
          decrease={decrease}
        />
      </div>
    </li>
  );
};

export default CartItem;
