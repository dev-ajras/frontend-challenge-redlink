import {
  Alert,
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useTheme } from "@mui/material";
import SearchInput from "../components/SearchInput";

function Pokemones() {
  const [pokemones, setPokemones] = useState([]);
  const [searchPokemon, setSearchPokemon] = useState("");
  const [pokemonFiltrado, setPokemonFiltrado] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemones = async () => {
      try {
        const response = await axios.get(
          "https://pokeapi.co/api/v2/pokemon/?limit=50"
        );
        console.log(response);
        setPokemones(response.data.results);
        setPokemonFiltrado(response.data.results);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchPokemones();
  }, []);

  const theme = useTheme();

  const onChangePokemon = (e) => {
    const currentValue = e.target.value.toLowerCase();
    setSearchPokemon(currentValue);
  };

  useEffect(() => {
    const filteredPokemon = pokemones.filter((pokemon) =>
      pokemon.name.includes(searchPokemon)
    );
    setPokemonFiltrado(filteredPokemon);
  }, [searchPokemon]);

  return (
    <section>
      <SearchInput onChangePokemon={onChangePokemon} />
      {loading ? (
        <article style={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress sx={{ my: 2 }} color='secondary' />
        </article>
      ) : pokemonFiltrado.length > 0 ? (
        <article>
          <Table sx={{ my: 2 }}>
            <TableHead sx={{ backgroundColor: theme.palette.primary.dark }}>
              <TableRow>
                <TableCell>
                  <Typography color='secondary'>Pokemon {name}</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {pokemonFiltrado &&
                pokemonFiltrado.map((pokemon, idx) => (
                  <TableRow key={idx}>
                    <TableCell
                      sx={{ backgroundColor: theme.palette.secondary.light }}
                    >
                      <Typography>{pokemon.name}</Typography>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </article>
      ) : (
        <Alert severity='info' sx={{ my: 2 }}>
          No hay resultados de "{searchPokemon}", por favor realiza otra
          busqueda
        </Alert>
      )}
    </section>
  );
}

export default Pokemones;
