import * as motion from "motion/react-client";
import Grid from "@mui/material/Grid";
import { Link } from "react-router";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { stagger } from "motion";

export default function HomeLink(
  name: string,
  entrance: "drop" | "right" | "left" | "jump",
) {
  const theme = useTheme();
  let variants;
  let size;
  let offset;
  let pad;
  const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);

  switch (entrance) {
    case "drop":
      pad = { pl: 3, pt: 2 };
      size = { xs: 12, sm: 3 };
      offset = {};
      variants = {
        start: { y: -100, opacity: 0 },
        animate: { y: 0, opacity: 1 },
      };
      break;
    case "right":
      pad = { pr: 3, pt: 2 };
      offset = { sm: 2, md: 2, lg: 2 };
      size = { xs: 12, sm: 5, md: 4, lg: 3 };
      variants = {
        start: { x: -100, opacity: 0 },
        animate: { x: 0, opacity: 1 },
      };
      break;
    case "left":
      pad = { pl: 3, pt: 2 };
      offset = { sm: 4, md: 5, lg: 6 };
      size = { xs: 12, sm: 5, lg: 8 };
      variants = {
        start: { x: 100, opacity: 0 },
        animate: { x: 0, opacity: 1 },
      };
      break;
    case "jump":
      pad = { pr: 3, pt: 2 };
      offset = { sm: 8, lg: 10 };
      size = { xs: 12, sm: 4, lg: 2 };
      variants = {
        start: { y: 100, opacity: 0 },
        animate: { y: 0, opacity: 1 },
      };
      break;
  }
  return (
    <Grid size={size} offset={offset}>
      <Grid size={{ xs: 12 }} sx={pad}>
        <Link
          to={name}
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
              key={name + "_title"}
              transition={{ delayChildren: stagger(0.06) }}
              initial="start"
              animate="animate"
              variants={variants}
            >
              {capitalizedName.split("").map((char: string, index: number) => {
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
        </Link>
      </Grid>
      <Grid size={{ xs: 12 }} sx={{ pl: 3 }}>
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
      </Grid>
    </Grid>
  );
}
