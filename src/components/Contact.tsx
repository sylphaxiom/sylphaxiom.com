// import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { Outlet } from "react-router";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material";

export default function Contact() {
  const theme = useTheme();
  const mediaBP = useMediaQuery(theme.breakpoints.up("xl"));

  return (
    <Grid container sx={{ textAlign: "center" }}>
      <Grid
        size={{ xs: 12, lg: 4 }}
        sx={{ display: mediaBP ? "inline-block" : "none" }}
        offset={1}
      >
        <img
          src="/resources/talas-hey-buddy.svg"
          width={"100%"}
          height={"auto"}
          alt="Curly haired dude standing in the doorway saying hey buddy"
        />
      </Grid>
      <Grid size={{ xs: 12, xl: 4 }} offset={{ xs: 0, xl: 1 }}>
        <Stack>
          <Typography variant="h3" sx={{ width: 0.8, mx: "auto" }}>
            Fill out the form below and we'll get right back to you!
          </Typography>
          <div id="contactFormOutlet">
            <Outlet />
          </div>
        </Stack>
      </Grid>
    </Grid>
  );
}
