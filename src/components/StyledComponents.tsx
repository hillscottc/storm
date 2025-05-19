import { styled } from "@mui/material";

export const StyledBox = styled("div")(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.primary.main,
  display: "column",
  justifyContent: "center",
  margin: "0",
}));
