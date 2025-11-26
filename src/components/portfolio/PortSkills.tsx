import * as React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
type Skills =
  | "bash"
  | "boottrap"
  | "css"
  | "github"
  | "html5"
  | "js"
  | "linux"
  | "mui"
  | "mysql"
  | "php"
  | "playwright"
  | "powershell"
  | "python"
  | "react"
  | "salesforce"
  | "typescript"
  | "windows";

export function SkillTiles(
  skills: Array<Skills>,
  rows: number,
  pattern?: string,
  density?: number
) {
  const ImageMap = {
    bash: "./Bash_light.svg",
    boottrap: "./bootstrap.svg",
    css: "./css_old.svg",
    github: "./GitHub_light.svg",
    html5: "./html5.svg",
    js: "./JS.svg",
    linux: "./linux.svg",
    mui: "./materialui.svg",
    mysql: "./mysql.svg",
    php: "./PHP.svg",
    playwright: "./playwright.svg",
    powershell: "./powershell.svg",
    python: "./Python.svg",
    react: "./react.svg",
    salesforce: "./salesforce.svg",
    typescript: "./TypeScript.svg",
    windows: "./windows.svg",
  };
  const setPattern = pattern || "random";
  const setDensity = density || 4;
  let inc = 0;
  let tiles: Array<React.JSX.Element> = [];
  const randTile = (): Array<Skills> => {
    let curIndex = skills.length;
    while (curIndex !== 0) {
      const randIndex = Math.floor(Math.random() * curIndex);
      curIndex -= 1;
      const temp = skills[curIndex];
      skills[curIndex] = skills[randIndex];
      skills[randIndex] = temp;
    }
    return skills;
  };
  randTile();
  skills.forEach((skill) => {
    const imgSrc = ImageMap[skill];
    tiles.push(
      <Grid size={1} key={"grid_" + inc++} id={skill + "_" + inc++}>
        <img
          width={50}
          height={50}
          src={imgSrc}
          key={skill + "_" + inc++}
          id={skill + "_" + inc++}
          className={
            skill === "typescript" || skill === "github" || skill === "bash" ?
              "svg"
            : ""
          }
        />
      </Grid>
    );
  });
  const repBlank = (count: number) => {
    let blanks: Array<React.JSX.Element> = [];
    for (let i = 0; i < count; i++) {
      blanks.push(
        <Grid size={1} key={"grid_" + inc++} id={"grid_" + inc++}>
          <img
            width={50}
            key={"blank_" + inc++}
            id={"blank_" + inc++}
            height={50}
            style={{ opacity: 0 }}
          />
        </Grid>
      );
    }
    return blanks;
  };
  let output: Array<React.JSX.Element> = [];
  switch (setPattern) {
    case "random":
      for (let r = 0; r < rows; r++) {
        output = output.concat(
          repBlank(Math.floor(Math.random() * setDensity))
        );
        const t = r > tiles.length - 1 ? r % tiles.length : r;
        output.push(tiles[t]);
        if (r % setDensity !== 0) {
          output = output.concat(repBlank(setDensity - (r % setDensity)));
        }
      }
      break;
    case "spiral":
      for (let r = 0; r < rows; r++) {
        const t = r > tiles.length - 1 ? r % tiles.length : r;
        output.push(tiles[t]);
        output = output.concat(repBlank(setDensity - (r % setDensity)));
      }
  }
  return output;
}

