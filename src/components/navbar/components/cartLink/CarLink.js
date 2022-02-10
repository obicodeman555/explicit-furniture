import React from "react";
import { Link } from "react-router-dom";
import cart from "../../../../assets/cart.svg";
import "./cartLink.scss";
const CarLink = (props) => {
  return (
    <div className={`cart ${props.className}`} id={props.id}>
      <Link to="/cart" className="font__primary w600">
        <span className="cartIcon__container image__box">
          <img src={cart} alt="cart" />
        </span>
        <span className="cart__text large--text">
          <span>Cart</span>
          <span className="cart__value">(0)</span>
        </span>
      </Link>
    </div>
  );
};

export default CarLink;
