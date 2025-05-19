import { Box, Typography } from "@mui/material";

const SectionHeading: React.FunctionComponent<{
  title: string;
}> = ({ title }) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", p: 2, m: 0 }}>
      <Typography variant="h1" sx={{ textAlign: "center" }}>
        {title}
      </Typography>
    </Box>
  );
};

export default SectionHeading;
