import { Box, Stack, Typography } from "@mui/material";

function ColorPalette({ colors }) {
  if (!colors.length) return null;

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
        Colors
      </Typography>

      <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
        {colors.map((color) => (
          <Box
            key={color}
            sx={{
              width: 90,
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: 70,
                bgcolor: color,
                borderRadius: 2,
                border: "1px solid #E5E7EB",
              }}
            />

            <Typography variant="body2" align="center" mt={1} fontWeight={500}>
              {color}
            </Typography>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}

export default ColorPalette;
