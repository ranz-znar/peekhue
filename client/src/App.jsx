import "./App.css";
import { useState } from "react";
import { colors, Container, Typography } from "@mui/material";
import UrlInput from "./components/UrlInput";
import ColorPalette from "./components/ColorPalette";
import FontList from "./components/FontList";

function App() {
  const [result, setResult] = useState({
    colors: [],
    fonts: [],
  });

  const [loading, setLoading] = useState(false);

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Typography variant="h3" align="center" fontWeight={700} gutterBottom>
        PeekHue
      </Typography>

      <Typography align="center" color="text.secondary" sx={{ mb: 5 }}>
        Extract colors and fonts from any website.
      </Typography>

      <UrlInput
        setResult={setResult}
        loading={loading}
        setLoading={setLoading}
      />

      <ColorPalette colors={result.colors} />

      <FontList fonts={result.fonts} />
    </Container>
  );
}

export default App;
