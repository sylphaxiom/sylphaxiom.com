import * as React from "react";
import Grid from "@mui/material/Grid";

/*************************************
 * Inputs and variations:
 *  - skills: Array<Skills>,
 *  - rows: number,
 *  - pattern?: string,
 *  - density?: number
 * IF pattern is random or undefined
 *  - Calculate number of rows using
 *    - (rows x density) / 4
 * IF pattern is spiral
 *  - density has no effect
 ************************************/

export type Skills =
  | "bash"
  | "bootstrap"
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
    bash: "/resources/Bash_light.svg",
    bootstrap: "/resources/bootstrap.svg",
    css: "/resources/css_old.svg",
    github: "/resources/GitHub_light.svg",
    html5: "/resources/html5.svg",
    js: "/resources/JS.svg",
    linux: "/resources/linux.svg",
    mui: "/resources/materialui.svg",
    mysql: "/resources/mysql.svg",
    php: "/resources/PHP.svg",
    playwright: "/resources/playwright.svg",
    powershell: "/resources/powershell.svg",
    python: "/resources/Python.svg",
    react: "/resources/react.svg",
    salesforce: "/resources/salesforce.svg",
    typescript: "/resources/TypeScript.svg",
    windows: "/resources/windows.svg",
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
  let skipper = 3;
  let repeat = 0;
  if (skills.length < rows) {
    repeat = Math.floor(rows / skills.length);
  }

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
  if (repeat) {
    const extra = rows - skills.length;
    for (let i = 0; i < extra; i++) {
      const index = i >= skills.length - 1 ? i - skills.length : i;
      const skill = skills[index];
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
    }
  }
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
        if (r === skipper) {
          skipper += 4;
          continue;
        }
        output = output.concat(repBlank(4));
      }
      break;
  }
  return output;
}
