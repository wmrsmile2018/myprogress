import React, { useState, useCallback, useEffect, useMemo } from "react";

import { Input } from "@dsComponents/Vote/";

const { InputGroup, InputDate } = Input;

const App = () => {
  const [state, setState] = useState({
    date: null,
    login: "",
    password: "",
  });

  return (
    <div className="test-component">
      <InputGroup title="Общие сведения договора">
        <InputDate
          className="parent"
          name="date"
          modificators="some-modificators"
          state={state}
          onChange={setState}
          title="сроки"
        />
        <Input onChange={setState} className="parent" title="login" name="login" state={state} />
        <Input
          onChange={setState}
          state={state}
          className="parent"
          title="password"
          name="password"
          type="password"
        />
      </InputGroup>
    </div>
  );
};

export default App;
