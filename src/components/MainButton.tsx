import * as React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router";
import { Box } from "@mui/material";
import MuiButton from "@mui/material/Button";
import AdsClickIcon from "@mui/icons-material/AdsClick";

const StyledButton = styled(MuiButton)`
  background-color: #6200ea;
  color: white;
  &:hover {
    background-color: #3700b3;
  }
  padding: 10px 150px;
  border-radius: 20px;
  font-size: 16px;
  margin: 20px;
  font-weight: bold;
` as typeof MuiButton;

interface MainButtonProps {
  target: string;
  text: string;
}

const MainButton: React.FunctionComponent<MainButtonProps> = (props) => {
  return (
    <StyledButton
      to={props.target}
      component={Link}
      size="large"
      variant="contained"
    >
      <Box sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
        <AdsClickIcon />
      </Box>
      {props.text}
    </StyledButton>
  );
};

export default MainButton;
