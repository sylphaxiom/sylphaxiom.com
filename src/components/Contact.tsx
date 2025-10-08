import * as React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
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
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import Textarea from "@mui/joy/Textarea";
import { useFetcher } from "react-router";
import type { Route } from "./+types/Contact";
import axios from "axios";

export async function clientAction({ request }: Route.ClientLoaderArgs) {
  await new Promise((res) => setTimeout(res, 1000));
  let formData = await request.formData();
  console.log("You're in the action function ");
  const name = String(formData.get("name"));
  const who = String(formData.get("who_group"));
  const email = String(formData.get("email"));
  let subject = String(formData.get("subject")); // needs to be mutable since it may not be set by default.
  const message = String(formData.get("message"));
  let recipient = "";
  let creator = "";

  console.log(
    "Var check:\n%s\n%s\n%s\n%s\n%s",
    name,
    who,
    email,
    subject,
    message
  );

  // Validate name field, if needed
  if (Boolean(name.match(/^[A-Za-z\s]+$/))) {
    console.log("Name looks good: " + name);
  } else {
    console.log("Error in Name section");
    return {
      ok: false,
      nameError:
        "Looks like theres some characters other than letters and spaces, have another look and try again: " +
        name,
    };
  }

  // Validate email field
  const validator = email
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  if (Boolean(validator)) {
    console.log("Email looks good: " + email);
  } else {
    console.log("Error in Email section");
    return {
      ok: false,
      emailError:
        "There appears to be an issue with your email address, have another look and try again: " +
        email,
    };
  }

  // Apply Who logic
  switch (who) {
    case "web":
      recipient = "webmaster@sylphaxiom.com";
      break;
    case "creator":
      recipient = creator + "@sylphaxiom.com";
      subject =
        "You have a new direct message from the sylphaxiom.com web form"; // setting subject since it shouldn't be populated
      break;
    case "intake":
      recipient = "intake@sylphaxiom.com";
      subject = "A new client request has arrived"; // setting subject since it shouldn't be populated
      break;
  }

  // Subject validation
  if (subject.length < 255) {
    console.log("Subject looks good: " + subject);
  } else {
    console.log("Error in Subject section");
    return {
      ok: false,
      subjError:
        "Your subject is a bit too long. Please keep it under 255 characters.",
    };
  }

  // Message validation
  if (message.length < 65535) {
    console.log("Message looks good: " + message);
  } else {
    console.log("Error in Message section");
    return {
      ok: false,
      msgError:
        "Your message is a bit too long. Please keep it under (only) 65,535 characters.",
    };
  }

  // Form the API call and await the response
  const body = {
    name: name,
    subject: subject,
    who: who,
    email: email,
    message: message,
    recipient: recipient,
  };

  const API = axios.create({
    baseURL: "https://api.sylphaxiom.com/",
    headers: {
      Rain: "PMGeRUcuQcOZGeE71WHJWuCPXbWX8Geul4rmpeLXx6mGDfSk9Wc4eWrgtqLl8m3z",
      "Content-Type": "application/json",
    },
  });

  await API.post("email.php", body)
    .then(function (response) {
      console.log("response is: " + response);
      return {
        ok: true,
        resp: "Thanks! Your email was successfully sent. Have a nice day!",
      };
    })
    .catch(function (error) {
      console.log(error);
      return { ok: false, apiError: error };
    });
}

