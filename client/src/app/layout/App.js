import {
  Container,
  createTheme,
  ThemeProvider,
  CssBaseline,
} from "@mui/material";
import { useState } from "react";
import Catalog from "../../features/catalog/catalog";
import Header from "./header";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? "dark" : "light";

  const darkTheme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: !darkMode ? "#eaeaea" : "#121212",
      },
    },
  });

  function handleThemeChange() {
    setDarkMode(!darkMode);
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange} />
      <Container>
        <Catalog />
      </Container>
    </ThemeProvider>
  );
}

export default App;
