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
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import theme from "../theme";
import { useColorScheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";

export default function Navigation() {
  const { mode, setMode, systemMode } = useColorScheme();
  const [_color, setColor] = React.useState(
    systemMode?.toString() || mode?.toString()
  );
  if (!mode) {
    return null;
  }
  const [menuRef, setMenuRef] = React.useState<null | HTMLElement>(null);
  const open = Boolean(menuRef);
  // Define the pages for each group
  const creative = ["home", "people", "projects", "contact"];
  const portfolio = ["portfolio", "web", "assets", "writing", "contact"];
  const contact = ["creative", "portfolio", "contact"];
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
    pages = contact;
    group = "contact";
    base = "contact";
  }
  const [current, setCurrent] = React.useState(base);
  const disabled: string[] = ["people", "projects", "web", "assets", "writing"]; // any  tabs we want disabled we will put here.
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
  };

  // Event handlers
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setMenuRef(event.currentTarget);
  };
  const handleClose = () => {
    setMenuRef(null);
  };
  const handleMode = () => {
    mode === "light" ? setMode("dark") : setMode("light");
    setColor(mode.toString());
  };

  return (
    <Box id="everything" sx={{ minWidth: 1, mx: "auto", p: 0, pt: "15vh" }}>
      <Grid
        container
        id="navHead"
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          textAlign: "center",
          height: 125,
          width: "100%",
          px: { xs: 2, md: 10, lg: 0 },
          position: "fixed",
          top: 0,
          backgroundColor: theme.vars?.palette.background.default,
          zIndex: 1,
        }}
      >
        {/* <Grid size={{ xs: 1 }} sx={{ display: { sm: "block", sx: "none" } }}> */}
        {/* <FormGroup>
            <FormLabel component="legend">Mode</FormLabel>
            <FormControlLabel
              value="bottom"
              control={<Switch color="primary" />}
              label="Bottom"
              labelPlacement="bottom"
            />
          </FormGroup> */}
        {/* </Grid> */}
        <Grid
          size={{ xs: 2, lg: 2 }}
          sx={{ float: "left", alignItems: "center" }}
        >
          <IconButton
            aria-label="change mode"
            color="secondary"
            onClick={handleMode}
            sx={{ display: { xs: "none", md: "inline-block" }, px: 0 }}
          >
            {mode === "dark" ?
              <DarkModeOutlinedIcon />
            : <LightModeOutlinedIcon />}
          </IconButton>
          <Button
            component={Link}
            to={"/"}
            sx={{ scale: { xs: 0.5, sm: 0.75, md: 1, px: 0 } }}
          >
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
                className="svg"
                height={100}
              />
            </motion.div>
          </Button>
        </Grid>
        <Grid size={{ xs: 7, lg: 6 }}>
          <Typography
            id="main_title"
            variant={"h2"}
            component={"h1"}
            noWrap
            color={"primary"}
            sx={{
              fontSize: { xs: "2.5rem", lg: "4rem" },
              fontWeight: { xs: 400, lg: 300 },
              display: { xs: "none", sm: "block" },
            }}
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
        <Grid
          size={{ xs: 3, xl: 4 }}
          sx={{ float: "right", display: "flex", alignItems: "center" }}
        >
          <Button
            id="nav_drawer"
            aria-controls={open ? "nav_menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleMenu}
            sx={{
              display: { xs: "block", xl: "none" },
              mr: 2,
            }}
          >
            <MenuIcon fontSize="large" sx={{ transform: "scale(2)" }} />
          </Button>
          <IconButton
            aria-label="change mode"
            color="secondary"
            onClick={handleMode}
            sx={{ display: { md: "none", xs: "inline-block" }, px: 0 }}
          >
            {mode === "dark" ?
              <DarkModeOutlinedIcon />
            : <LightModeOutlinedIcon />}
          </IconButton>
          <Menu
            id="nav_menu"
            anchorEl={menuRef}
            open={open}
            onClose={handleClose}
            role="navigation"
            slotProps={{
              list: {
                "aria-labelledby": "nav_drawer",
              },
            }}
            children={pages.map((page, index) => (
              <MenuItem
                disabled={disabled.includes(page) || false}
                selected={page === base}
                sx={{ textTransform: "uppercase" }}
                component={Link}
                to={
                  page === "home" || page === "portfolio" ? "/" + group
                  : page in creative ?
                    "/"
                  : page
                }
                key={"tab" + index}
                id={"tab" + index}
              >
                {page}
              </MenuItem>
            ))}
          ></Menu>
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
                to={
                  pages === contact || page === "contact" ? "/" + page
                  : page === "home" || page === "portfolio" ?
                    "/" + group
                  : page
                }
                label={page}
                value={page}
                sx={{
                  display: { xs: "none", xl: "flex" },
                }}
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
