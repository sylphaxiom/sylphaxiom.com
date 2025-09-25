import * as React from "react";
import * as motion from "motion/react-client";
import * as motions from "motion/react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import ButtonBase from "@mui/material/ButtonBase";
import Tooltip from "@mui/material/Tooltip";
import * as FileSaver from "file-saver";

export default function Portfolio() {
  const { scrollYProgress } = motions.useScroll();
  const dudeRef = React.useRef(null); // holds the dude
  //const [topVal, setTopVal] = React.useState(210);
  const [rays, setRays] = React.useState(0);

  const vh = window.innerHeight;
  let point = vh - 75; // Y @ top of dude rel: bottom
  let point2 = point - 135; // Y @ bottom of Dude rel: bottom

  const scrollClimber = motions.useTransform(
    scrollYProgress,
    [0, 1],
    [point2, 500]
  );
  const topClimber = motions.useTransform(
    scrollYProgress,
    [0, 1],
    [point, 635]
  );
  const bottomClimber = motions.useTransform(
    scrollYProgress,
    [0, 1],
    [vh - point2, 419]
  );

  React.useEffect(() => {
    const dudeAnchor = dudeRef.current;
    if (dudeAnchor) {
      //const climber = (dudeAnchor as HTMLImageElement).getBoundingClientRect();
      //setTopVal(climber.bottom - 500);
    }
    const swapper = setInterval(() => {
      setRays(rays === 0 ? 1 : 0);
    }, 1000);
    return () => clearInterval(swapper);
  }, [rays]);

  const downloadCV = () => {
    FileSaver.saveAs("./jacob_pell_resume.pdf", "jacob_pell_resume.pdf");
  };

  return (
    <Box sx={{ width: 1 }} id="portfolio_content">
      <motions.AnimatePresence mode="wait">
        <Box
          id="climber"
          style={{
            position: "fixed",
            left: 0,
            bottom: 0,
            top: 0,
            width: "60px",
          }}
        >
          <motion.div
            id="rope-1"
            style={{
              position: "fixed", //const
              top: 0, //const
              left: 34, //const
              bottom: topClimber, //135px from the top
              width: 2, //const
              originY: 0, //const
              backgroundColor: "black", //const
            }}
          />
          <motion.img
            className="climberBg"
            id="scrollDude"
            key="scrollDude"
            alt="Just a dude rapelling down the DOM"
            style={{
              width: 60,
              height: 135,
              position: "fixed",
              bottom: scrollClimber,
            }}
            ref={dudeRef}
            src="./climber.svg"
          />
          <motion.div
            id="rope-2"
            // ref={ropeRef}
            style={{
              scaleY: 1, //scrollYProgress,
              position: "fixed",
              top: bottomClimber,
              left: 34, //const
              bottom: 500, //const
              width: 2, //const
              originY: point2, //const
              backgroundColor: "black", //const
            }}
          />
          <motion.img
            className="climberBg"
            id="ropeBottom"
            key="ropeBottom"
            alt="some squiggles that look like a dangling rope"
            style={{
              position: "fixed",
              left: 0,
              bottom: 0,
              width: 60,
              height: 500,
            }}
            src="./rope-bottom.svg"
          />
        </Box>
      </motions.AnimatePresence>
      <Grid container id="portHead" width={1}>
        <Grid direction={"column"} size={3}>
          <Paper
            elevation={8}
            sx={{
              width: 350,
              height: 350,
              borderRadius: "100%",
              paddingTop: "25px",
              backgroundColor: "teal",
              mx: "auto",
            }}
          >
            <img
              src="./9-2025_headshot_1x1.png"
              alt="Dapper photo of Jacob Pell with his magnificent beard"
              width={300}
              height={300}
              id="portfolio_img"
            />
          </Paper>
        </Grid>
        <Grid size={9} container sx={{ alignContent: "center" }}>
          <Typography variant="h2" sx={{ justifySelf: "left" }}>
            Jacob Pell
          </Typography>
          <Grid direction={"row"} container size={12} sx={{ mt: "20px" }}>
            <svg width="100%" height="30px">
              <polygon width="15px" points="0,5 0,15 600,15 500,5" />
            </svg>
            <Typography variant="h5" sx={{ ml: 0, mr: "20px" }}>
              Full-Stack Developer
            </Typography>
            <Divider flexItem orientation="vertical" sx={{}} />
            <Typography variant="h5" sx={{ mx: "20px" }}>
              Automation and Scripting Specialist
            </Typography>
            <Divider flexItem orientation="vertical" />
            <Typography variant="h5" sx={{ mx: "20px" }}>
              Author/Worldbuilder
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid container>
        <Grid size={3}>
          <Typography variant="h5" marginTop={5}>
            A Brief History...
          </Typography>
          <Grid container direction={"column"} sx={{ alignContent: "center" }}>
            <img
              width={40}
              height={30}
              alt="a flying saucer"
              src="./saucer_asset-20x15.svg"
            />
            <motion.img
              layout
              style={{}}
              width={40}
              height={30}
              alt="a rays"
              src={"./rays" + rays + "_asset-20x15.svg"}
            />
            <img
              width={40}
              height={30}
              alt="a cow"
              src="./cow_asset-20x15.svg"
            />
          </Grid>
        </Grid>
        <Grid size={8} sx={{ textAlign: "left", mt: 4 }}>
          <Typography sx={{ py: 2 }}>
            Once upon a time, there was this guy who liked stuff and did
            things...
          </Typography>
          <Typography sx={{ py: 2 }}>
            ...Only joking, nobody wants to read that. If you want to read
            something,{" "}
            <a id="SotN_ad" href="https://a.co/d/6Mezoxp">
              here
            </a>{" "}
            is a small book you can read (I wrote that too, don't worry.) If
            you're here, you are looking to know who I am, and what I can do. I
            Got my AAS in software development with a certificate in web
            application development in 2020. Since then I have spent most of my
            time working in IT infrastructure where I applied my development
            skills to automation and scripting. I have never left development
            entirely, but my web work took a backseat while life stepped in the
            way and I focused on building my family rather than my portfolio. I
            never stopped learning and when I stepped back onto the development
            scene these past couple years, I started learning modern frameworks
            and patterns. PHP is still my preferred backend language, which I
            use to build backend APIs so I can keep my applications RESTful and
            scalable.
          </Typography>
          <Typography sx={{ py: 2 }}>
            It is my dream to build a company and space for other creative
            individuals, like myself, to create and grow with eachother. We all
            need community, and the artistic community is a beautiful one. While
            we may not be a company yet, this site also serves as a central
            location for Sylphaxiom Creative. I love creating and want to give
            space for others to do so as well! I am starting by bringing in
            creative types who want to contribute something to the world, but
            don't know where to start (something I struggle with myself). My
            hope is that we can all work together to build applications,
            graphics, commissioned art pieces, articles, books, maps,
            adventures, and more! I dabble in each of these things myself, but I
            want to surround myself with people who are more talented and
            intelligent than myself. Afterall, that is how we best learn of the
            world, diversity and open-mindedness. One day I hope Sylphaxiom
            Creative will be the creative community I want it to be, in the
            meantime, here some other stuff I've made as well as my resume for
            anyone who would like to pay me to keep doing this sort of thing.
          </Typography>
          <Typography sx={{ py: 2 }}>
            Thanks for visiting, and I hope to hear from you! - Jacob Pell
          </Typography>
        </Grid>
      </Grid>
      <Divider sx={{ my: 3 }} />
      <Grid container sx={{ justifyContent: "center", alignItems: "center" }}>
        <img
          width={450}
          height={150}
          src="./filligree.svg"
          alt="some pretty curves"
        />
        <Tooltip title="Resume">
          <ButtonBase
            id="ballet"
            aria-label="download_resume"
            onClick={downloadCV}
          >
            Resume
          </ButtonBase>
        </Tooltip>
        <img
          width={450}
          height={150}
          src="./filligree.svg"
          alt="some pretty curves"
        />
      </Grid>
      <Divider sx={{ my: 3 }} />
      <Grid container>
        <Grid size={3}>
          <Typography variant="h5" marginTop={5}>
            The Skills...
          </Typography>
          <Grid
            container
            sx={{ padding: 3, marginTop: 3 }}
            rowSpacing={3}
            id="logoTiles"
            columns={4}
          >
            <Grid size={1}>
              <img width={50} height={50} style={{ opacity: 0 }} />
            </Grid>
            <Grid size={1}>
              <img width={50} height={50} src="./PHP.svg" />
            </Grid>
            <Grid size={1}>
              <img width={50} height={50} src="./Bash_light.svg" />
            </Grid>
            <Grid size={1}>
              <img width={50} height={50} style={{ opacity: 0 }} />
            </Grid>
            <Grid size={1}>
              <img width={50} height={50} src="./JS.svg" />
            </Grid>
            <Grid size={1}>
              <img width={50} height={50} style={{ opacity: 0 }} />
            </Grid>
            <Grid size={1}>
              <img width={50} height={50} style={{ opacity: 0 }} />
            </Grid>
            <Grid size={1}>
              <img width={50} height={50} src="./css_old.svg" />
            </Grid>
            <Grid size={1}>
              <img width={50} height={50} style={{ opacity: 0 }} />
            </Grid>
            <Grid size={1}>
              <img width={50} height={50} style={{ opacity: 0 }} />
            </Grid>
            <Grid size={1}>
              <img width={50} height={50} src="./mysql.svg" />
            </Grid>
            <Grid size={1}>
              <img width={50} height={50} style={{ opacity: 0 }} />
            </Grid>
            <Grid size={1}>
              <img width={50} height={50} src="./playwright.svg" />
            </Grid>
            <Grid size={1}>
              <img width={50} height={50} src="./salesforce.svg" />
            </Grid>
            <Grid size={1}>
              <img width={50} height={50} style={{ opacity: 0 }} />
            </Grid>
            <Grid size={1}>
              <img width={50} height={50} src="./GitHub_light.svg" />
            </Grid>
            <Grid size={1}>
              <img width={50} height={50} style={{ opacity: 0 }} />
            </Grid>
            <Grid size={1}>
              <img width={50} height={50} src="./linux.svg" />
            </Grid>
            <Grid size={1}>
              <img width={50} height={50} src="./TypeScript.svg" />
            </Grid>
            <Grid size={1}>
              <img width={50} height={50} style={{ opacity: 0 }} />
            </Grid>
            <Grid size={1}>
              <img width={50} height={50} src="./html5.svg" />
            </Grid>
            <Grid size={1}>
              <img width={50} height={50} style={{ opacity: 0 }} />
            </Grid>
            <Grid size={1}>
              <img width={50} height={50} style={{ opacity: 0 }} />
            </Grid>
            <Grid size={1}>
              <img width={50} height={50} src="./materialui.svg" />
            </Grid>
          </Grid>
        </Grid>
        <Grid size={8} sx={{ textAlign: "left", marginTop: 1 }}>
          <Grid
            container
            sx={{ padding: 3 }}
            rowSpacing={3}
            id="infoTiles"
            columns={6}
          >
            <Grid size={4}>
              <Container
                sx={{
                  width: 750,
                  height: 250,
                  textAlign: "center",
                }}
              >
                <img
                  src="./sylphaxiom_web_512x.svg"
                  width={200}
                  height={200}
                  className=""
                  style={{ display: "box", float: "left", marginRight: 8 }}
                />
                <Typography variant="h5" sx={{ pt: 1 }}>
                  Sylphaxiom Creative
                </Typography>
                <Typography sx={{ py: 2 }}>
                  This is my current, primary project. It's a web application
                  built with MUI and React for the frontend. There is currently
                  no backend functionality required. More will be added as I
                  continue to work on this long-running project.
                </Typography>
              </Container>
            </Grid>
            <Grid size={2}>
              <div
                style={{ border: "none", width: "350px", height: "250px" }}
              />
            </Grid>
            <Grid size={2}>
              <Container
                sx={{
                  width: 350,
                  height: 250,
                  textAlign: "center",
                }}
              >
                <Typography variant="h5" sx={{ py: 2 }}>
                  Asset/Logo Creation
                </Typography>
                <div style={{ alignContent: "center" }}>
                  <img
                    width={75}
                    height={75}
                    style={{ marginRight: 15 }}
                    src="./map_draw_350x.svg"
                  />
                  <img
                    width={75}
                    height={75}
                    style={{ marginLeft: 15 }}
                    src="./talas-hey-buddy.svg"
                  />
                  <img
                    width={75}
                    height={75}
                    style={{ marginLeft: 15 }}
                    src="./cow_asset-20x15.svg"
                  />
                </div>
                <Typography sx={{ py: 1 }}>
                  Necessity is the mother of invention. When you need something,
                  you might as well make it! This is how we discover new-found
                  skills like SVG creation and other forms of digital art. My
                  work with Blender and 3D has been a thrilling adventure so
                  far!
                </Typography>
              </Container>
            </Grid>
            <Grid size={2}>
              <Container
                sx={{
                  width: 350,
                  height: 250,
                  textAlign: "center",
                }}
              >
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
                  />
                  <img
                    width={75}
                    height={75}
                    style={{ marginLeft: 15, borderRadius: 5 }}
                    src="./OneNote.png"
                  />
                </div>
                <Typography sx={{ py: 1 }}>
                  Writing is my oldest passion. Since my teen years, my writing
                  has branched out beyond mere fiction. I have been building an
                  entire world from the ground up! This world is called Kothis
                  and it is the setting for a few D&D campaigns with the goal of
                  becoming fully published setting (possibly with some side
                  novels)
                </Typography>
              </Container>
            </Grid>
            <Grid size={2}>
              <Container
                sx={{
                  width: 350,
                  height: 250,
                  textAlign: "center",
                }}
              >
                <Typography variant="h5" sx={{ py: 2 }}>
                  Web Development/Scripting
                </Typography>
                <div style={{ alignContent: "center" }}>
                  <img
                    width={75}
                    height={75}
                    style={{ marginRight: 15 }}
                    src="./powershell.svg"
                  />
                  <img
                    width={75}
                    height={75}
                    style={{ marginLeft: 15 }}
                    src="./react.svg"
                  />
                  <img
                    width={75}
                    height={75}
                    style={{ marginLeft: 15 }}
                    src="./Python.svg"
                  />
                </div>
                <Typography sx={{ py: 1 }}>
                  Technology stacks have changed, but passion for code sure
                  hasn't. I have been trying to keep up with modern frameworks
                  and have expanded my skillset to include React, TypeScript,
                  and Playwright for testing. I still love PHP for backend work,
                  but I am always eager to learn a new library or framework as
                  needed.
                </Typography>
              </Container>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
