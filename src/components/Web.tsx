// import * as React from 'react'
import { Box, Container, Divider, Grid, Typography } from "@mui/material";

export default function Web() {
  return (
    <Container>
      <Grid size={{ xs: 12 }}>
        <Typography variant="h3" component="h2">
          Web Projects
        </Typography>
      </Grid>
      <Grid size={{ xs: 12 }}>
        <Typography variant="body1" sx={{ textIndent: "30px", my: 2 }}>
          The web is a very big place where you can find anything (admit it or
          not, we all know about Rule 34)! Since you can find anything, you can
          also {<i>MAKE</i>} anything. That's what I do, I will bring your sites
          to life on the web!
        </Typography>
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
          Placeholder text
        </Typography>
      </Grid>
    </Container>
  );
}
