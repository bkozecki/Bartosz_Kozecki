import React, { useRef, useEffect, useContext } from "react";
import { Link } from "react-scroll";
import Typed from "typed.js";
import lngCtx from "../../utils/ctx-lang";

import Header from "./Header";
import "./Intro.style.scss";

const Intro = () => {
  const el = useRef(null);
  const typed = useRef(null);
  const ctx = useContext(lngCtx);

  useEffect(() => {
    const options = {
      strings: [
        "Bartosz Kozecki",
        "Software Developer",
        `${!ctx.english ? "Witaj w moim świecie." : "Welcome to my world."}`,
      ],
      typeSpeed: 70,
      backSpeed: 50,
      startDelay: 2000,
    };

    typed.current = new Typed(el.current, options);

    return () => {
      typed.current.destroy();
    };
  }, [ctx.english]);

  return (
    <div className="intro_wrap">
      <Header />
      <main>
        <nav className="intro_wrap_left_nav">
          <ul className="nav_list">
            <li className="nav_list_item">
              <a>
                <span className="resume">CV</span>
              </a>
            </li>
            <li className="nav_list_item">
              <a
                href="https://www.linkedin.com/in/bartosz-kozecki-ba798a197/"
                target="_blank"
              >
                <img
                  src={require("../../resources/linkedin.png")}
                  alt="linkedin"
                  className="nav_list_icon"
                />
              </a>
            </li>
            <li className="nav_list_item">
              <a href="https://github.com/bkozecki" target="_blank">
                <img
                  src={require("../../resources/github.png")}
                  alt="github"
                  className="nav_list_icon"
                />
              </a>
            </li>
            <li className="nav_list_item"></li>
          </ul>
        </nav>
        <nav className="intro_wrap_right_nav">
          <ul className="nav_list">
            <li className="nav_list_item right">
              <Link to="projects" spy={true} smooth={true} duration={500}>
                {`${!ctx.english ? "projekty" : "projects"}`}
              </Link>
            </li>
            <li className="nav_list_item right">
              <Link to="about" spy={true} smooth={true} duration={500}>
                {`${!ctx.english ? "o mnie" : "about me"}`}
              </Link>
            </li>
            <li className="nav_list_item right">
              <Link to="skills" spy={true} smooth={true} duration={500}>
                tech stack
              </Link>
            </li>
            <li className="nav_list_item right">
              <Link to="contact" spy={true} smooth={true} duration={500}>
                {`${!ctx.english ? "kontakt" : "contact"}`}
              </Link>
            </li>
          </ul>
        </nav>
      </main>
      <span className="intro_text type-wrap">
        <span className="text-actual" ref={el} />
      </span>
      <div className="wave"></div>
      <div className="wave"></div>
      <div className="wave"></div>
    </div>
  );
};

export default Intro;
