// import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { Outlet } from "react-router";

export default function Contact() {
  return (
    <Grid container sx={{ textAlign: "center" }}>
      <Grid size={4} offset={1}>
        <img
          src="/talas-hey-buddy.svg"
          width={"100%"}
          height={"auto"}
          alt="Curly haired dude standing in the doorway saying hey buddy"
        />
      </Grid>
      <Grid size={4} offset={1}>
        <Stack>
          <Typography variant="h3">
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
