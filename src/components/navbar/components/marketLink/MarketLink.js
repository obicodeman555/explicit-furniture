import React from "react";
import { Link } from "react-router-dom";
import basket from "../../../../assets/bags.png";
import "./marketLink.scss";

const MarketLink = (props) => {
  return (
    <div className={`market__nav__link ${props.className}`} id={props.id}>
      <Link className="market__link" to="/products">
        <span className="market__link__Icon image__box">
          <img src={basket} alt="Market Place Icon" />
        </span>
        <span className="market__link__text large--text font__primary w600">
          Market Place
        </span>
      </Link>
    </div>
  );
};

export default MarketLink;
