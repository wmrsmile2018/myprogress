import React, { useState, useCallback, useEffect, useMemo } from "react";

import { Vote } from "@dsComponents/Vote/";
// import { Checkbox } from "@dsComponents/Checkbox/";
// const { InputGroup, InputDate } = Input;
// console.log(Checkbox);
const App = () => {
  const [state, setState] = useState({
    date: null,
    login: "",
    password: "",
  });

  const radioButons = [
    { value: "val1", text: "someText1" },
    { value: "val2", text: "someText2" },
  ];
  return (
    <div className="test-component">
      <Vote radioButons={radioButons} />
    </div>
  );
};

export default App;
