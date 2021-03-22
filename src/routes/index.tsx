import React, { useMemo } from "react";
import { Switch, BrowserRouter } from "react-router-dom";
import { routesArray } from "./components";
import { Route } from "./OverfocusRoute";

export const Routes = () => {
  const routes = useMemo<JSX.Element[]>(() => {
    return routesArray.map(([props], index) => (
      <Route key={`route-${index}`} {...props} />
    ));
  }, []);

  return (
    <div id="main">
      <BrowserRouter>
        <Switch>{routes}</Switch>
      </BrowserRouter>
    </div>
  );
};
