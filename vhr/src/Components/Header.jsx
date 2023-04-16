import React from "react";
import "../CSS/header.css";

function Header() {
  return (
    <div className="header">
      <span className="header__logo">Home</span>
      <span className="header__nav-item--signin">Sign In</span>
    </div>
  );
}

export default Header;
