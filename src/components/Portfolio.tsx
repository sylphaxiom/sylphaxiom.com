import * as React from "react";
import * as motion from "motion/react-client";
import * as motions from "motion/react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import theme from "../theme";
import PortHeader from "./portfolio/PortHeader";
import PortAbout from "./portfolio/PortAbout";
import PortSkills from "./portfolio/PortSkills";

export default function Portfolio() {
  const { scrollYProgress } = motions.useScroll();
  const springScrollYProgress = motions.useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 25,
    restDelta: 0.001,
  });
  const dudeRef = React.useRef(null); // holds the dude

  const vh = window.innerHeight;
  let point = vh; // Y @ top of dude rel: bottom
  let point2 = point - 135; // Y @ bottom of Dude rel: bottom

  const scrollClimber = motions.useTransform(
    springScrollYProgress,
    [0, 1],
    [point2, 10],
  );
  const topClimber = motions.useTransform(
    springScrollYProgress,
    [0, 1],
    [point, 145],
  );
  const bottomClimber = motions.useTransform(
    springScrollYProgress,
    [0, 1],
    [vh - point2, 419],
  );

  return (
    <Box
      sx={{
        textAlign: "center",
        mx: "auto",
        maxWidth: { xs: "100%", sm: "80%" },
      }}
      id="port_frame"
    >
      <motions.AnimatePresence mode="wait">
        <Box
          id="climber"
          style={{
            position: "fixed",
            left: 0,
            bottom: 0,
            top: 0,
            width: "60px",
          }}
          sx={{ display: { xs: "none", sm: "block" } }}
          // sx={{ display: "block" }}
        >
          <motion.div
            id="rope-1"
            style={{
              position: "fixed", //const
              top: 0, //const
              left: 34, //const
              bottom: topClimber, //135px from the top
              width: 2, //const
              originY: 0, //const
              backgroundColor: theme.vars?.palette.text.primary, //const
            }}
          />
          <motion.img
            className="climberBg svg"
            id="scrollDude"
            key="scrollDude"
            alt="Just a dude rapelling down the DOM"
            style={{
              width: 60,
              height: 135,
              position: "fixed",
              bottom: scrollClimber,
            }}
            ref={dudeRef}
            src="/resources/climber.svg"
          />
          <motion.div
            id="rope-2"
            // ref={ropeRef}
            style={{
              scaleY: 1, //scrollYProgress,
              position: "fixed",
              top: bottomClimber,
              left: 34, //const
              bottom: 10, //const
              width: 2, //const
              originY: point2, //const
              backgroundColor: theme.vars?.palette.text.primary, //const
            }}
          />
          <motion.img
            className="climberBg svg"
            id="ropeBottom"
            key="ropeBottom"
            alt="some squiggles that look like a dangling rope"
            style={{
              position: "fixed",
              left: 0,
              bottom: 0,
              width: 60,
              height: 10,
            }}
            src="/resources/rope-base.svg"
          />
        </Box>
      </motions.AnimatePresence>
      <PortHeader />
      <Divider sx={{ my: 5 }} />
      <PortAbout />
      <Divider sx={{ my: 3 }} />
      <PortSkills />
    </Box>
  );
}
