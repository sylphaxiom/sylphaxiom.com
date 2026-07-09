import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import {
  Box,
  Divider,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

export default function PortProf() {
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
          Professional Overview...
        </Typography>
        <Grid
          container
          direction={"column"}
          sx={{ alignContent: "center", display: "flex" }}
        >
          <Box
            component="img"
            width={100}
            height={100}
            alt="Sylphaxiom Creative Logo"
            src="/resources/sylphaxiom_web_secondary.png"
          />
        </Grid>
      </Grid>
      <Grid
        size={{ xs: 12, md: 8 }}
        container
        sx={{ textAlign: { xs: "center", sm: "left" }, mt: 4, mx: "auto" }}
      >
        <Grid size={12}>
          <Typography sx={{ py: 2 }} variant="h5">
            Full-Stack Developer | Python Automation Engineer
          </Typography>
          <Typography sx={{ py: 2 }}>
            Architecting scalable solutions at the intersection of web
            development and enterprise automation. Expertise in Python
            automation frameworks, REST API integration, modern React
            applications, and cloud infrastructure.
          </Typography>
          <Typography sx={{ py: 2 }}>
            Currently seeking: Full-Stack Developer | Backend Engineer | Python
            Automation Specialist
          </Typography>
          <Typography sx={{ py: 2 }}>
            Portfolio highlights below. For professional inquiries, contact me
            via{" "}
            <Link
              id="profLiLink"
              href="https://www.linkedin.com/in/sylphaxiom"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </Link>{" "}
            or{" "}
            <Link
              id="profGhLink"
              href="https://github.com/sylphaxiom"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Link>
            .
          </Typography>
        </Grid>
        <Grid size={12}>
          <Divider sx={{ my: 3 }} />
          <Typography variant="h5" sx={{ py: 2 }}>
            Professional Projects
          </Typography>
        </Grid>
        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{ textAlign: { xs: "center", sm: "left" }, mt: 4, mx: "auto" }}
        >
          <Typography sx={{ py: 1 }} variant="h6" className="primary">
            REST API Integration and Automation
          </Typography>
          <Typography>
            Python | REST APIs | AWS | ServiceNow | Production Systems
          </Typography>
          <Typography sx={{ py: 1 }} variant="h6" className="secondary">
            PROBLEM
          </Typography>
          <Typography>
            Enterprise organization needed reliable, scalable incident ticket
            automation across multiple platforms with production reliability
            requirements.
          </Typography>
          <Typography sx={{ py: 1 }} variant="h6" className="secondary">
            SOLUTION
          </Typography>
          <Typography>
            Designed and implemented Python framework for ServiceNow REST API
            integration with production reliability patterns including
            multi-environment deployment, configuration management, structured
            logging, graceful error handling, and request caching optimization.
          </Typography>
          <Typography sx={{ py: 1 }} variant="h6" className="secondary">
            IMPACT
          </Typography>
          <List dense>
            <ListItem>
              <ListItemIcon>
                <ArrowRightIcon />
              </ListItemIcon>
              <ListItemText>
                Reduced manual operational overhead for development and
                operations teams
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArrowRightIcon />
              </ListItemIcon>
              <ListItemText>
                Enabled multi-platform deployment (AWS Lambda, Unix servers,
                Windows servers)
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArrowRightIcon />
              </ListItemIcon>
              <ListItemText>
                Demonstarted reliability: Solution requested by multiple
                enterprise teams
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArrowRightIcon />
              </ListItemIcon>
              <ListItemText>
                Production-grade error handling and logging for enterprise scale
              </ListItemText>
            </ListItem>
          </List>
          <Typography sx={{ py: 1 }} variant="h6" className="secondary">
            TECHNOLOGIES
          </Typography>
          <Typography>
            Python | REST APIs | AWS (Lambda) | ServiceNow | Configuration
            Management | Structured Logging | Error Handling | Performance
            Optimization
          </Typography>
          <Typography sx={{ py: 1 }} variant="h6" className="secondary">
            DEPLOYMENT PATTERNS
          </Typography>
          <List dense>
            <ListItem>
              <ListItemIcon>
                <ArrowRightIcon />
              </ListItemIcon>
              <ListItemText>AWS Lambda (serverless)</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArrowRightIcon />
              </ListItemIcon>
              <ListItemText>Unix/Linux servers</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArrowRightIcon />
              </ListItemIcon>
              <ListItemText>
                Windows servers with different orchestration needs
              </ListItemText>
            </ListItem>
          </List>
          <Typography>
            <strong className="secondary">Associated with:</strong> Navient
            (Professional Position)
          </Typography>
          <Typography>
            <strong className="secondary">GitHub:</strong>{" "}
            <Link
              id="snowApiLink"
              href="https://github.com/sylphaxiom/SNOW_API"
              target="_blank"
              rel="noopener noreferrer"
            >
              SNOW_API
            </Link>
          </Typography>
        </Grid>
        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{ textAlign: { xs: "center", sm: "left" }, mt: 4, mx: "auto" }}
        >
          <Typography sx={{ py: 1 }} variant="h6" className="primary">
            Full-Stack Web Application
          </Typography>
          <Typography>
            React | TypeScript | REST APIs | Modern Patterns | Production Ready
          </Typography>
          <Typography sx={{ py: 1 }} variant="h6" className="secondary">
            PROBLEM
          </Typography>
          <Typography>
            Complex application required modern, scalable web architecture with
            production authentication, state management, comprehensive testing,
            and accessibility standards. Utilizes custom calendar/event system
            and CMS administration pages.
          </Typography>
          <Typography sx={{ py: 1 }} variant="h6" className="secondary">
            SOLUTION
          </Typography>
          <Typography>
            Built full-stack application using modern React patterns and
            production-grade architecture including authentication integration,
            sophisticated state management, end-to-end testing, and
            accessibility compliance.
          </Typography>
          <Typography sx={{ py: 1 }} variant="h6" className="secondary">
            FEATURES
          </Typography>
          <List dense>
            <ListItem>
              <ListItemIcon>
                <ArrowRightIcon />
              </ListItemIcon>
              <ListItemText>Production Authentication (OAuth 2.0)</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArrowRightIcon />
              </ListItemIcon>
              <ListItemText>
                Multi-environment deployment (API, DEV, PROD)
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArrowRightIcon />
              </ListItemIcon>
              <ListItemText>
                Comprehensive test coverage (E2E, accessibility)
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArrowRightIcon />
              </ListItemIcon>
              <ListItemText>Responsive design across devices</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArrowRightIcon />
              </ListItemIcon>
              <ListItemText>
                Custom CMS and protected administration portal
              </ListItemText>
            </ListItem>
          </List>
          <Typography sx={{ py: 1 }} variant="h6" className="secondary">
            TECHNOLOGIES
          </Typography>
          <Typography>
            React 19 | React Router v7 | TypeScript strict mode | Material-UI |
            TanStack Query | Axios | Playwright (E2E testing) | Axe Core
            (accessibility testing) | PHP | MySQL
          </Typography>
          <Typography sx={{ py: 1 }} variant="h6" className="secondary">
            ARCHITECTURAL DECISIONS
          </Typography>
          <List dense>
            <ListItem>
              <ListItemIcon>
                <ArrowRightIcon />
              </ListItemIcon>
              <ListItemText>
                Modular component design for reusability
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArrowRightIcon />
              </ListItemIcon>
              <ListItemText>
                Custom Python deployment scripts for multi-environment
                management
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArrowRightIcon />
              </ListItemIcon>
              <ListItemText>
                Production-ready error handling and logging
              </ListItemText>
            </ListItem>
          </List>
          <Typography>
            <strong className="secondary">GitHub:</strong>{" "}
            <Link
              id="yggLink"
              href="https://github.com/sylphaxiom/yegamersguild.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ye Gamer's Guild
            </Link>
          </Typography>
        </Grid>
        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{ textAlign: { xs: "center", sm: "left" }, mt: 4, mx: "auto" }}
        >
          <Typography sx={{ py: 1 }} variant="h6" className="primary">
            Enterprise Cloud Migration Project
          </Typography>
          <Typography>
            AWS | Infrastructure | Control-M | Automation | Business Continuity
          </Typography>
          <Typography sx={{ py: 1 }} variant="h6" className="secondary">
            PROBLEM
          </Typography>
          <Typography>
            Enterprise organization needed to modernize legacy job scheduling
            infrastructure from on-premises Automic OneAutomation to
            cloud-hosted Control-M SaaS while maintaining 24/7 uptime and system
            reliability.
          </Typography>
          <Typography sx={{ py: 1 }} variant="h6" className="secondary">
            SOLUTION
          </Typography>
          <Typography>
            Led end-to-end migration strategy coordinating technical
            implementation with business continuity requirements. Managed
            orchestration of enterprise workflows, decommissioning of legacy
            systems, and validation of post-migration infrastructure.
          </Typography>
          <Typography sx={{ py: 1 }} variant="h6" className="secondary">
            SCOPE & IMPACT
          </Typography>
          <List dense>
            <ListItem>
              <ListItemIcon>
                <ArrowRightIcon />
              </ListItemIcon>
              <ListItemText>
                Coordinated migration of thousands of legacy jobs
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArrowRightIcon />
              </ListItemIcon>
              <ListItemText>
                Maintained business continuity throughout transition
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArrowRightIcon />
              </ListItemIcon>
              <ListItemText>
                Zero unplanned downtime during migration
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArrowRightIcon />
              </ListItemIcon>
              <ListItemText>
                Documented procedures for operational handoff
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArrowRightIcon />
              </ListItemIcon>
              <ListItemText>
                Validated post-migration system reliability
              </ListItemText>
            </ListItem>
          </List>
          <Typography sx={{ py: 1 }} variant="h6" className="secondary">
            TECHNOLOGIES
          </Typography>
          <Typography>
            AWS | Control-M | Automic OneAutomation | Python automation |
            Configuration management
          </Typography>
          <Typography sx={{ py: 1 }} variant="h6" className="secondary">
            SKILLS DEMONSTRATED
          </Typography>
          <List dense>
            <ListItem>
              <ListItemIcon>
                <ArrowRightIcon />
              </ListItemIcon>
              <ListItemText>Enterprise infrastructure planning</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArrowRightIcon />
              </ListItemIcon>
              <ListItemText>Stakeholder coordination</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArrowRightIcon />
              </ListItemIcon>
              <ListItemText>Technical migration strategy</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArrowRightIcon />
              </ListItemIcon>
              <ListItemText>Business continuity focus</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArrowRightIcon />
              </ListItemIcon>
              <ListItemText>Deployment orchestration</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArrowRightIcon />
              </ListItemIcon>
              <ListItemText>System validation and testing</ListItemText>
            </ListItem>
          </List>
          <Typography>
            <strong className="secondary">Timeline:</strong> June 2025 - Apr
            2026
          </Typography>
          <Typography>
            <strong className="secondary">Associated with:</strong> Navient
            (Professional Position)
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
