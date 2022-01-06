import React from "react";
import { Link } from "react-router-dom";
import "./primaryLink.scss";

const PrimaryLink = (props) => {
  return (
    <div className="primaryLink__container">
      <Link to={props.to} className="primaryLink__container--href">
        {props.linkText}
      </Link>
    </div>
  );
};

export default PrimaryLink;
