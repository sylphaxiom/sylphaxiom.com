import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Button from "@mui/material/Button";
import { animated, useSpring } from "@react-spring/web";

interface PageProps {
  current: string;
  onChange: (pg: string) => void;
}

function firstUpper(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export default function Navigation({ current, onChange }: PageProps) {
  const pages = ["home", "person", "stuff", "things", "contact"];
  let title: string;
  switch (current) {
    case "person":
      title = "This is the Guy...";
      break;

    case "stuff":
      title = "Oh look! Nerdy Stuff...";
      break;

    case "things":
      title = "...More Nerdy Things...";
      break;

    case "contact":
      title = "Talk Nerdy To Me!";
      break;

    default:
      title = "Sylphaxiom Creative";
  }

  // Logo slide animation
  const [springs, api] = useSpring(() => ({
    from: { x: 425 },
    to: { x: 0 },
    config: {
      duration: 800,
    },
  }));

  const handleClick = (e: React.SyntheticEvent) => {
    e.preventDefault();
    api.start();
  };
  // End Logo Slide Animation
  return (
    <Grid
      container
      sx={{
        justifyContent: "space-between",
        alignItems: "center",
        height: 150,
        width: "100%",
        position: "fixed",
        top: 0,
      }}
    >
      <Grid size={1} sx={{ float: "left" }}>
        <Button
          href="#"
          onClick={() => {
            api.start;
            onChange("home");
          }}
        >
          <animated.div style={{ ...springs }}>
            <img
              src={"./sylphaxiom_web_512x.svg"}
              alt="curious guy in a browser"
              width={100}
              height={100}
            />
          </animated.div>
        </Button>
      </Grid>
      <Grid size={"grow"}>
        <animated.div>
          <Typography
            id="main_title"
            variant={"h2"}
            component={"h1"}
            noWrap
            color={"primary"}
          >
            {title}
          </Typography>
        </animated.div>
      </Grid>
      <Grid size={3} sx={{ float: "right" }}>
        <Tabs
          aria-label="nav tabs"
          role="navigation"
          id="navTabRoot"
          indicatorColor="secondary"
          onChange={(event: React.SyntheticEvent, nxtPg) => {
            event.preventDefault;
            onChange(nxtPg);
          }}
          value={current}
          centered
        >
          {pages.map((page, index) => (
            <Tab
              LinkComponent={"a"}
              label={firstUpper(page)}
              value={page}
              aria-controls={page}
              key={"tab" + index}
              id={"tab" + index}
              href={"#" + page}
            />
          ))}
        </Tabs>
      </Grid>
    </Grid>
  );
}
