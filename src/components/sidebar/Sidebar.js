// import React, { useState } from "react";
import { Link } from "react-router-dom";

import MarketLink from "../navbar/components/marketLink";
import AccountBtn from "../navbar/components/accountBtn";
import CheckoutLink from "../navbar/components/checkoutLink/CheckoutLink";
import CartLink from "../navbar/components/cartLink";
import logo from "../../assets/logo.svg";
import close from "../../assets/close_sign.png";
import { useProductsContext } from "../../context/products_context";

import "./sidebar.scss";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useProductsContext();

  return (
    <section
      className={`${isSidebarOpen ? "sidebar slideIn" : "sidebar slideOut"}`}
    >
      <div className="sidebar__header">
        <Link className="sidebarLogo__link" to="/">
          <span>
            <img src={logo} alt="seconduser__logo__image" />
          </span>
        </Link>
        <div className="sidebar__close">
          <button type="button" onClick={closeSidebar} title="close-side-bar">
            <img src={close} alt="close__icon" />
          </button>
        </div>
      </div>

      <nav className="sidebar__nav__links">
        <div
          className={`${
            isSidebarOpen
              ? "sidebar__nav__item animatedTranslation"
              : "sidebar__nav__item"
          }`}
          onClick={closeSidebar}
        >
          <MarketLink className="sidebar--biggerFont sidebar--largerIcon" />
        </div>
        <div
          className={`${
            isSidebarOpen
              ? "sidebar__nav__item animatedTranslation"
              : "sidebar__nav__item"
          }`}
        >
          <AccountBtn
            className="sidebar--biggerFont sidebar--largerIcon"
            id="sideBar__accountBtn"
          />
        </div>

        <div
          className={`${
            isSidebarOpen
              ? "sidebar__nav__item animatedTranslation"
              : "sidebar__nav__item"
          }`}
          onClick={closeSidebar}
        >
          <CheckoutLink className="sidebar--biggerFont sidebar--largerIcon" />
        </div>
        <div
          className={`${
            isSidebarOpen
              ? "sidebar__nav__item animatedTranslation"
              : "sidebar__nav__item"
          }`}
          onClick={closeSidebar}
        >
          <CartLink className="sidebar--biggerFont sidebar--largerIcon" />
        </div>
      </nav>
    </section>
  );
};

export default Sidebar;
