import React from "react";
import { CssBaseline } from "@material-ui/core";
import { Routes } from "../routes";
import "./styles.css";
import "./normalize.css";

export const App = () => {
  return (
    <>
      <CssBaseline />
      <Routes />
    </>
  );
};
