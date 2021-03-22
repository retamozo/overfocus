import React, { Component, ComponentType, FunctionComponent } from "react";
import { Route as ReactRouterRoute, RouteProps } from "react-router-dom";
import ErrorBoundary from "@/containers/ErrorBoundary";


export const Route: FunctionComponent<Readonly<RouteProps>> = ({
  component,
  ...rest
}) => {

  console.log("rest", rest)
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
