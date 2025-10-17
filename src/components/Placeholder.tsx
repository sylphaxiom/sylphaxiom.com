// import * as React from 'react'
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";

export default function Placeholder() {
  // This is a placeholder tile for my tile design idea.
  // const transparanecy = ["33", "24", "1F"];
  // const color = { blue: "#1976d2", purple: "#9c27b0", green: "#5EFF5C" };
  const shadow =
    // "0px 2px 1px -1px #9c27b033, 0px 1px 1px 0px #9c27b024, 0px 1px 3px 0px #9c27b01F";  // elevation 1
    "0px 3px 3px -2px #9c27b033, 0px 3px 4px 0px #9c27b024, 0px 1px 8px 0px #9c27b01F"; // elevation 3

  return (
    <Grid id="nav_content" container spacing={2} height={1}>
      <Grid size={8} sx={{ maxHeight: 350 }}>
        <Card
          raised
          sx={{
            height: 1,
            boxShadow: shadow,
          }}
        >
          <Grid container>
            <Grid size={4}>
              <CardMedia
                component="img"
                height={350}
                width={350}
                alt="quill drawing a map"
                src="./map_draw_350x.svg"
                className="svg"
                sx={{ maxHeight: 350, maxWidth: 350 }}
              />
            </Grid>
            <Grid size={"grow"}>
              <CardHeader
                title="Worldbuilding"
                component="h2"
                sx={{ p: 0, my: 1 }}
              />
              <Divider variant="middle" />
              <CardContent>
                <Typography padding={1}>
                  The Crafting of maps, the sorting of stories, the directing of
                  worlds, this is the essensce of worldbuilding. No matter who
                  starts with an idea, it takes a whole table to really sort out
                  a world. My current world project, Kothis, has been involved
                  in a running campaign since October of 2024 through 2
                  campaigns. I would hope one day to take this world public and
                  publish a campagin guide within this setting.
                </Typography>
                <Typography padding={1}>
                  In the meantime, I am integrating my worldbuilding into my
                  development. I am currently working on a centralized database
                  and web UI for the world of Kothis. There will be public
                  levels of information, but the majority of the data will be
                  behind a registration. The culmination of this project will be
                  a full application to assist myself (and other GM's playing in
                  this world) with many aspects of the game.
                </Typography>
                <Link padding={1} href="home" color="primary" underline="none">
                  To dig in deeper, click me...
                </Link>
              </CardContent>
            </Grid>
          </Grid>
        </Card>
      </Grid>
      <Grid container size={4} sx={{ maxHeight: 350 }}>
        <Grid size={6} sx={{ maxHeight: 167 }}>
          <Card raised sx={{ height: 1, boxShadow: shadow }}>
            <CardMedia
              src="./purple_splash.jpg"
              title="purple color swatch because color is cool"
              component="img"
              sx={{ width: 1, height: 1 }}
            />
          </Card>
        </Grid>
        <Grid size={6} sx={{ maxHeight: 167 }}>
          <Card raised sx={{ height: 1, boxShadow: shadow }}>
            <CardMedia
              src="./Maze.jpg"
              title="map of a dungeon"
              component="img"
              sx={{ width: 1, height: 1 }}
            />
          </Card>
        </Grid>
        <Grid size={6} sx={{ maxHeight: 167 }}>
          <Card raised sx={{ height: 1, boxShadow: shadow }}>
            <CardMedia
              src="./Vitalivus_Liquet.jpg"
              title="a vial of magical liquid"
              component="img"
              sx={{ width: 1, height: 1 }}
            />
          </Card>
        </Grid>
        <Grid size={6} sx={{ maxHeight: 167 }}>
          <Card raised sx={{ height: 1, boxShadow: shadow }}>
            <CardMedia
              src="./blue_purple_splash.jpg"
              title="blue-ish purple color swatch because color is cool"
              component="img"
              sx={{ width: 1, height: 1 }}
            />
          </Card>
        </Grid>
      </Grid>
      <Grid size={4} sx={{ maxHeight: 350 }}>
        <Card raised sx={{ height: 1, boxShadow: shadow }}>
          <Grid container width={1} wrap="nowrap">
            <CardMedia
              component="img"
              alt="stick-figure construction workers building a web page"
              src="./construction.svg"
              className="svg"
              sx={{ height: 350, width: 350, float: "left" }}
            />
            <Divider orientation="vertical" flexItem sx={{ px: 1 }} />
            <Stack>
              <CardHeader
                component="h2"
                title="Asset Creation"
                sx={{ p: 0, my: 1 }}
              />
              <Divider flexItem sx={{ my: 1 }} />
              <Typography sx={{ p: 1 }}>
                Sometimes, you just need something weird. Like a construction
                crew building a web page...
              </Typography>
              <Typography sx={{ p: 1 }}>
                ...So I decided to start making the wierd things in my head when
                I thought I needed them...
              </Typography>
              <Typography sx={{ p: 1 }}>
                ...And{" "}
                <Link
                  href="home"
                  color="secondary"
                  children="here"
                  underline="none"
                />{" "}
                we are!...
              </Typography>
            </Stack>
          </Grid>
        </Card>
      </Grid>
      <Grid size={8}>
        <Card raised sx={{ height: 1, boxShadow: shadow, display: "flex" }}>
          <Grid size={4} wrap="nowrap">
            Talk about some shit
          </Grid>
          <Grid size={4} wrap="nowrap">
            <CardMedia
              src="./headshot.jpg"
              component="img"
              sx={{
                height: 150,
                width: 150,
                p: 1,
                m: 1,
                borderRadius: 100,
                mx: "auto",
              }}
            />
            <Typography>Link a resume</Typography>
          </Grid>
          <Grid size={4} wrap="nowrap">
            Put up a form or some shit, idk man, it's late.
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
}
