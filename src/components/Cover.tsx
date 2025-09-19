import * as React from "react";
import * as motion from "motion/react-client";
import * as motions from "motion/react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router";

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
    scale: 0.1,
    transition: {
      duration: 0.8,
    },
  };

  const [scopeExit, animateExit] = motions.useAnimate();
  const navigate = useNavigate();

  const handleTransition = (_e: React.SyntheticEvent, path: string) => {
    const animation = animateExit(scopeExit.current, coverOff);
    animation.then(() => {
      console.log(path);
      navigate(path);
    });
  };

  return (
    <Box
      id="entryway"
      sx={{
        minWidth: 1,
        p: 0,
        textAlign: "center",
      }}
    >
      <Button
        variant="contained"
        id="home"
        value="home"
        sx={{ marginRight: 30 }}
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
          key="logo"
          alt="curious guy in a browser"
          width={100}
          height={100}
        />
      </motions.AnimatePresence>
      <Button
        variant="contained"
        id="portfolio"
        value="portfolio"
        sx={{ marginLeft: 30 }}
        className="coverBtn"
        onClick={(e) => {
          handleTransition(e, "/portfolio");
        }}
      >
        Jacob Pell
        <br />
        Portfolio
      </Button>
    </Box>
  );
}
