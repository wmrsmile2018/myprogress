import React, { useMemo } from "react";
import { v4 as uuid } from "uuid";
import classNames from "classnames";
import PropTypes from "prop-types";

import { InputGroup } from "./InputGroup/";
import { InputDate } from "./InputDate/";

import "./Input.scss";

export const Input = ({ className, modificators, title, id, onChange, state, name, ...rest }) => {
  const value = useMemo(() => (typeof state === "string" ? state : state[name]));
  const newId = useMemo(() => id || uuid(), []);
  const classes = classNames(
    "input",
    { [`input-${className}`]: className },
    { [`${modificators}`]: modificators },
  );

  const handleOnChange = ({ target }) => {
    onChange({
      ...state,
      [name]: target.value,
    });
  };

  return (
    <label className={classes}>
      <p className="input__title" htmlFor={newId}>
        {title}
      </p>
      <input value={value} onChange={handleOnChange} id={newId} name={name} {...rest} />
    </label>
  );
};

Input.InputGroup = InputGroup;
Input.InputDate = InputDate;

Input.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  state: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  onChange: PropTypes.func,
};

Input.defaultProps = {
  className: "",
  title: "",
  id: "",
  name: "",
  state: "",
  onChange: () => {},
};
