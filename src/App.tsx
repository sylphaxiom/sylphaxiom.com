import "./App.css";
import * as React from "react";
import Box from "@mui/material/Box";
import Navigation from "./components/Navigation";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

export default function App() {
  const [page, setPage] = React.useState("home");
  const handleSelect = (pg: string) => {
    setPage(pg);
  };

  return (
    <Box sx={{ minWidth: 1, mx: "auto", padding: 0 }}>
      <Navigation current={page} onChange={handleSelect} />
      <Card raised elevation={5} sx={{ maxWidth: 550, mx: "auto" }}>
        <CardMedia
          component={"img"}
          title="stick-figure construction workers working on a web page"
          src="/construction.svg"
          sx={{ width: 500, height: 500, mx: "auto" }}
        />
      </Card>
    </Box>
  );
}
