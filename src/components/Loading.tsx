import Box from "@mui/material/Box";

export default function Loading() {
  return (
    <Box
      id="loader_scr"
      sx={{
        minWidth: 1,
        p: 0,
        textAlign: "center",
      }}
    >
      <img
        src={"/loading.svg"}
        id="loading_img"
        className="svg"
        alt="A dude waiting by his computer with his 2 cats"
        width={500}
        height={400}
      />
    </Box>
  );
}
