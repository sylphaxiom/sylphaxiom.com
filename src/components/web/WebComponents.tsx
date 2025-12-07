import * as React from "react";
import { Divider, Grid, Typography } from "@mui/material";
import WebDemo from "./WebDemo";

export default function WebProjects() {
  const assets = [
    {
      title: "Skill Tiles",
      url: "http://localhost:5173/demo/tiles",
      content:
        "Originally intended to be a decoration on the portfolio page (it still is), I realized that it could be expanded further. Perhaps you'd like to use a series of icons? or cats? Whatever it is, you can replace the icons easily enough. You can adjust the number of rows which would be your length. Density is how much space there could potentially be between images. Currently there is only 2 patterns in place, random and spiral, but there could be many more. This is based on a simple grid that is 4 units wide, each unit is a 50px square containing eihter a space or an image.",
      features: [
        "Random and Spiral pattern options",
        "Adjustable height using number of rows",
        "Easily replaceable image options",
        "Adjustable density with the Random Pattern",
      ],
    },
    {
      title: "Interactive Map",
      url: "http://localhost:5173/demo/map",
      content:
        "This map was created for the Kothis Portal application as a fun way to navigate the world pages. The construction took some SVG work, which I mostly did in Inkscape, and then polished off in my code editor. The composition is simply an image which is the background for an series of SVG shapes. These shape can be drawn in any way you'd like and can each have links or be used like any other button. Perfect for mapping sections of an image. If you don't want the lines to show, you can always keep the links and set the underlying shape as hidden.",
      features: [
        "Color coded regions",
        "Active links",
        "Tooltips",
        "Useful concept with many applications",
      ],
    },
  ];
  return (
    <Grid
      container
      id="web_components"
      sx={{
        maxWidth: { xs: 1, md: 0.8, lg: "1200px" },
        mx: { xs: "auto", xl: 0 },
      }}
    >
      <Grid size={{ xs: 12 }}>
        <Typography
          sx={{ justifySelf: "center", ml: 2 }}
          variant="h3"
          component="h2"
        >
          Web Components
        </Typography>
      </Grid>
      <Grid size={{ xs: 12, sm: 6 }}>
        <Typography
          variant="body1"
          sx={{ textIndent: { xs: 0, xl: "30px" }, m: 2, textAlign: "justify" }}
        >
          As I've been working on my projects and websites, I've discovered that
          there is a lot of modularity involved (after all, that is the react
          way isn't it?). Every once in ahwile I find that pattern in my code
          and extract the component to be something all its own. Here are a
          couple examples of some custom components that I thought were pretty
          cool.
        </Typography>
      </Grid>
      <Grid size={{ xs: 12, sm: 6 }}>
        <Typography
          variant="body1"
          sx={{ textIndent: { xs: 0, xl: "30px" }, m: 2, textAlign: "justify" }}
        >
          They aren't necessarily complex and they likely need some refactoring
          and optimizing, but I improve things as I see flaws and opportunities.
          Mostly, these are just fun little tid-bits that I thought were worth
          including in my portfolio. I could proabably do a lot more than this,
          but this is what my head has come up with so far!
        </Typography>
      </Grid>
      {assets.map((asset) => {
        return (
          <React.Fragment key={asset.title}>
            <Divider
              orientation="horizontal"
              variant="middle"
              sx={{ width: 1, mx: "auto", my: 2 }}
            />
            <WebDemo
              title={asset.title}
              url={asset.url}
              content={asset.content}
              features={asset.features}
            />
          </React.Fragment>
        );
      })}
    </Grid>
  );
}
