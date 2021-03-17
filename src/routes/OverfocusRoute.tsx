import React, { Component, FunctionComponent } from "react";
import { Route as ReactRouterRoute, RouteProps } from "react-router-dom";
import ErrorBoundary from "Containers/ErrorBoundary";

export interface OverfocusRouteProps extends RouteProps {
  component: FunctionComponent;
}

export const Route: FunctionComponent<OverfocusRouteProps> = ({
  component: FunctionComponent,
  ...rest
}) => {
  return (
    <ReactRouterRoute
      {...rest}
      render={(props) => {
        return (
          <ErrorBoundary>
            <Component {...props} />
          </ErrorBoundary>
        );
      }}
    />
  );
};