export default function Contact() {
  let fetcher = useFetcher();
  const [text, setText] = React.useState("");
  const [radioHelper, setRadioHelper] = React.useState(
    "Inquire about having a website, asset, or anything else you want created."
  );
  const [who, setWho] = React.useState(fetcher.data?.who_group || "intake");
  const [creator, setCreator] = React.useState("jacob");
  // const [submitted, setSubmitted] = React.useState(false);
  const nameHelper = fetcher.data?.nameError || "";
  const emailHelper = fetcher.data?.emailError || "";
  const subjHelper = fetcher.data?.subjError || "";

  console.log(Boolean(fetcher.data?.ok));

  // React.useEffect(() => {
  //   if (submitted) {
  //     const thanks =
  //   }
  // }, []);

  console.log("Fetcher data is: ");
  console.log(String(fetcher.data?.resp));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.currentTarget.value;
    switch (target) {
      case "web":
        setRadioHelper(
          "Contact the Webmaster with any issues or inquiries relating to this website"
        );
        setWho(target);
        break;
      case "intake":
        setRadioHelper(
          "Inquire about having a website, asset, or anything else you want created."
        );
        setWho(target);
        break;
      case "creator":
        setRadioHelper(
          "Reach out to a creator directly... for whatever reason, I guess."
        );
        setWho(target);
        break;
      case "jacob":
        setCreator("jacob");
        break;
      case "ty":
        setCreator("ty");
        break;
      default:
        console.log(
          "What kind of fuckery did you do to get here? Only checkbox and radio values should be passed in here.\nLooks like your dumb-ass forgot to add a case. Tsk, tsk."
        );
        console.log(
          "ugh, you complain too much. Here is some data:\n" + target
        );
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
          <fetcher.Form method="POST">
            <FormControl sx={{ m: 4 }} focused>
              <FormLabel id="who_label" sx={{ mt: 2 }}>
                Who do you want to contact?
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="who_label"
                name="who_group"
                sx={{ justifyContent: "space-around" }}
                onChange={handleChange}
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
              <FormHelperText
                id="radioHelper_field"
                sx={{ textAlign: "center" }}
              >
                {radioHelper}
              </FormHelperText>
              <Divider sx={{ m: 2 }} />
              {who === "creator" && (
                <>
                  <FormLabel component={"legend"}>Creators</FormLabel>
                  <FormGroup row sx={{ justifyContent: "space-around" }}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={Boolean(creator.match("jacob")) || false}
                          value="jacob"
                          onChange={handleChange}
                          name="jacob"
                        />
                      }
                      label="Jacob"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={Boolean(creator.match("ty")) || false}
                          value="ty"
                          onChange={handleChange}
                          name="ty"
                        />
                      }
                      label="Ty"
                    />
                  </FormGroup>
                  <Divider sx={{ m: 2 }} />
                </>
              )}
              {who === "web" ?
                <Grid
                  container
                  spacing={2}
                  sx={{ alignItems: "center", textAlign: "left" }}
                >
                  <Grid size={3}>
                    <FormLabel id="subject_label">What's up?</FormLabel>
                  </Grid>
                  <Grid size={9}>
                    <TextField
                      id="subject"
                      name="subject"
                      label="Subject"
                      variant="standard"
                      error={fetcher.data?.subjError}
                      sx={{ width: 1 }}
                    />
                    <FormHelperText
                      id="subjHelper_field"
                      error={fetcher.data?.subjError}
                      sx={{ mb: 2, textAlign: "center" }}
                    >
                      {subjHelper}
                    </FormHelperText>
                  </Grid>
                </Grid>
              : <FormLabel id="subject_label">
                  Leave your info here and{" "}
                  {who === "creator" ?
                    creator.replace(creator[0], creator[0].toUpperCase())
                  : "someone"}{" "}
                  will get back to you as soon as they can!
                </FormLabel>
              }
              <Grid container spacing={2}>
                <Grid size={6}>
                  <TextField
                    id="name"
                    label="Name"
                    name="name"
                    variant="standard"
                    error={fetcher.data?.nameError}
                    sx={{ width: 1 }}
                  />
                  <FormHelperText
                    id="nameHelper_field"
                    sx={{ mb: 2, textAlign: "center" }}
                    error={fetcher.data?.nameError}
                  >
                    {nameHelper}
                  </FormHelperText>
                </Grid>
                <Grid size={6}>
                  <TextField
                    id="email"
                    name="email"
                    label="Email"
                    variant="standard"
                    error={fetcher.data?.emailError}
                    sx={{ width: 1 }}
                  />
                  <FormHelperText
                    id="nameHelper_field"
                    error={fetcher.data?.emailError}
                    sx={{ mb: 2, textAlign: "center" }}
                  >
                    {emailHelper}
                  </FormHelperText>
                </Grid>
              </Grid>
              <Textarea
                id="message"
                minRows={4}
                value={text}
                onChange={(event) => setText(event.target.value)}
                name="message"
                aria-label="message"
                variant="outlined"
                endDecorator={
                  <Typography sx={{ ml: "auto", opacity: 0.8 }}>
                    {text.length} character(s)
                  </Typography>
                }
                error={fetcher.data?.msgError}
                sx={{ backgroundColor: "whitesmoke" }}
                placeholder="Stuff... Things... Whatever..."
              />
            </FormControl>
            <Button variant="text" type="submit">
              {fetcher.state !== "idle" ? "Sending..." : "Submit"}
            </Button>
          </fetcher.Form>
          {fetcher.data?.ok ?
            <Typography variant="h5" color="Success">
              {fetcher.data?.resp}
            </Typography>
          : <Typography variant="h5" color="Danger">
              {fetcher.data?.apiError}
            </Typography>
          }
        </Stack>
      </Grid>
    </Grid>
  );
}
