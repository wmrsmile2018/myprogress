/* eslint-disable no-alert */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useCallback, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { v4 as uuid } from "uuid";

import { RadioButton } from "@DSComponents/RadioButton/";

const { RadioGroup } = RadioButton;

const radioButons = [
  { value: "val1", text: "someText1" },
  { value: "val2", text: "someText2" },
  { value: "val3", text: "someText3" },
  { value: "val4", text: "someText4" },
  { value: "val5", text: "someText5" },
];

export const TestComponent = () => {
  // const [activeKey, setActiveKey] = useState(1);

  // const handleOnClickTab = (current) => {
  //   setActiveKey(current);
  // };
  console.log(RadioGroup);

  const handleOnClick = ({ target }) => {
    window.target = target;
  };

  return (
    <div className="test-component">
      <RadioGroup title="Центральный орган системы">
        {radioButons.map((el) => (
          <RadioButton
            key={uuid()}
            className="hello"
            name="contact"
            onChange={handleOnClick}
            text={el.text}
            value={el.value}
          />
        ))}
      </RadioGroup>
    </div>
  );
};
