import * as React from "react";
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
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { data, useFetcher } from "react-router";
import type { Route } from "./+types/FormContact";
import axios from "axios";
import InputAdornment from "@mui/material/InputAdornment";

export async function clientAction({ request }: Route.ClientActionArgs) {
  // await new Promise((res) => setTimeout(res, 1000));
  let formData = await request.formData();
  const name = String(formData.get("name"));
  const who = String(formData.get("who_group"));
  const email = String(formData.get("email"));
  let subject = String(formData.get("subject")); // needs to be mutable since it may not be set by default.
  const message = String(formData.get("message"));
  let recipient = "";
  let creator = "";
  let errs: { [k: string]: string | null } = {};
  let status: number | null = null;
  let msg: Object | String = "";

  // Validate name field, if needed
  if (Boolean(name.match(/^[A-Za-z\s]+$/))) {
    delete errs.nameError;
  } else {
    if (name === "") {
      errs.nameError = "Name field cannot be blank.";
    } else if (name.match(/[^A-Za-z\s]+/)) {
      errs.nameError = "Only letters and spaces may be used.";
    } else {
      errs.nameError = "An Unknown error occurred.";
    }
  }

  // Validate email field
  const validator = email
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  if (Boolean(validator)) {
    delete errs.emailError;
  } else {
    errs.emailError = "Check your email address";
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
    delete errs.subjError;
  } else {
    errs.subjError = "Subject may not exceed 255 characters.";
  }

  // Message validation
  if (message.length < 65535) {
    if (message.length > 0) {
      delete errs.msgError;
    } else {
      errs.msgError = "Message cannot be empty.";
    }
  } else {
    errs.msgError = "Message may not exceed 65,535 characters.";
  }

  if (Object.keys(errs).length > 0) {
    status = 400;
    msg = errs;
    return data({ status, msg });
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

  await API.put("email.php", body)
    .then(function (response) {
      delete errs.apiError;
      status = 200;
      msg = response.data.message;
    })
    .catch(function (error) {
      console.log(error);
      status = 400;
      msg = error.message;
    });
  return data({ status, msg });
  // return data({ status: 200, msg: "Looks good for testing" }); // Only here for testing purposes so the actual API is not called.
}

export default function FormContact() {
  // This is where the form goes. Data is submitted and validated in Contact, then passed down to the next submitted route
  let fetcher = useFetcher(); // Fetcher for form data and working with loader/action
  const [text, setText] = React.useState(""); // Used for textarea input to get the character counter.
  const [who, setWho] = React.useState(fetcher.data?.who_group || "intake"); // Controls the radio button on the form. Changing this changes multiple other elements
  const [creator, setCreator] = React.useState("jacob"); // Using state seems to work best here
  let nameHelper = "";
  let isNameErr = false;
  let emailHelper = "";
  let isEmailErr = false;
  let subjHelper = "";
  let isSubjErr = false;
  let msgHelper = "";
  let isMsgErr = false;

  if (fetcher.data?.status !== 200) {
    // check for errors and assign fetcher value if present.
    nameHelper = fetcher.data?.msg.nameError;
    isNameErr = Boolean(fetcher.data?.msg.nameError);
    emailHelper = fetcher.data?.msg.emailError;
    isEmailErr = Boolean(fetcher.data?.msg.emailError);
    subjHelper = fetcher.data?.msg.subjError;
    isSubjErr = Boolean(fetcher.data?.msg.subjError);
    msgHelper = fetcher.data?.msg.msgError;
    isMsgErr = Boolean(fetcher.data?.msg.MsgError);
  }

  let radioHelper =
    "Inquire about having a website, asset, or anything else you want created."; // simple variable replaces state (untested)
  let submitted: number | null = fetcher.data?.status || null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.currentTarget.value; // sets radio when user changes it.
    switch (target) {
      case "web":
        radioHelper =
          "Contact the Webmaster with any issues or inquiries relating to this website";
        setWho(target);
        break;
      case "intake":
        radioHelper =
          "Inquire about having a website, asset, or anything else you want created.";
        setWho(target);
        break;
      case "creator":
        radioHelper =
          "Reach out to a creator directly... for whatever reason, I guess.";
        setWho(target);
        break;
      case "jacob":
        setCreator("jacob");
        break;
      case "ty":
        setCreator("ty");
        break;
      default:
        console.log("Contact.handleChange.switch.default.ERR");
    }
  };

  return (
    <fetcher.Form method="post" key={"contactForm"}>
      <FormControl sx={{ m: 4, mb: 2 }} focused>
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
        <FormHelperText id="radioHelper_field" sx={{ textAlign: "center" }}>
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
                error={isSubjErr}
                sx={{ width: 1 }}
              />
              <FormHelperText
                id="subjHelper_field"
                error={isSubjErr}
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
              error={isNameErr}
              sx={{ width: 1 }}
            />
            <FormHelperText
              id="nameHelper_field"
              sx={{ mb: 2, textAlign: "center" }}
              error={isNameErr}
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
              error={isEmailErr}
              sx={{ width: 1 }}
            />
            <FormHelperText
              id="nameHelper_field"
              error={fetcher.data?.msg.emailError}
              sx={{ mb: 2, textAlign: "center" }}
            >
              {emailHelper}
            </FormHelperText>
          </Grid>
        </Grid>
        <TextField
          id="message"
          minRows={4}
          value={text}
          onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
            setText(event.target.value)
          }
          name="message"
          aria-label="message"
          variant="outlined"
          multiline
          rows={5}
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment
                  position="end"
                  sx={{ ml: "auto", opacity: 0.8, alignSelf: "end" }}
                >
                  {text.length} character(s)
                </InputAdornment>
              ),
            },
          }}
          error={fetcher.data?.msg.msgError}
          sx={{ backgroundColor: "whitesmoke" }}
          placeholder="Stuff... Things... Whatever..."
        />
        <FormHelperText
          id="msgHelper_field"
          error={isMsgErr}
          sx={{ mb: 1, textAlign: "center" }}
        >
          {msgHelper}
        </FormHelperText>
      </FormControl>
      {submitted === 200 && (
        <Typography sx={{ color: "success", fontSize: "1.5em" }}>
          Thanks for your feedback! {fetcher.data.msg}
        </Typography>
      )}
      <Button variant="text" type="submit" sx={{ mt: 1 }}>
        {fetcher.state !== "idle" ? "Sending..." : "Submit"}
      </Button>
    </fetcher.Form>
  );
}
