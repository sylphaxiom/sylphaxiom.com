import * as React from "react";
import { Divider, Grid, Typography } from "@mui/material";
import WebDemo from "./WebDemo";

export default function WebProjects() {
  const assets = [
    {
      title: "Skill Tiles",
      url: "http://localhost:5173/demo/tiles",
      content:
        "Sylphaxiom Creative is my personal site, and someday my business site. Presently I have spent my focus more on the Portfolio aspect of this site, but the intention is for it to be a full web application with 2 sides: The Portfolio side and the Creative side. The Creative side of this website would be a point of entry for anyone looking to hire someone for an artistic service which is what Sylphaxiom Creative would do. The Portfolio side will be a place for those creatives to host their own portfolios for anyone looking to hire them for their services.",
      tech: [
        "MUI Components",
        "REST API backend (PHP)",
        "MySQL database",
        "Playwright for testing",
      ],
      features: [
        "Multi-purpose web form which sends email directly and securely",
        "Mobile responsive design",
        "Light/Dark mode switcher",
        "Minor animations, for my own amusement",
      ],
    },
    {
      title: "Interactive Map",
      url: "http://localhost:5173/demo/map",
      content:
        'The Kothis Portal is a web application I built for my TTRPG group and the world we play in. My intention is for this application to be a "one-stop-shop" for everything to do with my campaigns and worldbuilding. I also have friends and partners who have worlds of their own which I would love to see join mine on here. While early in its implementation, I will eventually bring functinality such as creating custom items, classes, or rules, a character creator, scheduling and messaging capabilities, and more that I just haven\'t thought of yet!',
      tech: [
        "MUI Components",
        "REST API backend (PHP)",
        "MySQL database",
        "Playwright for testing",
        "Auth0 authentication",
        "ReactQuery for REST calls",
      ],
      features: [
        "Multi-purpose web form which sends email directly and securely",
        "Mobile responsive design",
        "Light/Dark mode switcher",
        "Minor animations, for my own amusement",
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
