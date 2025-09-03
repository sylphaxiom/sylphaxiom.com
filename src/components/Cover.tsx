import * as React from "react";
import * as motion from "motion/react-client";
import * as motions from "motion/react";
import Box from "@mui/material/Box";

interface Props {
  setIsCover: (value: React.SetStateAction<boolean>) => void;
  isCover: boolean;
}

export default function Cover({ setIsCover, isCover }: Props) {
  const [control, setControl] = React.useState(isCover);

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
    },
  };

  const [scopeExit, animateExit] = motions.useAnimate();

  React.useEffect(() => {
    if (!control) {
      const animation = animateExit(scopeExit.current, coverOff);
      animation.then(() => {
        setIsCover(false);
      });
    }
  }, [control]);

  const handleTransition = () => {
    setControl(false);
  };

  return (
    <Box id="entryway" sx={{ minWidth: 1, p: 0, display: "flex" }}>
      <motions.AnimatePresence mode="wait">
        <motion.a
          layoutRoot
          key="entryway"
          href="#"
          onClick={handleTransition}
          style={{
            minWidth: "100vw",
            minHeight: "100vh",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
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
        </motion.a>
      </motions.AnimatePresence>
    </Box>
  );
}
