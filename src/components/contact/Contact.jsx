import React, { useContext } from "react";
import { useInView } from "react-intersection-observer";
import lngCtx from "../../utils/ctx-lang";
import { CONTACT } from "../../utils/Content";

import "./Contact.styles.scss";

const Contact = () => {
  const ctx = useContext(lngCtx);
  const { ref, inView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });

  return (
    <div className={`Contact`} id="contact">
      <div className={`Contact_content ${inView ? "visiable" : ""}`} ref={ref}>
        <h2 className="Contact_header">
          {`${!ctx.english ? CONTACT.headerPL : CONTACT.headerENG}`}
        </h2>
        <p className="Contact_text">
          {`${!ctx.english ? CONTACT.textPL : CONTACT.textENG}`}
        </p>

        <div className="Contact_icons">
          <a href="https://github.com/bkozecki" target="_blank">
            <img
              src={require("../../resources/github.png")}
              className="Contact_icons_icon"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/bartosz-kozecki-ba798a197/"
            target="_blank"
          >
            <img
              src={require("../../resources/linkedin.png")}
              className="Contact_icons_icon linkedin"
            />
          </a>
          <a href="mailto:bart.kozecki@gmail.com">
            <img
              src={require("../../resources/email.png")}
              className="Contact_icons_icon"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
