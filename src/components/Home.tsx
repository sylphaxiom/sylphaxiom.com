// import * as React from "react";
import * as motion from "motion/react-client";
import { Box, Grid, Typography } from "@mui/material";
import { Link } from "react-router";
import { useTheme } from "@mui/material/styles";
import { stagger } from "motion";
import ModeSwitch from "./elements/ModeSwitch";

export default function Home() {
  const theme = useTheme();

  // Title animation
  const variants = {
    start: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    slide: { x: -100, opacity: 0 },
    stop: { x: 0, opacity: 1 },
    back: { x: 100, opacity: 0 },
    end: { x: 0, opacity: 1 },
    up: { y: 100, opacity: 0 },
    over: { y: 0, opacity: 1 },
  };
  return (
    <Box id="main_home">
      <ModeSwitch />
      <Grid container>
        <Grid size={{ xs: 12, sm: 3 }} sx={{ ml: 2 }}>
          <Link
            to="portfolio"
            style={{
              textDecoration: "none",
              color: theme.palette.primary.main,
            }}
          >
            <Typography variant="h2" component="h1">
              <motion.div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "left",
                  overflow: "visible",
                }}
                key="portfolio_title"
                transition={{ delayChildren: stagger(0.06) }}
                initial="start"
                animate="animate"
                variants={variants}
              >
                {"Portfolio".split("").map((char: string, index: number) => {
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
                        duration: 0.5,
                      }}
                    >
                      {char}
                    </motion.span>
                  );
                })}
              </motion.div>
            </Typography>
            <motion.img
              src="/resources/filligree.svg"
              className="svg-primary"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                type: "spring",
                bounce: 0.5,
                duration: 0.5,
              }}
              style={{ maxHeight: 100 }}
            />
          </Link>
        </Grid>
        <Grid size={6} />
        <Grid
          size={{ xs: 12, sm: 5, md: 4, lg: 3 }}
          offset={{ sm: 2, md: 2, lg: 2 }}
        >
          <Link
            to="showroom"
            style={{
              textDecoration: "none",
              color: theme.palette.secondary.main,
            }}
          >
            <Typography variant="h2" component="h1" sx={{ ml: 3, mt: 2 }}>
              <motion.div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "right",
                  overflow: "visible",
                }}
                key="showroom_title"
                transition={{
                  delayChildren: stagger(0.06, { startDelay: 0.3 }),
                }}
                initial="slide"
                animate="stop"
                variants={variants}
              >
                {"Showroom".split("").map((char: string, index: number) => {
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
                        duration: 0.5,
                      }}
                    >
                      {char}
                    </motion.span>
                  );
                })}
              </motion.div>
            </Typography>
            <motion.img
              src="/resources/filligree.svg"
              className="svg-secondary"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.3,
                type: "spring",
                bounce: 0.5,
                duration: 0.5,
              }}
              style={{
                maxHeight: 100,
                float: "right",
              }}
            />
          </Link>
        </Grid>
        <Grid size={{ xs: 12, sm: 5, lg: 8 }} offset={{ sm: 6, md: 6, lg: 6 }}>
          <Link
            to="guestbook"
            style={{
              textDecoration: "none",
              color: theme.palette.primary.main,
            }}
          >
            <Typography variant="h2" component="h1">
              <motion.div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "left",
                  overflow: "visible",
                }}
                key="guestbook_title"
                transition={{
                  delayChildren: stagger(0.06, { startDelay: 0.6 }),
                }}
                initial="back"
                animate="end"
                variants={variants}
              >
                {"Guestbook".split("").map((char: string, index: number) => {
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
                        duration: 0.5,
                      }}
                    >
                      {char}
                    </motion.span>
                  );
                })}
              </motion.div>
            </Typography>
            <motion.img
              src="/resources/filligree.svg"
              className="svg-primary"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.6,
                type: "spring",
                bounce: 0.5,
                duration: 0.5,
              }}
              style={{ maxHeight: 100 }}
            />
          </Link>
        </Grid>
        <Grid
          size={{ xs: 12, sm: 4, lg: 2 }}
          offset={{ sm: 8, lg: 10 }}
          sx={{ mr: 2 }}
        >
          <Link
            to="weirdness"
            style={{
              textDecoration: "none",
              color: theme.palette.secondary.main,
            }}
          >
            <Typography variant="h2" component="h1" sx={{ ml: 3, mt: 2 }}>
              <motion.div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "right",
                  overflow: "visible",
                }}
                key="weirdness_title"
                transition={{
                  delayChildren: stagger(0.06, { startDelay: 0.9 }),
                }}
                initial="up"
                animate="over"
                variants={variants}
              >
                {"Weirdness".split("").map((char: string, index: number) => {
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
                        duration: 0.5,
                      }}
                    >
                      {char}
                    </motion.span>
                  );
                })}
              </motion.div>
            </Typography>
            <motion.img
              src="/resources/filligree.svg"
              className="svg-secondary"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.9,
                type: "spring",
                bounce: 0.5,
                duration: 0.5,
              }}
              style={{
                maxHeight: 100,
                float: "right",
              }}
            />
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
}
