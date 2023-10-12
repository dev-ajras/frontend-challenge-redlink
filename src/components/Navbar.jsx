import { useTheme } from "@emotion/react";
import { AppBar, Stack, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

import pokebalLogo from "/assets/icons/pokeballLogo.svg";

function Navbar() {
  const theme = useTheme();

  return (
    <AppBar sx={{ backgroundColor: theme.palette.primary.dark }}>
      <Toolbar>
        <Link style={{ textDecoration: "none", color: "white" }} to='/home'>
          <Stack direction={"row"} alignItems='center' spacing={1}>
            <img width={40} src={pokebalLogo} alt='pokeball logo' />
          </Stack>
        </Link>
        <Stack
          sx={{ flexGrow: 1 }}
          direction={"row"}
          spacing={{ xs: 1, md: 2 }}
          justifyContent='flex-end'
        >
          <Link style={{ textDecoration: "none", color: "white" }} to='/home'>
            <Typography>Home</Typography>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to='/pokemones'
          >
            <Typography>Pokemones</Typography>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to='/contacto'
          >
            <Typography>Contacto</Typography>
          </Link>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
