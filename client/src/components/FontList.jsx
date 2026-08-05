import { Box, Stack, Typography } from "@mui/material";

function FontList({ fonts }) {
  if (!fonts.length) return null;

  return (
    <Box
      sx={{
        mt: 4,
        p: 3,
        bgcolor: "#fff",
        border: "1px solid #E5E7EB",
        borderRadius: 3,
      }}
    >
      <Typography variant="h6" fontWeight={600} mb={3}>
        Fonts
      </Typography>

      <Stack spacing={1.5}>
        {fonts.map((font) => (
          <Box
            key={font}
            sx={{
              px: 2,
              py: 1.5,
              border: "1px solid #E5E7EB",
              borderRadius: 2,
            }}
          >
            <Typography fontWeight={500}>{font}</Typography>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}

export default FontList;
