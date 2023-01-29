import React, { useContext } from "react";
import { Link } from "react-scroll";
import lngCtx from "../../utils/ctx-lang";

import "./MobileMenu.style.scss";

const MobileMenu = () => {
  const ctx = useContext(lngCtx);
  return (
    <nav className={`mobile_menu ${ctx.menuMobileActive ? "active" : ""}`}>
      <div className="mobile_wrap">
        <span className="mobile_menu_close" onClick={ctx.toggleMenu}>
          &times;
        </span>
      </div>
      <ul className="mobile_menu_list">
        <li className="mobile_menu_list_item">
          <Link
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
            onClick={ctx.toggleMenu}
          >
            {`${!ctx.english ? "projekty" : "projects"}`}
          </Link>
        </li>
        <li className="mobile_menu_list_item">
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            onClick={ctx.toggleMenu}
          >
            {`${!ctx.english ? "o mnie" : "about me"}`}
          </Link>
        </li>
        <li className="mobile_menu_list_item">
          <Link
            to="skills"
            spy={true}
            smooth={true}
            duration={500}
            onClick={ctx.toggleMenu}
          >
            tech stack
          </Link>
        </li>
        <li className="mobile_menu_list_item">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            onClick={ctx.toggleMenu}
          >
            {`${!ctx.english ? "kontakt" : "contact"}`}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MobileMenu;
