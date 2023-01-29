import React, { useContext } from "react";
import lngCtx from "../../utils/ctx-lang";

import "./Header.style.scss";

const Header = () => {
  const ctx = useContext(lngCtx);
  return (
    <header className="header">
      <div className="header_logo">
        <img
          src={require("../../resources/menu.png")}
          className="hamburger_menu"
          alt="menu"
          onClick={ctx.toggleMenu}
        />
        <img
          src={require("../../resources/code.png")}
          alt="logo"
          className="header_logo_img"
        />
        <span className="header_logo_txt">| BKOZECKI </span>
      </div>
      <img
        src={require(`../../resources/${
          ctx.english ? "united-kingdom (1)" : "united-kingdom"
        }.png`)}
        alt="UK"
        className={`header_lng_toggler ${ctx.english ? "toggled" : ""}`}
        onClick={ctx.toggleLng}
      />
    </header>
  );
};

export default Header;
