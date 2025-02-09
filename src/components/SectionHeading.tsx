import { Box, Typography } from "@mui/material";

const SectionHeading: React.FunctionComponent<{
  title: string;
}> = ({ title }) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", p: 1, m: 1 }}>
      <Typography variant="h4" gutterBottom sx={{ textAlign: "center" }}>
        {title}
      </Typography>
    </Box>
  );
};

export default SectionHeading;
