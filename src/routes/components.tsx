import React, { useMemo } from "react";
import Loadable from "react-loadable";
import { RouteProps } from "react-router-dom";
import { Route } from "./OverfocusRoute";

const Project = Loadable({
  loader: () => import("@/containers/Project"),
  loading: () => <div>loading</div>,
});

const AboutUs = Loadable({
  loader: () => import("@/containers/AboutUs"),
  loading: () => <div>loading</div>,
});

const Label = Loadable({
  loader: () => import("@/containers/Label"),
  loading: () => <div>loading</div>,
});

const ResidentView = Loadable({
  loader: () => import("@/containers/ResidentView"),
  loading: () => <div>loading</div>,
});

const ArtistsGallery = Loadable({
  loader: () => import("@/containers/ArtistsGallery"),
  loading: () => <div>loading</div>,
});

const Podcasts = Loadable({
  loader: () => import("@/containers/Podcasts"),
  loading: () => <div>loading</div>,
});

export type RouteConfiguration<R extends RouteProps> = [R];

export const routesArray: RouteConfiguration<RouteProps>[] = [
  [{ exact: true, path: "/proyecto", component: Project }],
  [{ exact: true, path: "/nosotros", component: AboutUs }],
  [{ exact: true, path: "/label", component: Label }],
  [{ exact: true, path: "/resident/:residente", component: ResidentView }],
  [{ exact: true, path: "/galeria", component: ArtistsGallery }],
  [{ exact: true, path: "/podcasts", component: Podcasts }],
];
