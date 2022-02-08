import React from "react";
import { Link } from "react-router-dom";
import { formatPrice } from "../../utils/helpers";
import "./product.scss";

const Product = ({ image, name, price, id }) => {
  return (
    <div className="product">
      <div className="product__container">
        <div className="product__imageBox">
          <img src={image} alt="" />
        </div>
        <div className="product__price">
          <span className="price__name">{name}</span>
          <span className="price__amount">{formatPrice(price)}</span>
        </div>
        <div className="product__details--cta">
          <Link to={`products/${id}`}>Product details</Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
