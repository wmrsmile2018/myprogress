import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { v4 as uuid } from "uuid";
import classNames from "classnames";

import { RadioGroup } from "./RadioGroup/";

import "./RadioButton.scss";

export const RadioButton = ({ className, text, noBorder, disabled, id, ...rest }) => {
  const newId = useMemo(() => id || uuid(), []);
  const classes = classNames(
    "radio-button",
    { [`radioButton-${className}`]: className },
    { "radio-button--noborder": noBorder },
    { "radio-button--disabled": disabled },
  );

  return (
    <label className={classes}>
      <input type="radio" className="visually-hidden" id={newId} {...rest} />
      <div className="radio-button__box"></div>
      <span className="radio-button__text" htmlFor={newId}>
        {text}
      </span>
    </label>
  );
};

RadioButton.RadioGroup = RadioGroup;

RadioButton.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func,
  text: PropTypes.string,
  id: PropTypes.string,
  noBorder: PropTypes.bool,
  disabled: PropTypes.bool,
};

RadioButton.defaultProps = {
  className: "",
  onChange: () => {},
  text: "",
  id: "",
  noBorder: false,
  disabled: false,
};
