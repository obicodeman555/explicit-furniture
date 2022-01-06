import React from "react";
import "./primaryButton.scss";

const PrimaryButton = (props) => {
  return (
    <div className="primaryButton__container">
      <button type={props.type} className="primaryButton__container--button">
        {props.buttonText}
      </button>
    </div>
  );
};

export default PrimaryButton;
