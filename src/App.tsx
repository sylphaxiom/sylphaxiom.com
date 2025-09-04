import "./App.css";
import * as React from "react";
import Box from "@mui/material/Box";
import Navigation from "./components/Navigation";
import Container from "@mui/material/Container";
import Home from "./components/Home";
import Stuff from "./components/Stuff";
import Things from "./components/Things";
import Contact from "./components/Contact";
import Cover from "./components/Cover";
import Portfolio from "./components/Portfolio";
import { useCookies } from "react-cookie";

export default function App() {
  const [cookies, setCookie] = useCookies(["covered"]);
  const path = window.location.pathname.slice(1);
  const curPg = path;
  const [page, setPage] = React.useState(curPg);
  if (!cookies.covered) {
    setCookie("covered", "havewemetbefore");
  } else {
    if (cookies.covered === "havewemetbefore") {
      return <Cover setPage={setPage} />;
    }
  }

  let children: React.ReactNode = "";
  switch (page) {
    case "home":
      children = <Home />;
      break;
    case "portfolio":
      children = <Portfolio />;
      break;
    case "stuff":
      children = <Stuff />;
      break;
    case "things":
      children = <Things />;
      break;
    case "contact":
      children = <Contact />;
      break;
    default:
      children = <Home />;
      break;
  }
  return (
    <Box id="everything" sx={{ minWidth: 1, mx: "auto", p: 0 }}>
      <Navigation current={page} />
      <Container maxWidth="md" sx={{ my: 5, minWidth: 1 }}>
        {children}
      </Container>
    </Box>
  );
}
