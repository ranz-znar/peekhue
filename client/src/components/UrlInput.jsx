import { useState, useEffect } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { analyzeWebsite } from "../services/api";

function UrlInput({ setResult, loading, setLoading }) {
  const [url, setUrl] = useState("");

  const loadingMessages = [
    "Connecting...",
    "Loading website...",
    "Extracting colors...",
    "Finding fonts...",
    "Almost done...",
  ];

  const [messageIndex, setMessageIndex] = useState(0);

  const handleAnalyze = async () => {
    try {
      setLoading(true);

      const data = await analyzeWebsite(url);

      setResult(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!loading) {
      setMessageIndex(0);
      return;
    }

    const interval = setInterval(() => {
      setMessageIndex((prev) =>
        prev < loadingMessages.length - 1 ? prev + 1 : prev,
      );
    }, 1200);

    return () => clearInterval(interval);
  }, [loading]);

  return (
    <Box
      sx={{
        bgcolor: "#fff",
        border: "1px solid #E5E7EB",
        borderRadius: 3,
        p: 2.5,
      }}
    >
      <Typography
        variant="subtitle2"
        sx={{
          mb: 1.5,
          color: "text.secondary",
          fontWeight: 600,
        }}
      >
        Website URL
      </Typography>

      <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
        <TextField
          disabled={loading}
          fullWidth
          placeholder="https://example.com"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !loading) {
              handleAnalyze();
            }
          }}
          size="small"
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: 2,

              "& fieldset": {
                borderColor: "#E5E7EB",
              },

              "&:hover fieldset": {
                borderColor: "#D1D5DB",
              },

              "&.Mui-focused fieldset": {
                borderColor: "#6366F1",
              },
            },
          }}
        />

        <Button
          disabled={loading}
          variant="contained"
          startIcon={<SearchIcon />}
          onClick={handleAnalyze}
          sx={{
            minWidth: 150,
            borderRadius: 2,
            textTransform: "none",
            fontWeight: 600,
            boxShadow: "none",

            "&:hover": {
              boxShadow: "none",
            },
          }}
        >
          {loading ? "Analyzing..." : "Analyze"}
        </Button>
      </Stack>
      {loading && (
        <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
          {loadingMessages[messageIndex]}
        </Typography>
      )}
    </Box>
  );
}

export default UrlInput;
