import React from "react";
import { Link } from "react-router-dom";

import "./header.styles.scss";

const Header = () => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        Logo
      </Link>
      <div className="options">
        <Link to="/shop" className="option">
          SHOP
        </Link>
        <Link to="/shop" className="option">
          CONTACT
        </Link>
      </div>
    </div>
  );
};

export default Header;
