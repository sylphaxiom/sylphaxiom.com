import * as React from "react";
import ReactDom from "react-dom/client";
import { HydratedRouter } from "react-router-dom";
import "./App.css";

ReactDom.hydrateRoot(
  document,
  <React.StrictMode>
    <HydratedRouter />
  </React.StrictMode>
);
