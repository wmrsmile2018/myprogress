import React from "react";

export const withHandlers = (props) => (WrappeedComponent) => {
  return () => <WrappeedComponent {...props} />;
};
