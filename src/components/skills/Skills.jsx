import React from "react";
import { useInView } from "react-intersection-observer";

import "./Skills.style.scss";

const Skills = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <div
      className={`skills_wrapper ${inView ? "visiable" : ""}`}
      id="skills"
      ref={ref}
    >
      <h1 className="skills_main_header">Tech Stack</h1>
      <div className="skills_list_wrapper">
        <div className="skills_section">
          <h2 className="skills_header">FrontEnd</h2>
          <ul className="skills_list">
            <li className="skills_list_item">JavaScript</li>
            <li className="skills_list_item">React</li>
            <li className="skills_list_item">Redux</li>
            <li className="skills_list_item">HTML/CSS</li>
            <li className="skills_list_item">SASS</li>
            <li className="skills_list_item">TypeScript</li>
          </ul>
        </div>
        <div className="skills_section">
          <h2 className="skills_header">Backend</h2>
          <ul className="skills_list">
            <li className="skills_list_item">PHP</li>
            <li className="skills_list_item">GraphQL</li>
            <li className="skills_list_item">Node.js</li>
          </ul>
        </div>
        <div className="skills_section">
          <h2 className="skills_header">General</h2>
          <ul className="skills_list">
            <li className="skills_list_item">Firebase</li>
            <li className="skills_list_item">Git</li>
            <li className="skills_list_item">Data Analytics</li>
            <li className="skills_list_item">RWD</li>
            <li className="skills_list_item">UI/UX</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
