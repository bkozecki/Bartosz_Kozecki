import React from "react";

import "./Header.style.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header_logo">
        <img
          src={require("../../resources/code.png")}
          alt="logo"
          className="header_logo_img"
        />
        <span className="header_logo_txt">| BKOZECKI </span>
      </div>
    </header>
  );
};

export default Header;
