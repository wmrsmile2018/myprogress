import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./InputGroup.scss";

export const InputGroup = ({ title, className, modificators, children }) => {
  const classes = classNames(
    "input-group",
    { [`input-group-${className}`]: className },
    { [modificators]: modificators },
  );

  return (
    <div className={classes}>
      <p className="input-group__title">{title}</p>
      <div className="input-group__content">{children}</div>
    </div>
  );
};

InputGroup.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

InputGroup.defaultProps = {
  title: "",
  className: "",
};
