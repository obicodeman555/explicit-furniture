import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import PrimaryButton from "../primaryButton/PrimaryButton";
//css stylesheet
import "./atc.scss";

//functional component
const AddToCart = ({ product }) => {
  const { stock, colors } = product;
  console.log(colors);
  const [mainColor, setMainColor] = useState(colors[0]);
  const [quantity, setQuantity] = useState(1);

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
        <div class="quantity">
          <button
            type="button"
            className="plus quantity__button"
            onClick={increase}
          >
            +
          </button>
          <input
            type="number"
            className="quantity__inputText"
            step="1"
            min="1"
            max="15"
            name="quantity"
            value={quantity}
            title="Qty"
            size="4"
            placeholder=""
            inputmode="numeric"
            disabled
          />
          <button
            type="button"
            className="minus quantity__button"
            onClick={decrease}
          >
            -
          </button>
        </div>
        <PrimaryButton buttonText="add to cart" />
      </div>
    </div>
  );
};

export default AddToCart;
