import React from "react";
import "./quantityStepper.scss";

const QuantityStepper = ({ quantity, increase, decrease }) => {
  return (
    <div className="quantity">
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
        inputMode="numeric"
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
  );
};

export default QuantityStepper;
