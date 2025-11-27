import Grid from "@mui/material/Grid";
import { SkillTiles, type Skills } from "../portfolio/SkillTiles";
import Box from "@mui/material/Box";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";
import NumberSpinner from "../elements/NumberSpinner";
import type { NumberFieldRootChangeEventDetails } from "@base-ui-components/react/number-field";
import { Link } from "react-router";

export default function SkillTilesDemo() {
  const theme = useTheme();
  const [pattern, setPattern] = React.useState("random");
  const [rows, setRows] = React.useState(16);
  const [density, setDensity] = React.useState(4);
  const skills: Skills[] = [
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
  ];
  const spiraled = pattern === "spiral";
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPattern(e.target.value);
  };
  const handleRowChange = (
    value: number | null,
    _e: NumberFieldRootChangeEventDetails
  ) => {
    console.log(value);
    setRows(Number(value));
  };
  const handleDensityChange = (
    value: number | null,
    _e: NumberFieldRootChangeEventDetails
  ) => {
    console.log(value);
    setDensity(Number(value));
  };

  return (
    <Grid container direction={{ xs: "column-reverse", md: "row" }}>
      <Grid offset={{ xs: 0, xl: 1 }} size={{ xs: 12, md: 6, xl: 3 }}>
        <Grid
          container
          sx={{
            padding: 3,
            border: "dashed " + theme.palette.secondary.main,
            marginTop: 3,
            mx: 1,
          }}
          rowSpacing={3}
          id="logoTiles"
          columns={4}
        >
          {SkillTiles(skills, rows, pattern, density)}
        </Grid>
      </Grid>
      <Grid size={{ xs: 12, md: 6, xl: 3 }} sx={{ px: 1, textAlign: "center" }}>
        <Typography
          variant="h3"
          sx={{ position: "sticky", top: "10px", height: "70px" }}
        >
          Tiles Demo
        </Typography>
        <Box
          sx={{
            border: "solid 2px " + theme.palette.primary.main,
            width: 1,
            justifySelf: "center",
            position: "sticky",
            top: "80px",
          }}
        >
          <FormControl focused={false}>
            <FormLabel id="demoRadiosLabel">Pattern Options</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demoRadiosLabel"
              name="demoRadioGroup"
              value={pattern}
              onChange={handleChange}
            >
              <FormControlLabel
                value="random"
                control={<Radio />}
                label="Random (default)"
              />
              <FormControlLabel
                value="spiral"
                control={<Radio />}
                label="Spiral"
              />
            </RadioGroup>
            <FormLabel id="demoRowsLabel">Number of Rows</FormLabel>
            <NumberSpinner
              min={1}
              max={40}
              defaultValue={16}
              aria-labelledby="demoRowsLabel"
              id="demoRows"
              onValueChange={handleRowChange}
              size="small"
              sx={{ mb: 2, mt: -2 }}
            />
            <FormLabel id="demoDensityLabel">Density Value</FormLabel>
            <NumberSpinner
              min={1}
              max={20}
              defaultValue={4}
              aria-labelledby="demoDensityLabel"
              id="demoDensity"
              disabled={spiraled}
              onValueChange={handleDensityChange}
              size="small"
              sx={{ mt: -2 }}
            />
            <FormHelperText sx={{ mb: 2 }}>
              {spiraled && "Density has no purpose while pattern is spiral"}
            </FormHelperText>
          </FormControl>
          <Typography variant="body1" sx={{ m: 2 }}>
            The tiles to the left (or below) are randomly generated. You can
            play with the form elements above to see the effects they have on
            the tiles.
          </Typography>
          <Button
            variant="contained"
            component={Link}
            to={"/portfolio"}
            sx={{ mb: 2 }}
          >
            Back to Portfolio
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}
