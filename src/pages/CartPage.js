import React from "react";
import "./cart-page.scss";
import { useCartContext } from "../context/cart_context";

import emptyCartPhoto from "../assets/cart_empty.png";
import truckIcon from "../assets/truck.svg";
import { CartItem, PrimaryLink } from "../components";
import { formatPrice } from "../utils/helpers";
// import { Link } from "react-router-dom";

const CartPage = () => {
  const { cart, total_amount, shipping_fee, total_items } = useCartContext();

  if (cart.length < 1) {
    return (
      <div className="empty__cart">
        <div className="empty__cart__content">
          <div className="empty__cart__contentImage">
            <img src={emptyCartPhoto} alt="empty cart" />
          </div>
          <div className="empty__cart__text">
            <h4>You Cart is Empty!</h4>
            <p>
              Looks like you have not added anything to your cart, fill it up.
            </p>
          </div>
          <div className="empty__cart__shopLink">
            <PrimaryLink to="/products" linkText="START SHOPPING" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart__page">
      <div className="cart__page__container">
        <div className="cart__page__header">
          <span>Cart</span>
          <span>
            (<span>{total_items}</span>&nbsp;item)
          </span>
        </div>
        <div className="cart__page__content">
          <div className="left__content">
            <header>
              <span>
                <img src={truckIcon} alt="" />
              </span>
              <span>Shipping, arrives Tue, May 3</span>
            </header>

            <ul className="cart__itemList">
              {cart.map((item) => (
                <CartItem item={item} key={item.id} />
              ))}
            </ul>
          </div>
          <div className="right__content">
            <header>
              <PrimaryLink
                to="/checkout"
                linkText="Continue to checkout"
                customId="checkOut__link"
              />
            </header>
            <div>
              <span>
                <span>
                  <span className="text-bold-600">SubTotal&nbsp;</span>
                  <span>
                    (<span>{total_items}&nbsp;item</span>)
                  </span>
                </span>
                <span>{formatPrice(total_amount)}</span>
              </span>
              <span>
                <span className="light-bordered-bottom">
                  <span className="text-bold-600">Shipping Fee</span>
                  <span>{formatPrice(shipping_fee)}</span>
                </span>
              </span>
            </div>

            <div>
              <span className="text-bold-600">Estimated Total:</span>
              <span className="text-bold-600">
                {formatPrice(total_amount + shipping_fee)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
