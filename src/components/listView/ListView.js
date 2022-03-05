import React from "react";
import "./listview.scss";
import { PrimaryLink } from "..";
import { formatPrice } from "../../utils/helpers";

const ListView = ({ products }) => {
  return (
    <div className="listview">
      <div className="listview__container">
        {products?.map((product) => {
          const { id, name, image, price, description } = product;

          return (
            <article className="listview__content" key={id}>
              <div className="product__imageBox">
                <img src={image} alt="" />
              </div>
              <div className="product__details">
                <span className="product__name">{name}</span>
                <span className="product__amount">{formatPrice(price)}</span>
                <span>{description}</span>
                <PrimaryLink linkText="Product details" to={`products/${id}`} />
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default ListView;
