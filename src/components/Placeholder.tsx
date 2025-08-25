// import * as React from 'react'
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

export default function Placeholder() {
  // This is a placeholder tile for my tile design idea.
  const transparanecy = ["33", "24", "1F"];
  const color = { blue: "#1976d2", purple: "#9c27b0", green: "#5EFF5C" };
  const shadow =
    // "0px 2px 1px -1px #9c27b033, 0px 1px 1px 0px #9c27b024, 0px 1px 3px 0px #9c27b01F";  // elevation 1
    "0px 3px 3px -2px #9c27b033, 0px 3px 4px 0px #9c27b024, 0px 1px 8px 0px #9c27b01F"; // elevation 3

  return (
    <Grid container spacing={2} height={750}>
      <Grid size={8}>
        <Card raised elevation={1} sx={{ height: "100%", boxShadow: shadow }}>
          Card 1
        </Card>
      </Grid>
      <Grid size={4}>
        <Card raised elevation={3} sx={{ height: "100%", boxShadow: shadow }}>
          Card 2
        </Card>
      </Grid>
      <Grid size={4}>
        <Card raised elevation={1} sx={{ height: "100%", boxShadow: shadow }}>
          Card 3
        </Card>
      </Grid>
      <Grid size={8}>
        <Card raised elevation={1} sx={{ height: "100%", boxShadow: shadow }}>
          Card 4
        </Card>
      </Grid>
    </Grid>
  );
}
