import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { useCartContext } from "../../context/cart_context";
import PrimaryButton from "../primaryButton/PrimaryButton";
import QuantityStepper from "../quantityStepper/QuantityStepper";
//css stylesheet
import "./atc.scss";

//functional component
const AddToCart = ({ product }) => {
  const { addToCart } = useCartContext();
  const { id, stock, colors } = product;

  const [quantity, setQuantity] = useState(1);

  const [mainColor, setMainColor] = useState(colors[0]);

  //increase quantity
  const increase = () => {
    setQuantity((prevQuantity) => {
      let newQuantity = prevQuantity + 1;

      if (newQuantity > stock) {
        newQuantity = stock;
      }

      return newQuantity;
    });
  };

  //decrease quantity
  const decrease = () => {
    setQuantity((prevQuantity) => {
      let newQuantity = prevQuantity - 1;

      if (newQuantity < 1) {
        newQuantity = 1;
      }

      return newQuantity;
    });
  };

  return (
    <div>
      <div className="color">
        <span>Colors:</span>
        <span className="color-btn__container">
          {colors.map((color, index) => {
            return (
              <button
                key={index}
                style={{ backgroundColor: color }}
                className={`${
                  mainColor === color ? "color-btn active" : "color-btn"
                }`}
                onClick={() => setMainColor(color)}
              >
                {mainColor === color ? <FaCheck /> : null}
              </button>
            );
          })}
        </span>
      </div>
      <div className="singleProduct__cta">
        <QuantityStepper
          quantity={quantity}
          increase={increase}
          decrease={decrease}
        />
        <PrimaryButton
          type="button"
          buttonText="add to cart"
          onClick={() => addToCart(id, mainColor, quantity, product)}
        />
      </div>
    </div>
  );
};

export default AddToCart;