export default function PortSkills() {
  return (
    <Grid container>
      <Grid size={{ xs: 12, xl: 3 }} id="skills_left_cont">
        <Typography variant="h5" marginTop={5}>
          The Skills...
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
              "boottrap",
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
            16,
            "spiral",
            4
          )}
        </Grid>
      </Grid>
      <Grid size={{ xs: 12, xl: 8 }} sx={{ textAlign: "left", marginTop: 1 }}>
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
                height: 250,
                textAlign: "center",
                mx: "auto",
              }}
            >
              <Box
                component="img"
                src="./sylphaxiom_web_512x.svg"
                alt="curious guy in a browser"
                className="svg"
                sx={{
                  width: "200px",
                  height: "200px",
                  float: "left",
                  display: { xs: "none", md: "flex" },
                  marginRight: 8,
                }}
              />
              <Typography variant="h5" sx={{ pt: 1 }}>
                Sylphaxiom Creative
              </Typography>
              <Typography sx={{ py: 2 }}>
                This is my current, primary project. It's a web application
                built with MUI and React for the frontend. There is currently no
                backend functionality required. More will be added as I continue
                to work on this long-running project.
              </Typography>
            </Grid>
          </Grid>
          <Grid size={6}>
            <Grid
              sx={{
                maxWidth: 750,
                height: 250,
                textAlign: "center",
                mx: "auto",
              }}
            >
              <Box
                component="img"
                src="./kothis.svg"
                alt="Logo of Kothis, a D20 with designs on it."
                className="svg"
                sx={{
                  width: "200px",
                  height: "200px",
                  float: "left",
                  display: { xs: "none", md: "flex" },
                  marginRight: 8,
                }}
              />
              <Typography variant="h5" sx={{ pt: 1 }}>
                Kothis Portal
              </Typography>
              <Typography sx={{ py: 2 }}>
                This has been my obsession lately. It uses Auth0 for
                authentication, the backend is built as a set of RESTful APIs
                which do the work between my DB and the React frontend. This
                site will grow to be the main hub for my worldbuilding and TTRPG
                games.
              </Typography>
            </Grid>
          </Grid>
          <Divider orientation="horizontal" sx={{ width: 0.75, mx: "auto" }} />
          <Grid size={6}>
            <Typography variant="h4" sx={{ m: 3, textAlign: "center" }}>
              Other Skills
            </Typography>
          </Grid>
          <Divider orientation="horizontal" sx={{ width: 0.75, mx: "auto" }} />
          <Grid
            size={6}
            container
            sx={{
              width: 0.8,
              mx: "auto",
              minHeight: 250,
              textAlign: "center",
            }}
          >
            <Grid size={{ xs: 6, md: 3 }}>
              <Typography variant="h5" sx={{ py: 2 }}>
                Asset/Logo Creation
              </Typography>
              <div style={{ alignContent: "center" }}>
                <img
                  width={75}
                  height={75}
                  style={{ marginRight: 15 }}
                  src="./map_draw_350x.svg"
                  className="svg"
                />
                <img
                  width={75}
                  height={75}
                  style={{ marginLeft: 15 }}
                  src="./talas-hey-buddy.svg"
                  className=""
                />
                <img
                  width={75}
                  height={75}
                  style={{ marginLeft: 15 }}
                  src="./cow_asset-20x15.svg"
                  className="svg"
                />
              </div>
            </Grid>
            <Grid size={{ xs: 6, md: 3 }}>
              <Typography sx={{ py: 2 }}>
                Necessity is the mother of invention. When you need something,
                you might as well make it! This is how we discover new-found
                skills like SVG creation and other forms of digital art. My work
                with Blender and 3D has been a thrilling adventure so far!
              </Typography>
            </Grid>
          </Grid>
          <Grid
            size={6}
            container
            sx={{
              width: 0.8,
              mx: "auto",
              minHeight: 250,
              textAlign: "center",
            }}
          >
            <Grid size={{ xs: 6, md: 3 }}>
              <Typography variant="h5" sx={{ py: 2 }}>
                Worldbuilding/Storytelling
              </Typography>
              <div style={{ alignContent: "center" }}>
                <img
                  width={75}
                  height={75}
                  style={{ marginRight: 15, borderRadius: 5 }}
                  src="./Maze.jpg"
                />
                <img
                  width={75}
                  height={75}
                  style={{ marginLeft: 15 }}
                  src="./kothis.svg"
                  className="svg"
                />
                <img
                  width={75}
                  height={75}
                  style={{ marginLeft: 15, borderRadius: 5 }}
                  src="./OneNote.png"
                />
              </div>
            </Grid>
            <Grid size={{ xs: 6, md: 3 }}>
              <Typography sx={{ py: 1 }}>
                Writing is my oldest passion. Since my teen years, my writing
                has branched out beyond mere fiction. I have been building an
                entire world from the ground up! This world is called Kothis and
                it is the setting for a few D&D campaigns with the goal of
                becoming fully published setting (possibly with some side
                novels)
              </Typography>
            </Grid>
          </Grid>
          <Grid
            size={6}
            container
            sx={{
              width: 0.8,
              mx: "auto",
              minHeight: 250,
              textAlign: "center",
            }}
          >
            <Grid size={{ xs: 6, md: 3 }}>
              <Typography variant="h5" sx={{ py: 2 }}>
                Web Development/Scripting
              </Typography>
              <Grid direction={"row"} style={{ alignContent: "center" }}>
                <img
                  width={75}
                  height={75}
                  style={{ marginRight: 15 }}
                  src="./powershell.svg"
                  className=""
                />
                <img
                  width={75}
                  height={75}
                  style={{ marginLeft: 15 }}
                  src="./react.svg"
                  className=""
                />
                <img
                  width={75}
                  height={75}
                  style={{ marginLeft: 15 }}
                  src="./Python.svg"
                  className=""
                />
              </Grid>
            </Grid>
            <Grid size={{ xs: 6, md: 3 }}>
              <Typography sx={{ py: 1 }}>
                Technology stacks have changed, but passion for code sure
                hasn't. I have been trying to keep up with modern frameworks and
                have expanded my skillset to include React, TypeScript, and
                Playwright for testing. I still love PHP for backend work, but I
                am always eager to learn a new library or framework as needed.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
