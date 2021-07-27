import React, { useMemo } from "react";
import DatePicker from "react-date-picker";
import classNames from "classnames";
import PropTypes from "prop-types";
import { v4 as uuid } from "uuid";

import { calendarIcon, clearIcon } from "./icons";

import "./InputDate.scss";

export const InputDate = ({
  className,
  title,
  id,
  name,
  modificators,
  state,
  onChange,
  ...rest
}) => {
  const value = useMemo(() => (typeof state === "string" ? state : state[name]), [state]);
  const newId = useMemo(() => id || uuid(), []);
  const classes = classNames(
    "input-date",
    { [`input-date-${className}`]: className },
    { [modificators]: modificators },
  );

  const handleOnChange = (data) => {
    onChange({
      ...state,
      [name]: data,
    });
  };

  return (
    <div className={classes}>
      <p className="input-date__title" htmlFor={newId}>
        {title}
      </p>
      <DatePicker
        id={newId}
        onChange={handleOnChange}
        value={value}
        clearIcon={clearIcon({
          className: "input-date__clear-icon",
        })}
        calendarIcon={calendarIcon({
          className: "input-date__calendar-icon",
        })}
        {...rest}
      />
    </div>
  );
};

InputDate.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  modificators: PropTypes.string,
  state: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  onChange: PropTypes.func,
};

InputDate.defaultProps = {
  id: "",
  title: "",
  className: "",
  name: "",
  modificators: "",
  state: {},
  onChange: () => {},
};
