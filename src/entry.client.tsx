import * as React from "react";
import ReactDom from "react-dom/client";
import { HydratedRouter } from "react-router-dom";

ReactDom.hydrateRoot(
  document,
  <React.StrictMode>
    <HydratedRouter />
  </React.StrictMode>
);
