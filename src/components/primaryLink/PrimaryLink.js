import React from "react";
import { Link } from "react-router-dom";
import "./primaryLink.scss";

const PrimaryLink = (props) => {
  return (
    <div
      className={`primaryLink__container ${props.customClass}`}
      id={props.customId}
    >
      <Link to={props.to}>{props.linkText}</Link>
    </div>
  );
};

export default PrimaryLink;
