import "./App.css";
import * as React from "react";
import Box from "@mui/material/Box";
import Navigation from "./components/Navigation";
import Container from "@mui/material/Container";
import Home from "./components/Home";
import Person from "./components/Person";
import Stuff from "./components/Stuff";
import Things from "./components/Things";
import Contact from "./components/Contact";
import Placeholder from "./components/Placeholder";
import Enter from "./components/enter.tsx";

export default function App() {
  const [isCover, setIsCover] = React.useState(true);

  const [page, setPage] = React.useState("home");
  const handleSelect = (pg: string) => {
    setPage(pg);
  };

  function buildEvent() {
    if (isCover) {
      return <Enter setIsCover={setIsCover} isCover={isCover} />;
    } else {
      return null;
    }
  }

  let children: React.ReactNode = "";
  switch (page) {
    case "home":
      children = isCover ? (
        <Enter setIsCover={setIsCover} isCover={isCover} />
      ) : (
        <Placeholder />
      );
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
    <Box id="everything" sx={{ minWidth: 1, mx: "auto", p: 0 }}>
      <Navigation current={page} onChange={handleSelect} />
      <Container maxWidth="md" sx={{ my: 5, minWidth: 1 }}>
        {children}
      </Container>
    </Box>
  );
}
