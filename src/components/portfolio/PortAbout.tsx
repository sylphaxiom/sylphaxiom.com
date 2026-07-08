import * as React from "react";
import * as motion from "motion/react-client";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import TerminalIcon from "@mui/icons-material/Terminal";
import ApiIcon from "@mui/icons-material/Api";
import StorageIcon from "@mui/icons-material/Storage";
import CloudDoneIcon from "@mui/icons-material/CloudDone";
import StorefrontIcon from "@mui/icons-material/Storefront";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import BugReportIcon from "@mui/icons-material/BugReport";
import {
  Link,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function PortAbout() {
  const [rays, setRays] = React.useState(0);

  React.useEffect(() => {
    const swapper = setInterval(() => {
      setRays(rays === 0 ? 1 : 0);
    }, 1000);
    return () => clearInterval(swapper);
  }, [rays]);

  return (
    <Grid container>
      <Grid size={{ xs: 12, lg: 3 }}>
        <Typography variant="h4" className="primary" marginTop={5}>
          A Brief History...
        </Typography>
        <Grid
          container
          direction={"column"}
          sx={{ alignContent: "center", display: "flex" }}
        >
          <img
            width={40}
            height={30}
            alt="a flying saucer"
            src="/resources/saucer_asset-20x15.svg"
            className=""
          />
          <motion.img
            layout
            style={{}}
            width={40}
            height={30}
            alt="a rays"
            src={"/resources/rays" + rays + "_asset-20x15.svg"}
            className="svg"
          />
          <img
            width={40}
            height={30}
            alt="a cow"
            src="/resources/cow_asset-20x15.svg"
            className="svg"
          />
        </Grid>
      </Grid>
      <Grid
        size={{ xs: 12, md: 8 }}
        container
        sx={{ textAlign: { xs: "center", sm: "left" }, mt: 4, mx: "auto" }}
      >
        <Grid size={12}>
          <Typography sx={{ py: 1 }}>
            I'm a full-stack developer and Python automation specialist
            passionate about building reliable, scalable systems. I enjoy
            solving complex problems—whether that's architecting enterprise
            automation frameworks, designing modern web applications, or
            modernizing legacy infrastructure.
          </Typography>
          <Typography sx={{ py: 1 }}>
            I'm equally comfortable working across the full stack (Python
            backend, React frontend, AWS cloud infrastructure) and love learning
            new technologies that solve real-world problems.
          </Typography>
          <Typography sx={{ py: 1 }}>
            Outside of professional development, I'm an active worldbuilder and
            creative writer (you'll find some of that work below in the Creative
            Projects section).
          </Typography>
          <List
            dense
            subheader={
              <ListSubheader>
                For professional inquiries, please reach out via:
              </ListSubheader>
            }
          >
            <ListItem>
              <ListItemIcon>
                <ArrowForwardIcon />
              </ListItemIcon>
              <ListItemText>
                LinkedIn:{" "}
                <Link
                  href="https://linkedin.com/in/sylphaxiom"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin.com/in/sylphaxiom
                </Link>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArrowForwardIcon />
              </ListItemIcon>
              <ListItemText>
                GitHub:{" "}
                <Link
                  href="https://github.com/sylphaxiom"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/sylphaxiom
                </Link>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArrowForwardIcon />
              </ListItemIcon>
              <ListItemText>
                Email:{" "}
                <Link
                  href="mailto:pelljacoba@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  pelljacoba@gmail.com
                </Link>
              </ListItemText>
            </ListItem>
          </List>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <List dense>
            <Typography variant="h6" className="secondary">
              Core Languages
            </Typography>
            <ListItem>
              <ListItemIcon>
                <SmartToyIcon />
              </ListItemIcon>
              <ListItemText>
                Python — Automation frameworks, REST APIs, scripting, production
                systems
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <TerminalIcon />
              </ListItemIcon>
              <ListItemText>
                JavaScript/TypeScript — Modern web development, type-safe code
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ApiIcon />
              </ListItemIcon>
              <ListItemText>
                SQL — MySQL, MSSQL, database design and optimization
              </ListItemText>
            </ListItem>
          </List>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <List dense>
            <Typography variant="h6" className="secondary">
              Frontend Development
            </Typography>
            <ListItem>
              <ListItemIcon>
                <StorefrontIcon />
              </ListItemIcon>
              <ListItemText>React (React 19, React Router v7)</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <StorefrontIcon />
              </ListItemIcon>
              <ListItemText>TypeScript strict mode</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <StorefrontIcon />
              </ListItemIcon>
              <ListItemText>Material-UI component library</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <StorefrontIcon />
              </ListItemIcon>
              <ListItemText>
                TanStack Query (advanced state management)
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <StorefrontIcon />
              </ListItemIcon>
              <ListItemText>
                Responsive design and accessibility standards
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <StorefrontIcon />
              </ListItemIcon>
              <ListItemText>
                Axios (HTTP client), REST API consumption
              </ListItemText>
            </ListItem>
          </List>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <List dense>
            <Typography variant="h6" className="secondary">
              Backend & API Development
            </Typography>
            <ListItem>
              <ListItemIcon>
                <StorageIcon />
              </ListItemIcon>
              <ListItemText>REST API design and implementation</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <StorageIcon />
              </ListItemIcon>
              <ListItemText>ServiceNow API integration</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <StorageIcon />
              </ListItemIcon>
              <ListItemText>Python automation frameworks</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <StorageIcon />
              </ListItemIcon>
              <ListItemText>Database design and optimization</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <StorageIcon />
              </ListItemIcon>
              <ListItemText>Authentication (Auth0, OAuth 2.0)</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <StorageIcon />
              </ListItemIcon>
              <ListItemText>Error handling and logging patterns</ListItemText>
            </ListItem>
          </List>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <List dense>
            <Typography variant="h6" className="secondary">
              Cloud & Infrastructure
            </Typography>
            <ListItem>
              <ListItemIcon>
                <CloudDoneIcon />
              </ListItemIcon>
              <ListItemText>
                AWS (Lambda, SaaS platforms, cloud migration)
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CloudDoneIcon />
              </ListItemIcon>
              <ListItemText>
                Multi-environment deployment and orchestration
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CloudDoneIcon />
              </ListItemIcon>
              <ListItemText>Configuration management</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CloudDoneIcon />
              </ListItemIcon>
              <ListItemText>Infrastructure automation</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CloudDoneIcon />
              </ListItemIcon>
              <ListItemText>System monitoring and reliability</ListItemText>
            </ListItem>
          </List>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <List dense>
            <Typography variant="h6" className="secondary">
              Enterprise Tools & Platforms
            </Typography>
            <ListItem>
              <ListItemIcon>
                <HomeRepairServiceIcon />
              </ListItemIcon>
              <ListItemText>
                ServiceNow (incident management, REST APIs)
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <HomeRepairServiceIcon />
              </ListItemIcon>
              <ListItemText>
                Control-M (job scheduling and orchestration)
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <HomeRepairServiceIcon />
              </ListItemIcon>
              <ListItemText>
                Automic OneAutomation (job scheduling and orchestration)
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <HomeRepairServiceIcon />
              </ListItemIcon>
              <ListItemText>Power Automate, Power Apps</ListItemText>
            </ListItem>
          </List>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <List dense>
            <Typography variant="h6" className="secondary">
              Testing & Quality
            </Typography>
            <ListItem>
              <ListItemIcon>
                <BugReportIcon />
              </ListItemIcon>
              <ListItemText>Playwright (E2E testing)</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <BugReportIcon />
              </ListItemIcon>
              <ListItemText>Axe Core (accessibility testing)</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <BugReportIcon />
              </ListItemIcon>
              <ListItemText>ESLint (code quality)</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <BugReportIcon />
              </ListItemIcon>
              <ListItemText>TypeScript strict mode (type safety)</ListItemText>
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Grid>
  );
}
