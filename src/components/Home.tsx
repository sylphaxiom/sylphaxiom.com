// import * as React from 'react'
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

export default function Home() {
  return (
    <Card
      raised
      elevation={5}
      id="home_content"
      sx={{ maxWidth: 550, mx: "auto" }}
    >
      <CardMedia
        component={"img"}
        title="stick-figure construction workers working on a web page"
        src="/resources/construction.svg"
        className="svg"
        sx={{ maxWidth: 500, height: "auto", mx: "auto" }}
      />
    </Card>
  );
}
