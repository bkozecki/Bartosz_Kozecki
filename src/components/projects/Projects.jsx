import React, { useState, useContext } from "react";
import { useInView } from "react-intersection-observer";
import lngCtx from "../../utils/ctx-lang";
import {
  MAUT_PL,
  MAUT_ENG,
  KINGS_ENG,
  KINGS_PL,
  BANKIST_PL,
  BANKIST_ENG,
} from "../../utils/Content";

import "./Projects.style.scss";

const Projects = () => {
  const [infoVisiable, setInfoVisiable] = useState(0);
  const ctx = useContext(lngCtx);

  const { ref, inView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });

  const revealInfo = (index) => {
    setInfoVisiable(index);
  };

  const hideInfo = () => {
    setInfoVisiable(0);
  };

  return (
    <div
      className={`projects ${inView ? "visiable" : ""}`}
      ref={ref}
      id="projects"
    >
      <h1 className="projects_header">{`${
        !ctx.english ? "Wybrane projekty" : "Chosen projects"
      }:`}</h1>
      <a
        className="projects_link"
        href="https://github.com/bkozecki"
        target="_blank"
      >
        [ {`${!ctx.english ? "zobacz więcej na GitHub" : "see more on GitHub"}`}
        ]
      </a>
      <div className="projects_list">
        <div className="projects_list_item">
          <span className={`projects_name  first`}>Odzyskaj Maut</span>
          <a
            href="https://odzyskajmaut.pl/"
            target="_blank"
            onMouseEnter={() => revealInfo(1)}
            onMouseLeave={hideInfo}
          >
            <img
              src={require("../../resources/Project1.PNG")}
              className="projects_img"
            />
          </a>
          <span
            className={`projects_description ${
              infoVisiable === 1 ? "active" : ""
            } first`}
          >
            {`${!ctx.english ? MAUT_PL : MAUT_ENG}`}
          </span>
        </div>
        <div className="projects_list_item">
          <span className={`projects_name  second`}>King's Clothing</span>
          <a
            href="https://kingsnqueens.netlify.app/"
            target="_blank"
            onMouseEnter={() => revealInfo(2)}
            onMouseLeave={hideInfo}
          >
            <img
              src={require("../../resources/Project2.PNG")}
              className="projects_img"
            />
          </a>
          <span
            className={`projects_description ${
              infoVisiable === 2 ? "active" : ""
            } first`}
          >
            {`${!ctx.english ? KINGS_PL : KINGS_ENG}`}
          </span>
        </div>
        <div className="projects_list_item">
          <span className={`projects_name  third`}>
            <img
              src={require("../../resources/logo.png")}
              alt="project logo"
              className="third_logo"
            />
          </span>
          <a
            href="https://bankfy.netlify.app/"
            target="_blank"
            onMouseEnter={() => revealInfo(3)}
            onMouseLeave={hideInfo}
          >
            <img
              src={require("../../resources/Project3.PNG")}
              className="projects_img"
            />
          </a>
          <span
            className={`projects_description ${
              infoVisiable === 3 ? "active" : ""
            } first`}
          >
            {`${!ctx.english ? BANKIST_PL : BANKIST_ENG}`}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Projects;
