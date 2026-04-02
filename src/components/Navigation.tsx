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
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import theme from "../theme";
import Slide from "@mui/material/Slide";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import type { Route } from "./+types/Navigation";
import ModeSwitch from "./elements/ModeSwitch";
import Construction from "./elements/Construction";
interface Props {
  children?: React.ReactElement<unknown>;
}

function HideOnScroll(props: Props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    target: window,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children ?? <div />}
    </Slide>
  );
}

export default function Navigation(props: Route.ComponentProps) {
  // const isMobile = useMediaQuery("(max-width: 600px)");
  const [menuRef, setMenuRef] = React.useState<null | HTMLElement>(null);
  const pages = ["portfolio", "showroom", "guestbook", "weirdness"];
  const base = props.matches[2]?.id;
  const [current, setCurrent] = React.useState(base);
  const title = String(base).charAt(0).toUpperCase() + String(base).slice(1);
  console.log("base:", base, "matches:", props.matches);
  const open = Boolean(menuRef);

  // Define the pages for each group
  const disabled: string[] = ["weirdness"]; // any  tabs we want disabled we will put here.

  // Title animation

  React.useEffect(() => {
    setCurrent(base);
  }, [base]);
  // }, [mode]);

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

  return (
    <Box id="everything" sx={{ minWidth: 1, mx: "auto", p: 0, pt: "125px" }}>
      <HideOnScroll>
        <Grid
          container
          id="navHead"
          sx={{
            alignItems: "center",
            textAlign: "center",
            height: 125,
            width: "100%",
            px: { xs: 1, md: 10, lg: 0 },
            position: "fixed",
            top: 0,
            backgroundColor: theme.vars?.palette.background.default,
            zIndex: 1,
          }}
        >
          <Grid size={2} sx={{ float: "left", alignItems: "center" }}>
            <Button
              component={Link}
              to={"/"}
              sx={{
                scale: { xs: 0.5, sm: 0.75, md: 1 },
                px: { xs: 0, lg: 2 },
              }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1, rotate: 1080 }}
                transition={{ duration: 0.8 }}
                // className={group}
              >
                <img
                  src={"/resources/sylphaxiom_web_512x.svg"}
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
                display: { xs: "block", sm: "block" },
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
                  to={page}
                  key={"tab" + index}
                  id={"tab" + index}
                  aria-controls={page}
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
                  to={page}
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
            <ModeSwitch />
          </Grid>
        </Grid>
      </HideOnScroll>
      <Container maxWidth="md" sx={{ my: { xs: 2, xl: 5 }, minWidth: 1 }}>
        {base && disabled.includes(base) ?
          <Construction />
        : <Outlet />}
      </Container>
    </Box>
  );
}
