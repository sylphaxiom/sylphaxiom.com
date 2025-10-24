// import * as React from 'react'
import ConstructionIcon from "@mui/icons-material/Construction";
import { Card, CardContent, CardHeader, Divider, Grid } from "@mui/material";

export default function Web() {
  return (
    <Grid container spacing={1} id="web_content">
      <Grid size={4}>
        <Card>
          <CardHeader
            title="Functional"
            subheader="Websites built for a purpose"
          />
          <Divider variant="middle" />
          <CardContent>
            Let's face it, everyone who wants a website has a stated purpose for
            that site. So why not cater your site to meet your needs? There are
            a million sites that will give you a "free" website or have some AI
            tool that will make a site for you, but those always feel lacking,
            without purpose. I know people have needs and I'm here to meet those
            needs, in the form of a website or some other asset that will
            enhance your life (and business) in some small way.
          </CardContent>
        </Card>
      </Grid>
      <Grid size={8}></Grid>
    </Grid>
  );
}
