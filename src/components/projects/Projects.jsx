import React, { useState } from "react";
import { useInView } from "react-intersection-observer";

import "./Projects.style.scss";

const Projects = () => {
  const [infoVisiable, setInfoVisiable] = useState(0);

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
      <h1 className="projects_header">Wybrane projekty:</h1>
      <a
        className="projects_link"
        href="https://github.com/bkozecki"
        target="_blank"
      >
        [ zobacz więcej na GitHub ]
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
            Mój pierwszy w pełni zaprojektowany i opracowany komercyjny projekt
            z własnym kalkulatorem oraz formularzem kontaktowym.
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
            Przykład witryny e-commerce z backendem w Firebase i bramka
            płatności stworzoną za pomocą Stripe API. Aplikacja zbudowana w
            React z Redux.
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
            Przykład landing page dla aplikacji finansowej, funkcjonalność
            zbudowana za pomocą JavaScript.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Projects;
