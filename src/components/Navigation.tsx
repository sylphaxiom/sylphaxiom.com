import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Button from "@mui/material/Button";

interface Props {
  current: string;
  onChange: (pg: string) => void;
}

function firstUpper(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export default function Navigation({ current, onChange }: Props) {
  const pages = ["person", "stuff", "things", "contact"];
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

  if (!pages.includes(current)) {
    current = "person";
  }

  return (
    <Grid
      container
      sx={{
        justifyContent: "space-between",
        alignItems: "center",
        height: 150,
        position: "fixed",
        width: "100%",
        top: 0,
      }}
    >
      <Grid size={1} sx={{ float: "left" }}>
        <Button
          href="#"
          onClick={() => {
            onChange("home");
          }}
        >
          <img
            src={"/sylphaxiom_web.svg"}
            alt="curious guy in a browser"
            width={100}
            height={100}
          />
        </Button>
      </Grid>
      <Grid size={"grow"}>
        <Typography variant={"h2"} component={"h1"} noWrap color={"primary"}>
          {title}
        </Typography>
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
              sx={{}}
            />
          ))}
        </Tabs>
      </Grid>
    </Grid>
  );
}
