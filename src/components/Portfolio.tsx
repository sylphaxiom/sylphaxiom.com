// import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";

export default function Portfolio() {
  return (
    <Box sx={{ width: 1 }}>
      <Grid container width={1}>
        <Grid direction={"column"} size={3}>
          <Paper
            elevation={8}
            sx={{
              width: 350,
              height: 350,
              borderRadius: "100%",
              paddingTop: "25px",
              backgroundColor: "teal",
              mx: "auto",
            }}
          >
            <img
              src="./9-2025_headshot_1x1.png"
              alt="Dapper photo of Jacob Pell with his magnificent beard"
              width={300}
              height={300}
              id="portfolio_img"
            />
          </Paper>
        </Grid>
        <Grid size={9} container sx={{ alignContent: "space-evenly" }}>
          <Typography variant="h2" sx={{ justifySelf: "left" }}>
            Jacob Pell
          </Typography>
          <Grid direction={"row"} container size={12} sx={{ mt: "20px" }}>
            <svg width="100%" height="30px">
              <polygon width="15px" points="0,5 0,15 600,15 500,5" />
            </svg>
            <Typography variant="h5" sx={{ ml: 0, mr: "20px" }}>
              Automation and Scripting Specialist
            </Typography>
            <Divider flexItem orientation="vertical" sx={{}} />
            <Typography variant="h5" sx={{ mx: "20px" }}>
              Full-Stack Developer
            </Typography>
            <Divider flexItem orientation="vertical" />
            <Typography variant="h5" sx={{ mx: "20px" }}>
              Author/Worldbuilder
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
