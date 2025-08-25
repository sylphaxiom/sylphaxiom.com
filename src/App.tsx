import "./App.css";
import * as React from "react";
import Box from "@mui/material/Box";
import "./App.css";
import Navigation from "./components/Navigation";
import Container from "@mui/material/Container";
import Home from "./components/Home";
import Person from "./components/Person";
import Stuff from "./components/Stuff";
import Things from "./components/Things";
import Contact from "./components/Contact";
import Placeholder from "./components/Placeholder";

export default function App() {
  const [page, setPage] = React.useState("home");
  const handleSelect = (pg: string) => {
    setPage(pg);
  };
  let children: React.ReactNode = "";
  switch (page) {
    case "home":
      children = <Placeholder />;
      break;
    case "person":
      children = <Person />;
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
    <Box sx={{ minWidth: 1, mx: "auto", padding: 0 }}>
      <Navigation current={page} onChange={handleSelect} />
      <Container maxWidth="xl">{children}</Container>
    </Box>
  );
}
