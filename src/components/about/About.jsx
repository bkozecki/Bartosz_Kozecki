import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

import "./About.style.scss";

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <div className={`about`} ref={ref} id="about">
      <div className={`about_content ${inView ? "visiable" : ""}`}>
        <div className="about_content_left">
          <h1 className="about_header">Nazywam się Bartosz,</h1>
          <h2 className="about_header_secondary">
            Jestem Software Developerem.
          </h2>
          <ul className="about_content_list">
            <li className="about_content_left_list_item">
              Moje zainteresowanie programowaniem rozpoczeło się w 2021 roku,
              gdy zacząłem budować w zaciszu domomym proste strony internetowe.
              Chwile późniniej znalazłem się w procesie tworzenia komercyjnych
              projektów i prostych gier, tak narodziła się moja miłość do
              programowania.
            </li>
            <li className="about_content_left_list_item">
              Aplikacje tworzę z myślą o użtkowniku i jego wrażeniach. Wierze w
              przejrzyste, intuicyjne aplikacje, napisane czystym i szybkim
              kodem, z których korzystanie daje samą przyjemność. Uważam, że
              żaden problem nie jest zbyt trudny do rozwiązania, jeśli podzieli
              się go na mniejsze części.
            </li>
            <li className="about_content_left_list_item">
              W przerwie od programowania uwielbiam oglądać motorsport, spędzać
              czas z najbliższymi, uprawiać sport, czy czasem zatracić się w
              ulubionej grze.
            </li>
            <li className="about_content_left_list_item">
              <a
                className="about_content_left_list_link"
                href="https://www.linkedin.com/in/bartosz-kozecki-ba798a197/"
                target="_blank"
              >
                Więcej o mnie
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
