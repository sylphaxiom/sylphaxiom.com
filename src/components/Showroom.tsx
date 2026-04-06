import * as React from "react";
import {
  Container,
  Tab,
  Tabs,
  useMediaQuery,
  type TabsIndicatorSlotPropsOverrides,
} from "@mui/material";
import WebProjects from "./web/WebProjects";
import WebComponents from "./web/WebComponents";

export default function Web() {
  const [value, setValue] = React.useState("Projects");

  let bps = {
    sm: useMediaQuery("(min-width: 600px)"),
    md: useMediaQuery("(min-width: 900px)"),
    lg: useMediaQuery("(min-width: 1200px)"),
    xl: useMediaQuery("(min-width: 1536px)"),
  };
  let sx = {};
  let orientation: "vertical" | "horizontal" = "vertical";
  let indicator: TabsIndicatorSlotPropsOverrides = {
    indicator: { sx: { left: 0 } },
  };

  if (bps.xl) {
    console.log("XL");
    sx = { position: "fixed", right: "6%" };
  } else if (bps.lg) {
    console.log("LG");
    orientation = "horizontal";
    sx = { mb: 2 };
  } else if (bps.md) {
    console.log("MD");
    orientation = "horizontal";
    sx = { mb: 2 };
  } else if (bps.sm) {
    console.log("SM");
    orientation = "horizontal";
    sx = { mb: 2 };
  } else {
    console.log("XS");
    orientation = "horizontal";
    indicator = { indicator: { sx: { bottom: 0 } } };
    sx = { mb: 3 };
  }

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
        orientation={orientation}
        indicatorColor="primary"
        textColor="secondary"
        value={value}
        slotProps={indicator}
        centered
        sx={sx}
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
            sx={{ height: "50px" }}
          />
        ))}
      </Tabs>
      {value === "Projects" ?
        <WebProjects />
      : value === "Components" ?
        <WebComponents />
      : null}
    </Container>
  );
}
