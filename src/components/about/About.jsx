import React, { useContext } from "react";
import { useInView } from "react-intersection-observer";
import lngCtx from "../../utils/ctx-lang";
import { ABOUT } from "../../utils/Content";

import "./About.style.scss";

const About = () => {
  const ctx = useContext(lngCtx);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <div className={`about`} ref={ref} id="about">
      <div className={`about_content ${inView ? "visiable" : ""}`}>
        <div className="about_content_left">
          <h1 className="about_header">{`${
            !ctx.english ? ABOUT.headerPL : ABOUT.headerENG
          }`}</h1>
          <h2 className="about_header_secondary">
            {`${!ctx.english ? ABOUT.headingPL : ABOUT.headingENG}`}
          </h2>
          <ul className="about_content_list">
            <li className="about_content_left_list_item">
              {`${!ctx.english ? ABOUT.firstParaPL : ABOUT.firstParaENG}}`}
            </li>
            <li className="about_content_left_list_item">
              {`${!ctx.english ? ABOUT.secondParaPL : ABOUT.secondParaENG}}`}
            </li>
            <li className="about_content_left_list_item">
              {`${!ctx.english ? ABOUT.thirdParaPL : ABOUT.thirdParaENG}}`}
            </li>
            <li className="about_content_left_list_item">
              <a
                className="about_content_left_list_link"
                href="https://www.linkedin.com/in/bartosz-kozecki-ba798a197/"
                target="_blank"
              >
                {`${!ctx.english ? ABOUT.buttonPL : ABOUT.buttonENG}`}
              </a>
            </li>
          </ul>
        </div>
        <div className="about_content_right">
          <img
            src={require("../../resources/mePhoto.jpeg")}
            alt="profile picture"
            className="about_content_img"
          />
        </div>
      </div>
      <div className="about_content_left_shape"></div>
    </div>
  );
};

export default About;
