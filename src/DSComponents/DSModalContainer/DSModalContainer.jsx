import React from "react";
import PropTypes from "prop-types";

export const DSModalContainer = ({ className, children }) => {
  return <div className={`${className} ds-modal-container`}>{children}</div>;
};

DSModalContainer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
