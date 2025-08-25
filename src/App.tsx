import "./App.css";
import * as React from "react";
import Box from "@mui/material/Box";
import "./App.css";
import Navigation from "./components/Navigation";
import Container from "@mui/material/Container";

export default function App() {
  const [page, setPage] = React.useState("home");
  const handleSelect = (pg: string) => {
    setPage(pg);
  };

  return (
    <Box sx={{ minWidth: 1, mx: "auto", padding: 0 }}>
      <Navigation current={page} onChange={handleSelect} />
      <Container maxWidth="lg"></Container>
    </Box>
  );
}
