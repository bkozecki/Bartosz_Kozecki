import React from "react";
import { Link } from "react-scroll";
import Typical from "react-typical";

import Header from "./Header";
import "./Intro.style.scss";

const Intro = () => {
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
      <span className="intro_text">
        <Typical
          steps={[
            3000,
            "Bartosz Kozecki",
            3000,
            "Software Developer",
            3000,
            "Witaj w moim świecie...",
            3000,
          ]}
        />
      </span>
      <div className="wave"></div>
      <div className="wave"></div>
      <div className="wave"></div>
    </div>
  );
};

export default Intro;
