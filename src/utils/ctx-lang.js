import React from "react";

const lngCtx = React.createContext({
  english: false,
  toggleLng: () => {},
});

export default lngCtx;
