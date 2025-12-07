import * as React from "react";
import { Button, Grid, List, ListItem, Typography } from "@mui/material";
interface WebProps {
  title: string;
  url: string;
  content: string;
  features: string[];
}

export default function WebAsset({ title, url, content, features }: WebProps) {
  const frameRef = React.useRef<HTMLIFrameElement>(null);
  const handleRefresh = () => {
    frameRef.current!.src = url;
  };
  return (
    <React.Fragment>
      <Grid container size={{ xs: 6 }} sx={{ justifyContent: "center" }}>
        <Grid size={12}>
          <Typography
            variant="h4"
            component="h3"
            sx={{ my: 2, textAlign: "center" }}
          >
            {title}
          </Typography>
        </Grid>
        <Typography variant="body1" sx={{ textIndent: "30px", my: 2 }}>
          {content}
        </Typography>
        <Grid size={{ xs: 12, sm: 6 }}>
          <Typography variant="h5" sx={{ mt: 2 }}>
            Features:
          </Typography>
          <List dense>
            {features.map((feature) => {
              return <ListItem key={feature}>{feature}</ListItem>;
            })}
          </List>
        </Grid>
      </Grid>
      <Grid size={6}>
        <iframe src={url} ref={frameRef} width="100%" height="93%" />
        <Button
          title="Reset"
          onClick={handleRefresh}
          variant="contained"
          sx={{ width: 1 }}
        >
          Reset Demo
        </Button>
      </Grid>
    </React.Fragment>
  );
}
