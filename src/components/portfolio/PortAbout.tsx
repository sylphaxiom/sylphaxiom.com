import * as React from "react";
import * as motion from "motion/react-client";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

export default function PortAbout() {
  const [rays, setRays] = React.useState(0);

  React.useEffect(() => {
    const swapper = setInterval(() => {
      setRays(rays === 0 ? 1 : 0);
    }, 1000);
    return () => clearInterval(swapper);
  }, [rays]);

  return (
    <Grid container>
      <Grid size={{ xs: 12, md: 3 }}>
        <Typography variant="h5" marginTop={5}>
          A Brief History...
        </Typography>
        <Grid
          container
          direction={"column"}
          sx={{ alignContent: "center", display: { xs: "none", md: "flex" } }}
        >
          <img
            width={40}
            height={30}
            alt="a flying saucer"
            src="../resources/saucer_asset-20x15.svg"
            className=""
          />
          <motion.img
            layout
            style={{}}
            width={40}
            height={30}
            alt="a rays"
            src={"../resources/rays" + rays + "_asset-20x15.svg"}
            className="svg"
          />
          <img
            width={40}
            height={30}
            alt="a cow"
            src="../resources/cow_asset-20x15.svg"
            className="svg"
          />
        </Grid>
      </Grid>
      <Grid
        size={{ xs: 12, md: 8 }}
        sx={{ textAlign: { xs: "center", md: "left" }, mt: 4 }}
      >
        <Typography sx={{ py: 2 }}>
          Once upon a time, there was this guy who liked stuff and did things...
        </Typography>
        <Typography sx={{ py: 2 }}>
          ...Only joking, nobody wants to read that. If you want to read
          something,{" "}
          <Link id="SotN_ad" href="https://a.co/d/6Mezoxp">
            here
          </Link>{" "}
          is a small book you can read (I wrote that too, don't worry.) If
          you're here, you are looking to know who I am, and what I can do. I
          Got my AAS in software development in 2020. Since then I have spent
          most of my time working in IT infrastructure where I applied my
          development skills to automation and scripting.
        </Typography>
        <Typography sx={{ py: 2 }}>
          I primarily work with Python, Bash, and PowerShell for automation. I
          have experience with React, JavaScript/TypeScript, CSS, HTML, PHP, and
          MySQL which I use for this website and the{" "}
          <Link id="kothisLink" href="https://kothis.sylphaxiom.com">
            Kothis
          </Link>{" "}
          web application I am building. The code for both are available on my
          GitHub as well as some other samples of my work. Nearly all the images
          in this website (except the logos, of course) were created by me for
          one purpose or another.
        </Typography>
        <Typography sx={{ py: 2 }}>
          This website has another side to it, Sylphaxiom Creative. This is
          where I hope to have others join me one day. I'm a creative person and
          I know many other creative types. I firmly believe that we could all
          be able to live the Star Trek utopia where our energy can be spent on
          innovation and creativity. I want to provide a place for creative
          types to work together on any project they wish. There is always
          someone who will want the weird things you create. I just want to help
          creative weirdo's find each other and the weirdo's who want their
          stuff.
        </Typography>
        <Typography sx={{ py: 2 }}>
          Thanks for visiting, and I hope to hear from you! - Jacob Pell
        </Typography>
      </Grid>
    </Grid>
  );
}
