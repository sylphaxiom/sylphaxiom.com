import * as React from "react";
import * as motion from "motion/react-client";
import * as motions from "motion/react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { stagger } from "motion";
import { Link, Outlet } from "react-router";
import { useMatch } from "react-router";

export default function Navigation() {
  const creative = ["home", "people", "projects", "contact"];
  const portfolio = ["portfolio", "web", "assets", "writing", "contact"];
  const matchCreative = useMatch("/creative/*");
  const matchPortfolio = useMatch("/portfolio/*");
  let pages: string[];
  let base: string;
  let group: string;
  if (matchCreative) {
    pages = creative;
    group = "creative";
    base = matchCreative.pathname.split("/")[2] || "home";
  } else if (matchPortfolio) {
    pages = portfolio;
    group = "portfolio";
    base = matchPortfolio.pathname.split("/")[2] || "portfolio";
  } else {
    base = "";
    throw new Error("No match for current route");
  }
  const [current, setCurrent] = React.useState(base);
  const disabled: string[] = [];
  //   "people",
  //   "projects",
  //   "createCont",
  //   "web",
  //   "assets",
  //   "writing",
  //   "portCont",
  // ]; // any  tabs we want disabled we will put here.
  let title: string;
  switch (base) {
    case "home":
      title = "Sylphaxiom Creative";
      break;

    case "people":
      title = "Our Creative Team";
      break;

    case "projects":
      title = "Our Projects";
      break;

    case "contact":
      title = "Let's Create!";
      break;

    case "portfolio":
      title = "Creator Portfolio";
      break;

    case "web":
      title = "Web Development";
      break;

    case "assets":
      title = "Digital Art and Assets";
      break;

    case "writing":
      title = "Writing and Storytelling";
      break;

    default:
      !base && base === "/";
      title = "Sylphaxiom Creative";
  }

  // Title animation

  React.useEffect(() => {
    setCurrent(base);
  }, [base]);

  const variants = {
    start: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    // exit: { y: 20, opacity: 0 },
  };

  console.log("base is", base, "pages is", pages, "group is", group);

  return (
    <Box id="everything" sx={{ minWidth: 1, mx: "auto", p: 0 }}>
      <Grid
        container
        id="navHead"
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          height: 125,
          width: "100%",
          position: "fixed",
          top: 0,
          backgroundColor: "white",
        }}
      >
        <Grid size={1} sx={{ float: "left" }}>
          <Button component={Link} to={"/"}>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1, rotate: 1080 }}
              transition={{ duration: 0.8 }}
              className={group}
            >
              <img
                src={"/sylphaxiom_web_512x.svg"}
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
            <motions.AnimatePresence mode="wait">
              <motion.div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  overflow: "visible",
                }}
                key={current}
                transition={{ delayChildren: stagger(0.03) }}
                initial="start"
                animate="animate"
                // exit="exit"
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
                        duration: 0.5,
                      }}
                    >
                      {char}
                    </motion.span>
                  );
                })}
              </motion.div>
            </motions.AnimatePresence>
          </Typography>
        </Grid>
        <Grid size={3} sx={{ float: "right" }}>
          <Tabs
            aria-label="nav tabs"
            role="navigation"
            id="navTabRoot"
            indicatorColor="secondary"
            value={base}
            centered
          >
            {pages.map((page, index) => (
              <Tab
                component={Link}
                to={page === "home" ? "/creative" : page}
                label={page}
                value={page}
                disabled={disabled.includes(page) || false}
                aria-controls={page}
                key={"tab" + index}
                id={"tab" + index}
              />
            ))}
          </Tabs>
        </Grid>
      </Grid>
      <Container maxWidth="md" sx={{ my: 5, minWidth: 1 }}>
        <Outlet />
      </Container>
    </Box>
  );
}
