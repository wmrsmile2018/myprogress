import React from "react";
import PropTypes from "prop-types";

import { Button } from "../../Button/Button";

import "./TabControl.scss";

export const TabControl = ({ disabled, shadow, className, text, ...rest }) => {
  return (
    <Button
      size="M"
      border={`${disabled ? "solid" : "none"}`}
      className={`tab-control ${className || ""}`}
      shadow={!disabled}
      disabled={disabled}
      {...rest}
    >
      {text}
    </Button>
  );
};

TabControl.propTypes = {
  text: PropTypes.string.isRequired,
};

TabControl.defaultProps = {
  className: "",
  disabled: false,
};
