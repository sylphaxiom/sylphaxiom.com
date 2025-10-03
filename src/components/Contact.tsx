import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormHelperText from "@mui/material/FormHelperText";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
// import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import TextAreaAutosize from "@mui/material/TextareaAutosize";

export default function Contact() {
  const [radioHelper, setRadioHelper] = React.useState(
    "Inquire about having a website, asset, or anything else you want created."
  );
  const [nameHelper, setNameHelper] = React.useState("");
  const [creator, setCreator] = React.useState(false);

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.currentTarget.value;
    switch (target) {
      case "web":
        setRadioHelper(
          "Contact the Webmaster with any issues or inquiries relating to this website"
        );
        setCreator(false);
        break;
      case "intake":
        setRadioHelper(
          "Inquire about having a website, asset, or anything else you want created."
        );
        setCreator(false);
        break;
      case "creator":
        setRadioHelper(
          "Reach out to a creator directly... for whatever reason, I guess."
        );
        setCreator(true);
    }
  };

  return (
    <Grid container sx={{ textAlign: "center" }}>
      <Grid size={4} offset={1}>
        <img
          src="/talas-hey-buddy.svg"
          width={"100%"}
          height={"auto"}
          // style={{ maxHeight: 500 }}
          alt="Curly haired dude standing in the doorway saying hey buddy"
        />
      </Grid>
      <Grid size={4} offset={1}>
        <Stack>
          <Typography variant="h3">
            Fill out the form below and we'll get right back to you!
          </Typography>
          <FormControl sx={{ m: 4 }} focused>
            <FormLabel id="who_label" sx={{ mt: 2 }}>
              Who do you want to contact?
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="who_label"
              name="who_group"
              sx={{ justifyContent: "space-around" }}
              onChange={handleRadioChange}
              defaultValue={"intake"}
            >
              <FormControlLabel
                value={"web"}
                control={<Radio />}
                label={"Webmaster"}
              />
              <FormControlLabel
                value={"intake"}
                control={<Radio />}
                label={"Services Inquiry"}
              />
              <FormControlLabel
                value={"creator"}
                control={<Radio />}
                label={"Creator"}
              />
            </RadioGroup>
            <FormHelperText id="radioHelper_field" sx={{ textAlign: "center" }}>
              {radioHelper}
            </FormHelperText>
            <Divider sx={{ m: 2 }} />
            {creator && (
              <>
                <FormLabel component={"legend"}>Creators</FormLabel>
                <FormGroup row sx={{ justifyContent: "space-around" }}>
                  <FormControlLabel
                    control={<Checkbox checked={false} name="jacob" />}
                    label="Jacob"
                  />
                  <FormControlLabel
                    control={<Checkbox checked={false} name="ty" />}
                    label="Ty"
                  />
                </FormGroup>
                <Divider sx={{ m: 2 }} />
              </>
            )}
            <FormLabel id="subject_label">What's on your mind?</FormLabel>
            <Grid container>
              <Grid size={6}>
                <TextField
                  id="name"
                  label="Name"
                  variant="standard"
                  sx={{ width: 0.8 }}
                />
                <FormHelperText
                  id="nameHelper_field"
                  sx={{ mb: 2, textAlign: "center" }}
                >
                  {nameHelper}
                </FormHelperText>
              </Grid>
              <Grid size={6}>
                <TextField
                  id="email"
                  label="Email"
                  variant="standard"
                  sx={{ width: 0.8 }}
                />
                <FormHelperText
                  id="nameHelper_field"
                  sx={{ mb: 2, textAlign: "center" }}
                >
                  {nameHelper}
                </FormHelperText>
              </Grid>
            </Grid>
            <TextAreaAutosize
              id="message"
              minRows={4}
              aria-label="message"
              placeholder="Other words..."
              style={{
                margin: "1.8em",
                marginTop: 0,
                background: "whitesmoke",
                borderColor: "rgb(0,0,0,0.3)",
                borderRadius: 5,
                fontSize: "1em",
                padding: 10,
              }}
            />
          </FormControl>
        </Stack>
      </Grid>
    </Grid>
  );
}
