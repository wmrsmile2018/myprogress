import React, { useRef, useMemo } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import "./Checkbox.scss";

export const Checkbox = ({
  className,
  isLeft,
  title,
  name,
  onChange,
  checked,
  value,
  modificators,
}) => {
  const flag = useMemo(() => (checked ? "active" : "inactive"), []);
  const inputRef = useRef(null);
  const classes = classNames(
    "checkbox",
    { [`checkbox-${className}`]: className },
    { isLeft: isLeft },
    { isRight: !isLeft },
    modificators,
  );

  const handleOnClick = () => {
    inputRef.current.click();
  };

  // const handleOnChange = () => {
  //   onChange(!checked);
  // };

  // const handleOnChange = (evt) => {
  //   onChange(evt);
  // };

  return (
    <div className={classes}>
      {isLeft && <label htmlFor={name}>{title}</label>}
      <div className={`box ${flag}`} onClick={handleOnClick}>
        <span></span>
        <input type="checkbox" checked={checked} ref={inputRef} onChange={onChange} value={value} />
      </div>
      {!isLeft && <label htmlFor={name}>{title}</label>}
    </div>
  );
};

Checkbox.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  name: PropTypes.string,
  isLeft: PropTypes.bool,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.string,
  modificators: PropTypes.string,
};

Checkbox.defaultProps = {
  className: "",
  title: "",
  name: "",
  modificators: "",
  isLeft: false,
  checked: false,
  onChange: () => {},
};
