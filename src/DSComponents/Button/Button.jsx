import React from "react";
import PropTypes from "prop-types";

import "./Button.scss";

// size may be S, L
// shadow boolean
// border may be solid, dashed, none
// color may be default, black, green, blue
// button.add?
// button.delete?
const BUTTON_SIZE_CLASS = {
  "S": "ds-button--small",
  "M": "ds-button--medium",
  "L": "ds-button--large",
};

const BUTTON_BORDER_CLASS = {
  solid: "",
  none: "ds-button--no-border",
  dashed: "ds-button--dashed",
};

const BUTTON_COLOR_CLASS = {
  default: "ds-button--default-color",
  green: "ds-button--green",
  blue: "ds-button--blue",
  solidBlue: "ds-button--solid-blue",
  black: "ds-button--black",
};

export const Button = ({ className, size, children, shadow, border, color, ...rest }) => {
  return (
    <button
      className={`ds-button ${className} ${shadow ? "ds-button--shadow" : ""} ${
        BUTTON_SIZE_CLASS[size]
      } ${BUTTON_BORDER_CLASS[border]} ${BUTTON_COLOR_CLASS[color]}`}
      {...rest}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  shadow: PropTypes.bool,
  size: PropTypes.oneOf(["S", "M", "L"]).isRequired,
  children: PropTypes.node.isRequired,
  border: PropTypes.oneOf(["solid", "dashed", "none"]).isRequired,
  color: PropTypes.oneOf(["default", "green", "blue", "solidBlue", "black"]),
};

Button.defaultProps = {
  color: "default",
  className: "",
  shadow: false,
};
