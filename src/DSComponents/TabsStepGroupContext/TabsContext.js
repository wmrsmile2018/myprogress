import React, { useContext } from "react";

const initialState = {
  stepsIsMounted: [],
  step: 1,
  updateHandlers: () => {},
};

export const TabsContext = React.createContext(initialState);

export const useTabs = () => useContext(TabsContext);
