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
    { clamp: false },
  );

  const coverOn = { scale: 1 };
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
        // minWidth: 1,
        mx: "auto",
        my: 0,
        p: 2,
        pt: { lg: "45vh", xs: "10vh" },
        textAlign: "center",
      }}
    >
      <Grid size={{ xs: 6 }} offset={{ xs: 0 }}>
        <Button
          variant="contained"
          id="portfolio"
          value="portfolio"
          size="large"
          color="primary"
          className="coverBtn"
          onClick={(e) => {
            handleTransition(e, "/portfolio");
          }}
        >
          Sylphaxiom's
          <br />
          Portfolio
        </Button>
      </Grid>
      <Grid size={{ xs: 6 }} offset={{ xs: 0 }}>
        <Button
          variant="contained"
          id="contact"
          value="contact"
          size="large"
          color="primary"
          className="coverBtn"
          onClick={(e) => {
            handleTransition(e, "/contact");
          }}
        >
          Sylphaxiom's
          <br />
          Contact
        </Button>
      </Grid>
      <Grid size={{ xs: 12 }} offset={{ xs: 0 }}>
        <motions.AnimatePresence mode="wait">
          <motion.img
            layout
            ref={scopeExit}
            layoutId="logo"
            style={{
              rotateY,
            }}
            initial={coverOn}
            src={"/resources/sylphaxiom_web_512x.svg"}
            className="svg"
            key="logo"
            alt="curious guy in a browser"
            width={350}
            height={350}
          />
        </motions.AnimatePresence>
      </Grid>
      <Grid size={{ xs: 6 }} offset={{ xs: 0 }}>
        <Button
          variant="contained"
          id="construction"
          value="construction"
          size="large"
          color="secondary"
          className="coverBtn"
          onClick={(e) => {
            handleTransition(e, "/construction");
          }}
        >
          Construction
          <br />
          Zone
        </Button>
      </Grid>
      <Grid size={{ xs: 6 }} offset={{ xs: 0 }}>
        <Button
          variant="contained"
          id="ramblings"
          value="ramblings"
          size="large"
          color="secondary"
          className="coverBtn"
          onClick={(e) => {
            handleTransition(e, "/ramblings");
          }}
        >
          A Madman's
          <br />
          Ramblings
        </Button>
      </Grid>
    </Grid>
  );
}
