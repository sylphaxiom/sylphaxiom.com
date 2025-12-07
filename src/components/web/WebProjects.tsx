import * as React from "react";
import { Divider, Grid, Typography } from "@mui/material";
import WebAsset from "./WebAsset";

export default function WebProjects() {
  const assets = [
    {
      title: "Sylphaxiom Creative",
      image: "/resources/sylphaxiom_web_512x.svg",
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
      title: "Kothis Portal",
      image: "/resources/kothis.svg",
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
      id="web_projects"
      sx={{
        maxWidth: { xs: 1, md: 0.8, lg: "1200px" },
        mx: { xs: "auto", xl: 0 },
      }}
    >
      <Grid size={{ xs: 12 }}>
        <Typography sx={{ justifySelf: "center" }} variant="h3" component="h2">
          Web Projects
        </Typography>
      </Grid>
      <Grid size={{ xs: 12, sm: 6 }}>
        <Typography
          variant="body1"
          sx={{ textIndent: "30px", m: 2, textAlign: "justify" }}
        >
          The web is a very big place where you can find anything (admit it or
          not, we all know about Rule 34)! Since you can find anything, you can
          also {<i>MAKE</i>} anything. That's what I do, I will bring your sites
          to life on the web!
        </Typography>
      </Grid>
      <Grid size={{ xs: 12, sm: 6 }}>
        <Typography
          variant="body1"
          sx={{ textIndent: "30px", m: 2, textAlign: "justify" }}
        >
          I'm currently still building up my clientelle and my portfolio, so
          this page might seem a bit sparce. These are a few examples of the web
          work I can do. Websites, components or features will be put here when
          they're ready.
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
            <WebAsset
              title={asset.title}
              image={asset.image}
              content={asset.content}
              tech={asset.tech}
              features={asset.features}
            />
          </React.Fragment>
        );
      })}
    </Grid>
  );
}
