import React, { useState } from "react";
import lngCtx from "./ctx-lang";

const ContextProvider = ({ children }) => {
  const [toggleEng, setToggleEng] = useState(false);
  const [mobileMenuActive, setMobileMenuActive] = useState(false);

  const toggleEngHandler = () => {
    setToggleEng((prevState) => !prevState);
  };

  const toggleMobileMenu = () => {
    setMobileMenuActive((prevState) => !prevState);
    console.log(mobileMenuActive);
  };

  const LangContext = {
    english: toggleEng,
    toggleLng: toggleEngHandler,
    menuMobileActive: mobileMenuActive,
    toggleMenu: toggleMobileMenu,
  };

  return <lngCtx.Provider value={LangContext}>{children}</lngCtx.Provider>;
};

export default ContextProvider;
