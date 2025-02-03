import { Box, Link, Typography } from "@mui/material";

const Footer: React.FunctionComponent = () => {
  return (
    <Box sx={{ width: "100%", position: "fixed", bottom: 0 }}>
      <Typography
        variant="body2"
        align="center"
        sx={{ color: "text.secondary" }}
      >
        &nbsp; Scott C Hill ,{" ©"}
        {new Date().getFullYear()},&nbsp;
        <Link color="inherit" href="https://github.com/hillscottc/openai-fe2">
          source
        </Link>
      </Typography>
    </Box>
  );
};
export default Footer;
