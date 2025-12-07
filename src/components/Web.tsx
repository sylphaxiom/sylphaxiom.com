import * as React from "react";
import { Container, Tab, Tabs } from "@mui/material";
import WebProjects from "./web/WebProjects";
import WebComponents from "./web/WebComponents";

export default function Web() {
  const [value, setValue] = React.useState("Projects");

  const handleClick = (e: React.SyntheticEvent) => {
    console.log("Node Value: %s\n", e.currentTarget.id);
    setValue(e.currentTarget.id);
  };

  const pages = ["Projects", "Components"];

  return (
    <Container>
      <Tabs
        aria-label="body tabs"
        role="navigation"
        id="bodyTabRoot"
        orientation="vertical"
        indicatorColor="primary"
        textColor="secondary"
        value={value}
        centered
        sx={{ position: "fixed", left: 0 }}
      >
        {pages.map((page) => (
          <Tab
            LinkComponent={"a"}
            label={page}
            value={page}
            onClick={handleClick}
            aria-controls={page}
            key={"tab-" + page}
            id={page}
            sx={{ height: "13.5vh" }}
          />
        ))}
      </Tabs>
      {value === "Projects" ?
        <WebProjects />
      : <WebComponents />}
    </Container>
  );
}
