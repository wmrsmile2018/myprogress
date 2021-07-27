import React, { useRef } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import "./CheckBox.scss";

const CheckBox = ({ className, isLeft, title, name, onChange, checked, value }) => {
  const inputRef = useRef(null);
  const classes = classNames("checkbox", className, { isLeft: isLeft }, { isRight: !isLeft });

  const handleOnClick = () => {
    inputRef.current.click();
  };

  // const handleOnChange = () => {
  //   onChange(!checked);
  // };

  const handleOnChange = (evt) => {
    onChange(evt);
  };

  return (
    <div className={classes}>
      {isLeft && <label htmlFor={name}>{title}</label>}
      <div className={`box ${checked ? "active" : "inactive"}`} onClick={handleOnClick}>
        <span></span>
        <input
          type="checkbox"
          checked={checked}
          ref={inputRef}
          onChange={handleOnChange}
          value={value}
        />
      </div>
      {!isLeft && <label htmlFor={name}>{title}</label>}
    </div>
  );
};

CheckBox.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  name: PropTypes.string,
  isLeft: PropTypes.bool,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

CheckBox.defaultProps = {
  className: "",
  title: "",
  name: "",
  isLeft: false,
  checked: false,
  onChange: () => {},
};

export default CheckBox;
