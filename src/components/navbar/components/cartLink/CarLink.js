import React from "react";
import { Link } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import "./cartLink.scss";
const CarLink = (props) => {
  return (
    <div className={`cart ${props.className}`} id={props.id}>
      <Link to="/cart" className="font__primary w600">
        <span className="cartIcon__container image__box">
          <BsCart3 />
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
