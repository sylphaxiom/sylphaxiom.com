import { SkillTiles } from "./SkillTiles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

export default function PortSkills() {
  const theme = useTheme();
  return (
    <Grid container>
      <Grid size={{ xs: 12, xl: 3 }} id="skills_left_cont">
        <Typography className="primary" variant="h4" marginTop={5}>
          Projects and More...
        </Typography>
        <Grid
          container
          sx={{
            padding: 3,
            marginTop: 3,
            display: { xs: "none", xl: "flex" },
          }}
          rowSpacing={3}
          id="logoTiles"
          columns={4}
        >
          {SkillTiles(
            [
              "bash",
              "bootstrap",
              "css",
              "github",
              "html5",
              "js",
              "linux",
              "mui",
              "mysql",
              "php",
              "playwright",
              "powershell",
              "python",
              "react",
              "salesforce",
              "typescript",
              "windows",
            ],
            20,
            "spiral",
            5,
          )}
        </Grid>
      </Grid>
      <Grid
        size={{ xs: 12, md: 8 }}
        sx={{ textAlign: "left", marginTop: 1, mx: "auto" }}
        id="skills_right_cont"
      >
        <Grid
          container
          sx={{ padding: 3 }}
          rowSpacing={3}
          id="infoTiles"
          columns={6}
        >
          <Grid size={6}>
            <Grid
              sx={{
                maxWidth: 750,
                textAlign: "center",
                mx: "auto",
              }}
            >
              <Typography className="secondary" variant="h5" sx={{ pt: 1 }}>
                Sylphaxiom Creative
              </Typography>
              <Box
                component="img"
                src="/resources/sylphaxiom_web_512x.svg"
                alt="curious guy in a browser"
                className="svg"
                sx={{
                  width: "100px",
                  height: "100px",
                  marginRight: 8,
                  mx: "auto",
                }}
              />
              <Typography sx={{ py: 2 }}>
                This site is what you're looking at here. Started as a place to
                build my brand and business from. Now it is in the process of
                becoming my portfolio, showcase, and testing environment. I
                fully expect this site to change several more times!
              </Typography>
            </Grid>
          </Grid>
          <Grid size={6}>
            <Grid
              sx={{
                maxWidth: 750,
                textAlign: "center",
                mx: "auto",
              }}
            >
              <Typography className="secondary" variant="h5" sx={{ pt: 1 }}>
                Kothis Portal
              </Typography>
              <Box
                component="img"
                src="/resources/kothis.svg"
                alt="Logo of Kothis, a D20 with designs on it."
                className="svg"
                sx={{
                  width: "100px",
                  height: "100px",
                  marginRight: 8,
                  mx: "auto",
                }}
              />
              <Typography sx={{ py: 2 }}>
                This site is where I am building a central location for my
                worldbuilding and TTRPG games. I want this to be a full
                application for character creation, campaign organization,
                homebre creation, game scheduling, and much more! The site is
                young right now but growing more and more by the day!
              </Typography>
            </Grid>
          </Grid>
          <Grid size={6}>
            <Grid
              sx={{
                maxWidth: 750,
                textAlign: "center",
                mx: "auto",
              }}
            >
              <Typography className="secondary" variant="h5" sx={{ pt: 1 }}>
                Component Demos
              </Typography>
              <Box
                component="img"
                src="/resources/construction.svg"
                alt="Construction workers building a website."
                className="svg"
                sx={{
                  width: "100px",
                  height: "100px",
                  marginRight: 8,
                  mx: "auto",
                }}
              />
              <Typography sx={{ py: 2 }}>
                You can find more demos and little projects I'm working on by
                clicking through the other pages in this portfolio. I will try
                to update this site with my work as I produce it. If you have
                requests or questions, reach out from my{" "}
                <Link
                  id="SotN_ad"
                  color={theme.palette.secondary.main}
                  href="https://www.linkedin.com/in/sylphaxiom/"
                  underline="none"
                >
                  LinkedIn
                </Link>
                ,{" "}
                <Link
                  id="SotN_ad"
                  color={theme.palette.secondary.main}
                  href="https://github.com/sylphaxiom"
                  underline="none"
                >
                  GitHub
                </Link>
                , or{" "}
                <Link
                  id="SotN_ad"
                  color={theme.palette.secondary.main}
                  href="https://sylphaxiom.com/contact"
                  underline="none"
                >
                  Contact Page
                </Link>
                !
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
