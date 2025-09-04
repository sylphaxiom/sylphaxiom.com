import * as React from "react";
import * as motion from "motion/react-client";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Button from "@mui/material/Button";
import { stagger } from "motion";

interface PageProps {
  current: string;
  onChange: (pg: string) => void;
}

function firstUpper(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export default function Navigation({ current, onChange }: PageProps) {
  const pages = ["home", "portfolio", "stuff", "things", "contact"];
  let title: string;
  let currentADJ: string | null = null;
  switch (current) {
    case "portfolio":
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
      !current && (currentADJ = "home"); // set to home if empty
      title = "Sylphaxiom Creative";
  }

  // Titile animation

  const variants = {
    start: { y: -100, Opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

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
          href="home"
          onClick={() => {
            onChange("home");
          }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1, rotate: 1080 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={"./sylphaxiom_web_512x.svg"}
              alt="curious guy in a browser"
              width={100}
              height={100}
            />
          </motion.div>
        </Button>
      </Grid>
      <Grid size={"grow"}>
        <Typography
          id="main_title"
          variant={"h2"}
          component={"h1"}
          noWrap
          color={"primary"}
        >
          <motion.div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              overflow: "visible",
            }}
            transition={{ delayChildren: stagger(0.1) }}
            initial="start"
            animate="animate"
            variants={variants}
          >
            {title.split("").map((char: string, index: number) => {
              if (char === " ") {
                char = "\u00A0";
              }
              return (
                <motion.span
                  key={char + index}
                  variants={variants}
                  transition={{
                    type: "spring",
                    bounce: 0.5,
                  }}
                >
                  {char}
                </motion.span>
              );
            })}
          </motion.div>
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
          value={currentADJ || current}
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
              href={page}
            />
          ))}
        </Tabs>
      </Grid>
    </Grid>
  );
}
