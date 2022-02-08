import React from "react";
import { Link } from "react-router-dom";
import { formatPrice } from "../../utils/helpers";

const Product = ({ image, name, price, id }) => {
  return (
    <article>
      <div className="container">
        <div>
          <img src={image} alt="" />
        </div>
        <div>
          <span>{name}</span>
          <span>{formatPrice(price)}</span>
        </div>
        <div>
          <Link to={`products/${id}`}>Product details</Link>
        </div>
      </div>
    </article>
  );
};

export default Product;
