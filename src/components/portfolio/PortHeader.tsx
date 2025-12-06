import * as React from "react";
import * as FileSaver from "file-saver";
import GitHubIcon from "@mui/icons-material/GitHub";
import CVIcon from "./CVIcon";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function PortHeader() {
  const downloadCV = () => {
    FileSaver.saveAs(
      "/resources/jacob_pell_resume.pdf",
      "jacob_pell_resume.pdf"
    );
  };

  const deskSx = {
    height: 0.1,
    mx: 2,
    width: "5px",
    display: { xs: "none", xl: "inline-block" },
  };
  const mobSx = {
    width: 0.8,
    my: 1,
    mx: "auto",
    display: "inline-block",
  };

  let bps = {
    sm: useMediaQuery("(min-width: 600px)"),
    md: useMediaQuery("(min-width: 900px)"),
    lg: useMediaQuery("(min-width: 1200px)"),
    xl: useMediaQuery("(min-width: 1536px)"),
  };

  React.useEffect(() => {
    console.log("I just want to trigger the divider changes.");
  }, [bps.lg]);

  return (
    <Grid container id="port_head_cont">
      <Grid size={{ xl: 3, lg: 4, xs: 12 }} id="port_img_cont">
        <Paper
          elevation={8}
          id="portfolio_img_bg"
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
            src="/resources/9-2025_headshot_1x1.png"
            alt="Dapper photo of Jacob Pell with his magnificent beard"
            width={300}
            height={300}
            style={{
              borderRadius: "100%",
              marginLeft: "auto",
              marginRight: "auto",
            }}
            id="port_img"
          />
        </Paper>
      </Grid>
      <Grid
        size={{ xs: 12, lg: 8 }}
        id="port_info_cont"
        container
        sx={{ alignContent: "center", textAlign: "center" }}
      >
        <Grid
          size={{ xs: 12, md: 9 }}
          id="port_name_links"
          container
          sx={{ justifyContent: "start", alignItems: "flex-end" }}
        >
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              variant="h2"
              id="port_name"
              sx={{
                justifySelf: { md: "center", xl: "left" },
                mt: 5,
              }}
            >
              Jacob Pell
            </Typography>
          </Grid>
          <Grid size={{ xs: 4, md: 1 }}>
            <Tooltip title="github.com/sylphaxiom">
              <IconButton
                href="https://github.com/sylphaxiom"
                aria-label="github.com/sylphaxiom"
                id="ghLink"
                sx={{ mx: 2, width: 75, height: 75 }}
                className="svg"
              >
                <GitHubIcon sx={{ width: 50, height: 50, color: "black" }} />
              </IconButton>
            </Tooltip>
          </Grid>
          <Grid size={{ xs: 4, md: 1 }}>
            <Tooltip title="Download PDF Resume">
              <IconButton
                onClick={downloadCV}
                aria-label="download_resume"
                id="resLink"
                sx={{ mx: 2, width: 75, height: 75 }}
                className="svg"
              >
                <CVIcon sx={{ width: 50, height: 50 }} />
              </IconButton>
            </Tooltip>
          </Grid>
          <Grid size={{ xs: 4, md: 1 }}>
            <Tooltip title="linkedin.com/in/sylphaxiom">
              <IconButton
                href="https://www.linkedin.com/in/sylphaxiom/"
                aria-label="linkedin.com/in/sylphaxiom"
                id="liLink"
                sx={{ mx: 2, width: 75, height: 75 }}
              >
                <img
                  width={50}
                  height={50}
                  src="/resources/LI-In-Bug.png"
                  alt="LinkedIn logo linking to linkedin.com/in/sylphaxiom/"
                />
              </IconButton>
            </Tooltip>
          </Grid>
        </Grid>
        <Grid
          size={12}
          className="svg"
          sx={{
            mt: "20px",
            scale: { md: 1.5, lg: 1.5, xl: 1 },
            ml: { xs: 0, md: "25%", xl: 0 },
            zIndex: 0,
          }}
        >
          <svg width="100%" height="30px">
            <polygon width="15px" points="0,5 0,15 600,15 500,5" />
          </svg>
        </Grid>
        <Grid size={{ xs: 12, xl: "auto" }}>
          <Typography variant="h5">Full-Stack Developer</Typography>
        </Grid>
        <Divider
          flexItem
          orientation={bps.lg ? "vertical" : "horizontal"}
          sx={bps.lg ? deskSx : mobSx}
        />
        <Grid size={{ xs: 12, xl: "auto" }}>
          <Typography variant="h5">Automation/Scripting Specialist</Typography>
        </Grid>
        <Divider
          flexItem
          orientation={bps.lg ? "vertical" : "horizontal"}
          sx={bps.lg ? deskSx : mobSx}
        />
        <Grid size={{ xs: 12, xl: "auto" }}>
          <Typography variant="h5">Author/Worldbuilder</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
