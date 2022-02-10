import React from "react";
import { useProductsContext } from "../../context/products_context";

import { Link } from "react-router-dom";

import { FaHamburger } from "react-icons/fa";

import logo from "../../assets/logo.svg";
import "./navBar.scss";
import MarketLink from "./components/marketLink";
import AccountBtn from "./components/accountBtn";
import CartLink from "./components/cartLink";

const Navbar = () => {
  const { openSidebar } = useProductsContext();
  return (
    <nav className="nav">
      <div className="header__nav">
        <div className="header__navLogo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <MarketLink id="navBar__marketLink" />
        <React.Fragment>
          <AccountBtn id="navBar__accountBtn" />
          <CartLink id="navBar__cartLink" />
        </React.Fragment>

        <div className="navBurger__icon">
          <button
            type="button"
            className="navBurger__iconButton"
            onClick={openSidebar}
          >
            <FaHamburger />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
