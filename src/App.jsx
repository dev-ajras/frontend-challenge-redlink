import { Container } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Pokemones from "./pages/Pokemones";
import Contacto from "./pages/Contacto";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Container sx={{ my: 10 }}>
        <Routes>
          <Route path='/' element={<Pokemones />} />
          <Route path='/pokemones' element={<Pokemones />} />
          <Route path='/pokemones/:name' element={<Pokemones />} />
          <Route path='/home' element={<Home />} />
          <Route path='/contacto' element={<Contacto />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
