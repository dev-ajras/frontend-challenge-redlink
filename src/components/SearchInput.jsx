import { TextField } from "@mui/material";
import React from "react";

function SearchInput({ onChangePokemon }) {
  return (
    <TextField
      fullWidth
      color='primary'
      onChange={(e) => onChangePokemon(e)}
      id='Pokemon'
      label='filtrar pokemon'
      variant='filled'
    />
  );
}

export default SearchInput;
