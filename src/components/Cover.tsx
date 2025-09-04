import * as React from "react";
import * as motion from "motion/react-client";
import * as motions from "motion/react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useCookies } from "react-cookie";

interface Props {
  setPage: (pg: string) => void;
}

export default function Cover({ setPage }: Props) {
  // Cookie data
  const cookieName = "covered";
  const newFriend = "havewemetbefore";
  const cookieValue = "beentheredonethat";

  const [cookies, setCookie] = useCookies([cookieName]);
  const [control, setControl] = React.useState(
    cookies.covered === newFriend ? true : false
  );

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
    scale: 0.5,
    transition: {
      duration: 0.8,
    },
  };

  const [scopeExit, animateExit] = motions.useAnimate();

  React.useEffect(() => {
    if (!control) {
      const animation = animateExit(scopeExit.current, coverOff);
      animation.then(() => {
        setCookie("covered", cookieValue); // This should trigger a re-render and stop any further changes...
      });
    }
  }, [control]);

  const handleTransition = (e: React.SyntheticEvent) => {
    let id = e.currentTarget.getAttribute("id");
    id ? setPage(id) : setPage("Oops");
    setControl(false);
  };

  return (
    <Box
      id="entryway"
      sx={{
        minWidth: 1,
        p: 0,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button
        variant="contained"
        href="#"
        id="home"
        value="home"
        sx={{ marginRight: 30 }}
        size="large"
        color="primary"
        className="coverBtn"
        onClick={handleTransition}
      >
        Sylphaxiom
        <br />
        Creative
      </Button>
      <motions.AnimatePresence mode="wait">
        {/* <motion.div
          layoutRoot
          key="entryway"
          // onClick={handleTransition}
          style={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        > */}
        <motion.img
          layout
          ref={scopeExit}
          layoutId="logo"
          style={{
            rotateY,
          }}
          initial={coverOn}
          src={"./sylphaxiom_web_512x.svg"}
          key="logo"
          alt="curious guy in a browser"
          width={100}
          height={100}
        />
        {/* </motion.div> */}
      </motions.AnimatePresence>
      <Button
        variant="contained"
        href="#"
        id="portfolio"
        value="portfolio"
        sx={{ marginLeft: 30 }}
        className="coverBtn"
        onClick={handleTransition}
      >
        Jacob Pell
        <br />
        Portfolio
      </Button>
    </Box>
  );
}
