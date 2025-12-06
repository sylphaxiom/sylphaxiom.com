// import * as React from 'react'
import {
  Box,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  Typography,
} from "@mui/material";

export default function Web() {
  return (
    <Grid container sx={{ maxWidth: { xs: 1, md: 0.8 }, mx: "auto" }}>
      <Grid size={{ xs: 12 }}>
        <Typography variant="h3" component="h2">
          Web Projects
        </Typography>
      </Grid>
      <Grid size={{ xs: 12, sm: 6 }}>
        <Typography variant="body1" sx={{ textIndent: "30px", my: 2 }}>
          The web is a very big place where you can find anything (admit it or
          not, we all know about Rule 34)! Since you can find anything, you can
          also {<i>MAKE</i>} anything. That's what I do, I will bring your sites
          to life on the web!
        </Typography>
      </Grid>
      <Grid size={{ xs: 12, sm: 6 }}>
        <Typography variant="body1" sx={{ textIndent: "30px", my: 2 }}>
          I'm currently still building up my clientelle and my portfolio, so
          this page might seem a bit sparce. These are a few examples of the web
          work I can do. Websites, components or features will be put here when
          they're ready.
        </Typography>
      </Grid>
      <Divider
        orientation="horizontal"
        variant="middle"
        sx={{ width: 1, mx: "auto", my: 2 }}
      />
      <Grid size={{ xs: 12 }}>
        <Typography
          variant="h4"
          component="h3"
          sx={{ my: 2, textAlign: "center" }}
        >
          Kothis Portal
        </Typography>
        <Box
          component="img"
          src="/resources/kothis.svg"
          alt="Logo of Kothis, a D20 with designs on it."
          className="svg"
          sx={{
            width: "200px",
            height: "200px",
            display: "flex",
            justifySelf: "center",
          }}
        />
        <Typography variant="body1" sx={{ textIndent: "30px", my: 2 }}>
          The Kothis Portal is a web application I built for my TTRPG group and
          the world we play in. My intention is for this application to be a
          "one-stop-shop" for everything to do with my campaigns and
          worldbuilding. I also have friends and partners who have worlds of
          their own which I would love to see join mine on here. While early in
          its implementation, I will eventually bring functinality such as
          creating custom items, classes, or rules, a character creator,
          scheduling and messaging capabilities, and more that I just haven't
          thought of yet!
        </Typography>
        <Grid size={{ xs: 12, sm: 6 }}>
          <Typography variant="h5">Technologies:</Typography>
          <List>
            <ListItem>React/TypeScript</ListItem>
            <ListItem>MUI Components</ListItem>
            <ListItem>REST API backend (PHP)</ListItem>
            <ListItem>MySQL database</ListItem>
            <ListItem>Playwright for testing</ListItem>
          </List>
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <Typography variant="h5">Features:</Typography>
          <List>
            <ListItem>
              Multi-purpose web form which sends email directly and securely
            </ListItem>
            <ListItem>Mobile responsive design</ListItem>
            <ListItem>Light/Dark mode switcher</ListItem>
            <ListItem>Minor animations, for my own amusement</ListItem>
          </List>
        </Grid>
      </Grid>
    </Grid>
  );
}
