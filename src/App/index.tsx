import React from "react";
import { CssBaseline } from "@material-ui/core";
import { Routes } from "../routes";
import "./styles.css";
import "./normalize.css";
import BackgroundVideo from "@/containers/BackgroundVideo";
import { Header } from "@/containers/Header";

export const App = () => {
  return (
    <>
      {/* <BackgroundVideo /> */}
      <Header />
      <Routes />
    </>
  );
};
