import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Button from "@mui/material/Button";
import { animate, createScope, stagger, text } from "animejs";

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

  // const { chars } = title.split('h1', { words: false, chars: true });
  const ref: React.RefObject<HTMLHeadingElement | null> = React.useRef(null);

  React.useEffect(() => {
    if (ref) {
      createScope({ root: ref }).add(() => {
        const { chars } = text.split("#main_title", {
          words: false,
          chars: true,
          debug: true,
        });
        animate(chars, {
          // Property keyframes
          y: [
            { to: "-2.75rem", ease: "outExpo", duration: 600 },
            { to: 0, ease: "outBounce", duration: 800, delay: 100 },
          ],
          // Property specific parameters
          rotate: {
            from: "-1turn",
            delay: 0,
          },
          delay: stagger(50),
          ease: "inOutCirc",
          loopDelay: 1000,
          loop: true,
        });
      });
    }
  }, []);

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
            onChange("home");
          }}
        >
          <img
            src={"./sylphaxiom_web_512x.svg"}
            alt="curious guy in a browser"
            width={100}
            height={100}
          />
        </Button>
      </Grid>
      <Grid size={"grow"}>
        <Typography
          id="main_title"
          ref={ref}
          variant={"h2"}
          component={"h1"}
          noWrap
          color={"primary"}
        >
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
            />
          ))}
        </Tabs>
      </Grid>
    </Grid>
  );
}
