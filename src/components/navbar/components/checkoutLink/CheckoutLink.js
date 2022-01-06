import React from "react";
import { Link } from "react-router-dom";
import checkout from "../../../../assets/checkout_icon.png";
import "./checkoutLink.scss";
const CheckoutLink = (props) => {
  return (
    <div className={`checkout ${props.className}`} id={props.id}>
      <Link className="font__primary w600">
        <span className="image__box">
          <img src={checkout} alt="checkout icon" srcset="" />
        </span>
        <span className="large--text">Checkout</span>
      </Link>
    </div>
  );
};

export default CheckoutLink;
