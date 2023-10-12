import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#010326",
      dark: "#0D0D0D",
      contrastText: "#fff",
    },
    secondary: {
      light: "#EAD4C3",
      main: "#D9A566",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
