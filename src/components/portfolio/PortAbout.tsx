import * as React from "react";
import * as motion from "motion/react-client";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import TerminalIcon from "@mui/icons-material/Terminal";
import ApiIcon from "@mui/icons-material/Api";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import DrawIcon from "@mui/icons-material/Draw";
import CasinoIcon from "@mui/icons-material/Casino";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import { ListItem, ListItemIcon, ListItemText, useTheme } from "@mui/material";

export default function PortAbout() {
  const [rays, setRays] = React.useState(0);
  const theme = useTheme();

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
        sx={{ textAlign: { xs: "center", sm: "left" }, mt: 4, mx: "auto" }}
      >
        <Typography sx={{ py: 2 }}>
          Once upon a time, there was this guy who liked stuff and did things...
        </Typography>
        <Typography sx={{ py: 2 }}>
          ...Only joking, nobody wants to read that. If you want to read
          something,{" "}
          <Link
            id="SotN_ad"
            color={theme.palette.secondary.main}
            href="https://a.co/d/6Mezoxp"
          >
            here
          </Link>{" "}
          is a small book you can read (I wrote that too, don't worry.) Now, to
          the abridged version...
        </Typography>
        <List dense>
          <Typography variant="h6" className="secondary">
            Development Skills
          </Typography>
          <ListItem>
            <ListItemIcon>
              <SmartToyIcon />
            </ListItemIcon>
            <ListItemText>Python and PowerShell for automation</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <TerminalIcon />
            </ListItemIcon>
            <ListItemText>
              JavaScript/TypeScript, CSS, HTML, PHP, and MySQL for web
              development
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ApiIcon />
            </ListItemIcon>
            <ListItemText>REST API creation and consumption</ListItemText>
          </ListItem>
        </List>
        <List dense>
          <Typography variant="h6" className="secondary">
            Graphics Skills
          </Typography>
          <ListItem>
            <ListItemIcon>
              <AddPhotoAlternateIcon />
            </ListItemIcon>
            <ListItemText>SVG overlay of images for interactivity</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <AddReactionIcon />
            </ListItemIcon>
            <ListItemText>
              Custom SVG based icons and graphics to fit needs and styles
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <DrawIcon />
            </ListItemIcon>
            <ListItemText>PenPot for design and prototyping</ListItemText>
          </ListItem>
        </List>
        <List dense>
          <Typography variant="h6" className="secondary">
            Writing Skills
          </Typography>
          <ListItem>
            <ListItemIcon>
              <CasinoIcon />
            </ListItemIcon>
            <ListItemText>TTRPG worldbuilder and Game Master</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <AutoFixHighIcon />
            </ListItemIcon>
            <ListItemText>
              Fiction author with a taste for sci-fi and fantasy/horror
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <AutoStoriesIcon />
            </ListItemIcon>
            <ListItemText>
              Passionate storyteller and consumer of artistic media
            </ListItemText>
          </ListItem>
        </List>
      </Grid>
    </Grid>
  );
}
