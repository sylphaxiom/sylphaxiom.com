import * as React from "react";
import * as motion from "motion/react-client";
import * as motions from "motion/react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router";
import Grid from "@mui/material/Grid";

export default function Cover() {
  const time = motions.useTime();
  const rotateY = motions.useTransform(
    time,
    [0, 4000], // time in milliseconds
    [0, 360], // rotation in degrees
    { clamp: false }
  );

  const coverOn = { scale: 5 };
  const coverOff = {
    rotateZ: 1080,
    rotateY: 0,
    scale: 0,
    transition: {
      duration: 0.8,
      clamp: true,
    },
  };

  const [scopeExit, animateExit] = motions.useAnimate();
  const navigate = useNavigate();

  const handleTransition = (_e: React.SyntheticEvent, path: string) => {
    const animation = animateExit(scopeExit.current, coverOff);
    animation.then(() => {
      navigate(path);
    });
  };

  return (
    <Grid
      id="entryway"
      container
      spacing={2}
      sx={{
        minWidth: 1,
        mx: "auto",
        my: 0,
        p: 0,
        pt: { lg: "45vh", xs: "10vh" },
        textAlign: "center",
      }}
    >
      <Grid size={{ lg: 2, xs: 12 }} offset={{ xl: 1, lg: 1, md: 0 }}>
        <Button
          variant="contained"
          id="home"
          value="home"
          size="large"
          color="primary"
          className="coverBtn"
          onClick={(e) => {
            handleTransition(e, "/creative");
          }}
        >
          Sylphaxiom
          <br />
          Creative
        </Button>
      </Grid>
      <Grid
        size={4}
        offset={{ lg: 1, xs: 4 }}
        sx={{ minHeight: "500px", pt: { lg: 0, xs: "25vh" } }}
      >
        <motions.AnimatePresence mode="wait">
          <motion.img
            layout
            ref={scopeExit}
            layoutId="logo"
            style={{
              rotateY,
            }}
            initial={coverOn}
            src={"/sylphaxiom_web_512x.svg"}
            className="svg"
            key="logo"
            alt="curious guy in a browser"
            width={100}
            height={100}
          />
        </motions.AnimatePresence>
      </Grid>
      <Grid size={{ lg: 2, xs: 12 }} offset={{ xl: 1, lg: 1, md: 0 }}>
        <Button
          variant="contained"
          id="portfolio"
          value="portfolio"
          className="coverBtn"
          onClick={(e) => {
            handleTransition(e, "/portfolio");
          }}
        >
          Creator
          <br />
          Portfolio
        </Button>
      </Grid>
    </Grid>
  );
}
