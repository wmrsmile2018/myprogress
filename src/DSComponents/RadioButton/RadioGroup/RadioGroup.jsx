import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./RadioGroup.scss";

export const RadioGroup = ({ title, onChange, children, value, className }) => {
  const classes = classNames("radio-group", { [`radio-group-${className}`]: className });
  return (
    <div className={classes} onChange={onChange} value={value}>
      <p className="radio-group__title">{title}</p>
      <div className="radio-group-content">{children}</div>
    </div>
  );
};

RadioGroup.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.any,
  className: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

RadioGroup.defaultProps = {
  onChange: () => {},
  value: null,
  className: "",
};
