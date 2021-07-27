import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./CheckboxGroup.scss";

export const CheckboxGroup = ({ title, onChange, children, value, className }) => {
  const classes = classNames("checkbox-group", { [`checkbox-group-${className}`]: className });
  return (
    <div className={classes} onChange={onChange} value={value}>
      <p className="checkbox-group__title">{title}</p>
      <div className="checkbox-group-content">{children}</div>
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
