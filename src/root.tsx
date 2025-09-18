import { Outlet, Scripts, ScrollRestoration } from "react-router";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { CookiesProvider } from "react-cookie";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/sylphaxiom_web.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Ballet:opsz@16..72&family=Black+Ops+One&display=swap"
          rel="stylesheet"
        />
        <title>Sylphaxiom Creations</title>
      </head>
      <body>
        <React.Fragment>
          <CssBaseline />
          <CookiesProvider
            defaultSetOptions={{
              path: "/",
              maxAge: Date.now() + 60 * 60 * 3,
              domain: "localhost", //set for development purposes only
              // domain: "sylphaxiom.com",
            }}
          >
            {children}
            <ScrollRestoration />
          </CookiesProvider>
        </React.Fragment>
        <Scripts />
      </body>
    </html>
  );
}

export default function Root() {
  return <Outlet />;
}
