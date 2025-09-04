// import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

export default function Portfolio() {
  return (
    <Box>
      <Paper
        elevation={8}
        sx={{
          width: 350,
          height: 350,
          borderRadius: "100%",
          textAlign: "center",
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
    </Box>
  );
}
