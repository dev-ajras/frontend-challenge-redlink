import { Typography } from "@mui/material";

import pikachu from "/assets/background/pikachu.webp";

function Home() {
  return (
    <section
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Typography
        sx={{
          borderBottom: "3px solid",
        }}
        align='center'
        variant='h4'
      >
        Home
      </Typography>
      <img
        style={{ width: "30%", marginTop: 30 }}
        src={pikachu}
        alt='fondo home'
      />
    </section>
  );
}

export default Home;
