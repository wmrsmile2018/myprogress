import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Navbar } from "@components";
import { AboutPage, TodosPage } from "./pages";

declare var confirm: (question: string) => boolean;

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Switch>
          <Route component={TodosPage} path="/" exact />
          <Route component={AboutPage} path="/about" />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
