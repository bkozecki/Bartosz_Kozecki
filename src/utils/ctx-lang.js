import React from "react";

const lngCtx = React.createContext({
  english: false,
  toggleLng: () => {},
  toggleMenu: () => {},
  menuMobileActive: false,
});

export default lngCtx;
