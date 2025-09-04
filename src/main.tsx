import * as React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import CssBaseline from "@mui/material/CssBaseline";
import { CookiesProvider } from "react-cookie";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <React.Fragment>
      <CssBaseline />
      <CookiesProvider
        defaultSetOptions={{
          path: "/",
          maxAge: Date.now() + 60 * 60 * 3,
          domain: "localhost", //set for development purposes only
        }}
      >
        <App />
      </CookiesProvider>
    </React.Fragment>
  </React.StrictMode>
);
