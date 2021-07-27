import React from "react";

import { useTabs } from "../TabsContext";

// import "./TabStep.scss";

export const TabStep = ({ children, index }) => {
  const { stepsIsMounted, step } = useTabs();
  return (
    <div className={`step-content-${index + 1}`}>
      {stepsIsMounted[index] && (
        <div className={`step-content ${step - 1 === index ? "visible" : "hidden"}`}>
          {children}
        </div>
      )}
    </div>
  );
};

// 1) если предыдущие шаги были успешно выполнены, можно переключаться по ним через ЛКМ
// 2) шаги, которые не были выполнены, по ним нельзя нажимать, и они окрашены в сервый цвет
