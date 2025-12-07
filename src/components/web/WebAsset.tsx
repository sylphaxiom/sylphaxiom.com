import {
  Box,
  Grid,
  List,
  ListItem,
  styled,
  Tooltip,
  tooltipClasses,
  Typography,
  type TooltipProps,
} from "@mui/material";
import { Link } from "react-router";
interface WebProps {
  title: string;
  image: string;
  content: string;
  tech: string[];
  features: string[];
}

export default function WebAsset({
  title,
  image,
  content,
  tech,
  features,
}: WebProps) {
  const LinkTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.primary.main,
      fontSize: 16,
    },
  }));

  return (
    <Grid container size={{ xs: 12 }} sx={{ justifyContent: "center" }}>
      <Grid size={12}>
        <Typography
          variant="h4"
          component="h3"
          sx={{ my: 2, textAlign: "center" }}
        >
          {title}
        </Typography>
      </Grid>
      <LinkTooltip
        title="Click me to visit the site"
        arrow
        placement="bottom"
        followCursor
      >
        <Link to="https://kothis.sylphaxiom.com">
          <Box
            component="img"
            src={image}
            alt={"An image representing the " + title + " website."}
            className="svg"
            sx={{
              width: "200px",
              height: "200px",
              display: "flex",
              justifySelf: "center",
            }}
          />
        </Link>
      </LinkTooltip>
      <Typography variant="body1" sx={{ textIndent: "30px", my: 2 }}>
        {content}
      </Typography>
      <Grid size={{ xs: 12, sm: 6 }}>
        <Typography variant="h5" sx={{ mt: 2 }}>
          Technologies:
        </Typography>
        <List dense>
          {tech.map((techItem) => {
            return <ListItem key={techItem}>{techItem}</ListItem>;
          })}
        </List>
      </Grid>
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
  );
}
