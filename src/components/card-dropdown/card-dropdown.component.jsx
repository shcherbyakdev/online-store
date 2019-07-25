import React from "react";

import { CustomButton } from "../../components";

import "./card-dropdown.styles.scss";

const CardDropDown = () => (
  <div className="cart-dropdown">
    <div className="cart-items" />
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

export default CardDropDown;
