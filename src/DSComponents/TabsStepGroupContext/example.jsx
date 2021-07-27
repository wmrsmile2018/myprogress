/* eslint-disable no-alert */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { TabsStepGroup, TabStep, withHandlers } from "./TabsStepGroupContext/";

const style = {
  height: 1000,
  width: 800,
};

const Component1 = ({ handlers, updateHandlers }) => {
  const { onSave, onBack, onNext } = handlers;

  useEffect(() => {
    // console.log(handlers);
    // updateHandlers({
    //   ...handlers,
    //   // disableNext: true,
    // });
  }, []);

  return (
    <div>
      <button
        onClick={() => {
          updateHandlers({
            ...handlers,
            disableSave: false,
          });
        }}
      >
        save
      </button>
      <button onClick={onBack}>back</button>
      <button
        onClick={() => {
          updateHandlers({
            ...handlers,
            disableNext: false,
          });
        }}
      >
        next
      </button>
      <div style={style}>
        some text some text some text some textsome textsome textsome textsome textsome text v some
        text some text some text some textsome textsome textsome textsome textsome text v some text
        some text some text some textsome textsome textsome textsome textsome text v some text some
        text some text some textsome textsome textsome textsome textsome text v some text some text
        some text some textsome textsome textsome textsome textsome text v some text some text some
        text some textsome textsome textsome textsome textsome text v some text some text some text
        some textsome textsome textsome textsome textsome text v some text some text some text some
        textsome textsome textsome textsome textsome text v some text some text some text some
        textsome textsome textsome textsome textsome text v some text some text some text some
        textsome textsome textsome textsome textsome text v some text some text some text some
        textsome textsome textsome textsome textsome text v some text some text some text some
        textsome textsome textsome textsome textsome text v some text some text some text some
        textsome textsome textsome textsome textsome text v some text some text some text some
        textsome textsome textsome textsome textsome text v some text some text some text some
        textsome textsome textsome textsome textsome text v some text some text some text some
        textsome textsome textsome textsome textsome text v some text some text some text some
        textsome textsome textsome textsome textsome text v some text some text some text some
        textsome textsome textsome textsome textsome text v some text some text some text some
        textsome textsome textsome textsome textsome text v some text some text some text some
        textsome textsome textsome textsome textsome text v some text some text some text some
        textsome textsome textsome textsome textsome text v some text some text some text some
        textsome textsome textsome textsome textsome text v some text some text some text some
        textsome textsome textsome textsome textsome text v some text some text some text some
        textsome textsome textsome textsome textsome text v some text some text some text some
        textsome textsome textsome textsome textsome text v some text some text some text some
        textsome textsome textsome textsome textsome text v some text some text some text some
        textsome textsome textsome textsome textsome text v some text some text some text some
        textsome textsome textsome textsome textsome text v some text some text some text some
        textsome textsome textsome textsome textsome text v some text some text some text some
        textsome textsome textsome textsome textsome text v some text some text some text some
        textsome textsome textsome textsome textsome text v some text some text some text some
        textsome textsome textsome textsome textsome text v some text some text some text some
        textsome textsome textsome textsome textsome text v some text some text some text some
        textsome textsome textsome textsome textsome text v some text some text some text some
        textsome textsome textsome textsome textsome text v some text some text some text some
        textsome textsome textsome textsome textsome text v some text some text some text some
        textsome textsome textsome textsome textsome text v some text some text some text some
        textsome textsome textsome textsome textsome text v some text some text some text some
        textsome textsome textsome textsome textsome text v some text some text some text some
        textsome textsome textsome textsome textsome text v some text some text some text some
        textsome textsome textsome textsome textsome text v some text some text some text some
        textsome textsome textsome textsome textsome text v some text some text some text some
        textsome textsome textsome textsome textsome text v some text some text some text some
        textsome textsome textsome textsome textsome text v some text some text some text some
        textsome textsome textsome textsome textsome text v some text some text some text some
        textsome textsome textsome textsome textsome text v some text some text some text some
        textsome textsome textsome textsome textsome text v some text some text some text some
        textsome textsome textsome textsome textsome text v some text some text some text some
        textsome textsome textsome textsome textsome text v some text some text some text some
        textsome textsome textsome textsome textsome text v some text some text some text some
        textsome textsome textsome textsome textsome text v some text some text some text some
        textsome textsome textsome textsome textsome text v some text some text some text some
        textsome textsome textsome textsome textsome text v some text some text some text some
        textsome textsome textsome textsome textsome text v some text some text some text some
        textsome textsome textsome textsome textsome text v some text some text some text some
        textsome textsome textsome textsome textsome text v some text some text some text some
        textsome textsome textsome textsome textsome text v some text some text some text some
        textsome textsome textsome textsome textsome text v some text some text some text some
        textsome textsome textsome textsome textsome text v some text some text some text some
        textsome textsome textsome textsome textsome text v some text some text some text some
        textsome textsome textsome textsome textsome text v some text some text some text some
        textsome textsome textsome textsome textsome text v some text some text some text some
        textsome textsome textsome textsome textsome text v
      </div>
    </div>
  );
};

const tabs = [
  {
    component: Component1,
    tab: "Персональные данные",
    key: "1",
  },
  {
    component: Component1,
    tab: "Профиль эксперта",
    key: "2",
  },
  {
    component: Component1,
    tab: "Связанные организации",
    key: "3",
  },
];

export const TestComponent = () => {
  // const [activeKey, setActiveKey] = useState(1);

  // const handleOnClickTab = (current) => {
  //   setActiveKey(current);
  // };

  return (
    <div className="test-component">
      <TabsStepGroup
        render={(handlers, updateHandlers) =>
          tabs.map((el, i) => {
            const Component = withHandlers({ handlers, updateHandlers })(el.component);
            return (
              <TabStep key={el.key} index={i} tab={el.tab}>
                <Component />
              </TabStep>
            );
          })
        }
      />
    </div>
  );
};
