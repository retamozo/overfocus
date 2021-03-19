import React from "react";
import { CssBaseline } from "@material-ui/core";
import { Routes } from "../routes";
import "./styles.css";
import "./normalize.css";
import BackgroundVideo from "@/containers/BackgroundVideo";

export const App = () => {
  return (
    <>
      {/* <BackgroundVideo /> */}
      <Routes />
    </>
  );
};
