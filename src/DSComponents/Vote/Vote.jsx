import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { v4 as uuid } from "uuid";

import { RadioButton } from "../RadioButton/";
import "./Vote";
const { RadioGroup } = RadioButton;

export const Vote = ({ className, modificators, radioButons }) => {
  const classes = classNames("vote", { [`vote-${className}`]: className }, modificators);
  const handleOnClick = ({ target }) => {
    window.target = target;
  };
  return (
    <div className={classes}>
      <RadioGroup title="Центральный орган системы">
        {radioButons.map((el) => (
          <RadioButton
            key={uuid()}
            className="hello"
            name="contact"
            onChange={handleOnClick}
            text={el.text}
            value={el.value}
            noBorder
          />
        ))}
      </RadioGroup>
    </div>
  );
};
