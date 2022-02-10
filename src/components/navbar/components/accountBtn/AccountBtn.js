import React from "react";
import accountIcon from "../../../../assets/account-notlogged-icon.svg";
import chevronDown from "../../../../assets/arrow-down-circle.svg";
import "./accountBtn.scss";
const AccountBtn = (props) => {
  return (
    <div className={`account ${props.className}`} id={props.id}>
      <button type="button" className="account__btn">
        <span className="account__icon image__box">
          <img src={accountIcon} alt="" />
        </span>
        <span className="account__text font__primary w600">Account</span>
        <span className="chevronDown__icon">
          <img src={chevronDown} alt="chevron_down icon" srcset="" />
        </span>
      </button>
    </div>
  );
};

export default AccountBtn;
