import { Outlet, Scripts, ScrollRestoration } from "react-router";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Loading from "./components/Loading";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/sylphaxiom_web_512x.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          as="font"
          crossOrigin="anonymous"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Ballet:opsz@16..72&family=Black+Ops+One&display=swap"
          rel="stylesheet"
          as="font"
          crossOrigin="anonymous"
        />
        <title>Sylphaxiom Creations</title>
      </head>
      <body>
        <React.Fragment>
          <CssBaseline />
          {children}
          <ScrollRestoration />
        </React.Fragment>
        <Scripts />
      </body>
    </html>
  );
}

export function HydrateFallback() {
  return <Loading />;
}

export default function Root() {
  return <Outlet />;
}
