import React, { useRef, useEffect } from "react";
import { Link } from "react-scroll";
import Typed from "typed.js";

import Header from "./Header";
import "./Intro.style.scss";

const Intro = () => {
  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Bartosz Kozecki",
        "Software Developer",
        "Witaj w moim świecie...",
      ],
      typeSpeed: 50,
      backSpeed: 50,
    };

    typed.current = new Typed(el.current, options);

    return () => {
      typed.current.destroy();
    };
  }, []);

  return (
    <div className="intro_wrap">
      <Header />
      <main>
        <nav className="intro_wrap_left_nav">
          <ul className="nav_list">
            <li className="nav_list_item">
              <Link to="projects" spy={true} smooth={true} duration={500}>
                projekty
              </Link>
            </li>
            <li className="nav_list_item">
              <Link to="about" spy={true} smooth={true} duration={500}>
                o mnie
              </Link>
            </li>
            <li className="nav_list_item">
              <Link to="skills" spy={true} smooth={true} duration={500}>
                tech stack
              </Link>
            </li>
            <li className="nav_list_item">
              <Link to="contact" spy={true} smooth={true} duration={500}>
                kontakt
              </Link>
            </li>
          </ul>
        </nav>
        <nav className="intro_wrap_right_nav">
          <ul className="nav_list">
            <li className="nav_list_item right">
              <a>
                <span className="resume">CV</span>
              </a>
            </li>
            <li className="nav_list_item right">
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
            <li className="nav_list_item right">
              <a href="https://github.com/bkozecki" target="_blank">
                <img
                  src={require("../../resources/github.png")}
                  alt="github"
                  className="nav_list_icon"
                />
              </a>
            </li>
          </ul>
        </nav>
      </main>
      <span className="intro_text type-wrap">
        <span style={{ whiteSpace: "pre" }} ref={el} />
      </span>
      <div className="wave"></div>
      <div className="wave"></div>
      <div className="wave"></div>
    </div>
  );
};

export default Intro;
