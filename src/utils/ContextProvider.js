import React, { useState, useEffect } from "react";
import lngCtx from "./ctx-lang";

const ContextProvider = ({ children }) => {
  const [toggleEng, setToggleEng] = useState(false);

  const toggleEngHandler = () => {
    setToggleEng((prevState) => !prevState);
  };

  const LangContext = {
    english: toggleEng,
    toggleLng: toggleEngHandler,
  };

  return <lngCtx.Provider value={LangContext}>{children}</lngCtx.Provider>;
};

export default ContextProvider;
