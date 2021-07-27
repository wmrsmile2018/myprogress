import React, { useEffect, useState, useMemo, useRef } from "react";
import PropTypes from "prop-types";

import { TabsContext } from "./TabsContext";

import "./TabsStepGroup.scss";
import { TabControl } from "./TabControl/TabControl";

export const TabsStepGroup = ({ render }) => {
  const scrollingBlockRef = useRef(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [state, setState] = useState({
    onSave: () => {},
    onNext: () => {},
    onBack: () => {},
    disableSave: true,
    disableNext: false,
  });
  const components = useMemo(() => render(state, setState), [render]);
  const [stepsIsMounted, setStepsIsMounted] = useState(Array(components.length).fill(false));
  const [stepsCompleted, setStepsCompleted] = useState(Array(components.length).fill(false));
  const navigations = useMemo(() => {
    return components.map((el) => ({ tab: el.props.tab, index: el.props.index }));
  }, [components]);

  useEffect(() => {
    scrollingBlockRef.current.scroll(0, 0);
    setState({
      ...state,
      disableNext: !stepsCompleted[currentStep - 1],
    });
  }, [currentStep]);

  useEffect(() => {
    if (components.length) {
      setStepsIsMounted(
        components.map((_, i) => (currentStep - 1 >= i ? true : stepsIsMounted[i])),
      );
    }
  }, [components, currentStep]);

  const handleOnClickNext = () => {
    if (currentStep < components.length) {
      const cpArr = [...stepsCompleted];
      cpArr[currentStep - 1] = true;
      setStepsCompleted(cpArr);
      setCurrentStep(currentStep + 1);
    }
    state.onNext();
  };

  const handleOnClickSave = () => {
    state.onSave();
  };

  const handleOnClickBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
    state.onBack();
  };

  return (
    <div className="tabs-step-group">
      <div className="tabs-step-content">
        <div className="tabs-step-body">
          <div className="tabs-step-left-bar">
            <div className="tab-step-navigations">
              {navigations.map((el) => (
                <div
                  key={el.index}
                  className={`tab-step__navigation ${
                    currentStep - 1 === el.index ? "active" : "inactive"
                  }`}
                >
                  {el.tab}
                </div>
              ))}
            </div>
            <div className="tabs__controls-wrapper">
              {currentStep === components.length ? (
                <TabControl
                  onClick={handleOnClickSave}
                  className="tabs__control"
                  text="Сохранить"
                  disabled={state.disableSave}
                  color="solidBlue"
                />
              ) : (
                <TabControl
                  onClick={handleOnClickNext}
                  className="tabs__control"
                  text="Далее"
                  disabled={state.disableNext}
                  color="solidBlue"
                />
              )}
              <TabControl
                onClick={handleOnClickBack}
                className="tabs__control"
                text="Назад"
                disabled={currentStep === 1}
                color="black"
              />
            </div>
          </div>
          <div className="tab-step-content" ref={scrollingBlockRef}>
            <TabsContext.Provider
              value={{
                stepsIsMounted,
                step: currentStep,
              }}
            >
              {components}
            </TabsContext.Provider>
            <div className="tab-step-content__placeholder" style={{ minHeight: 150 }} />
          </div>
        </div>
      </div>
    </div>
  );
};

TabsStepGroup.propTypes = {
  render: PropTypes.func.isRequired,
};
