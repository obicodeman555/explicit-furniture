import React from "react";
import { PrimaryLink } from "../index";
import { formatPrice } from "../../utils/helpers";
import "./product.scss";

const Product = ({ image, name, price, id }) => {
  return (
    <div className="product">
      <div className="product__container">
        <div className="product__imageBox">
          <img src={image} alt="" />
        </div>
        <div className="product__details">
          <span className="product__name">{name}</span>
          <span className="product__amount">{formatPrice(price)}</span>
        </div>
        <PrimaryLink linkText="Product details" to={`products/${id}`} />
      </div>
    </div>
  );
};

export default Product;
