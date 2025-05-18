import { useState } from "react";
import {
  Typography,
  Box,
  ThemeProvider,
  TextField,
  Button,
} from "@mui/material";
import SectionHeading from "../../components/SectionHeading";
import theme from "../../theme";
import { FormDataInterface } from "./InteractionForm";
import WordsDialog from "./WordsDialog";
import { StyledBox } from "../../components/StyledComponents";

const PeopleChoice: React.FunctionComponent<FormDataInterface> = ({
  formData,
  setFormData,
  formError,
  //   setFormError,
}) => {
  const [openPeople, setOpenPeople] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  return (
    <ThemeProvider theme={theme}>
      <StyledBox
        sx={{ display: "flex", justifyContent: "center", marginBottom: 4 }}
      >
        <SectionHeading title="Enter two people" />
        <Box
          sx={{
            display: "grid",
            justifyContent: "center",
            marginBottom: "5px",
          }}
        >
          <Typography variant="body1" gutterBottom sx={{ marginTop: "25px" }}>
            Anyone or anything, live or dead, real or fictional.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "column",
            height: "max-content",
            width: "100%",
            padding: 1,
          }}
        >
          <Box sx={{ display: "flex", paddingBottom: 1, marginTop: "5px" }}>
            <TextField
              size="small"
              onChange={(e) =>
                setFormData({ ...formData, person1: e.target.value })
              }
              value={formData.person1}
              label={"Person 1"}
              variant="filled"
              error={formError && !formData.person1}
            />
            <Button
              variant="outlined"
              onClick={() => {
                setOpenPeople(true);
              }}
            >
              ideas
            </Button>
          </Box>

          <Box sx={{ display: "flex" }}>
            <TextField
              size="small"
              onChange={(e) =>
                setFormData({ ...formData, person2: e.target.value })
              }
              value={formData.person2}
              label={"Person 2"}
              variant="filled"
              error={formError && !formData.person2}
            />
            <Button
              variant="outlined"
              onClick={() => {
                setOpenPeople(true);
              }}
            >
              ideas
            </Button>
          </Box>
        </Box>
        <WordsDialog
          selectedValue={selectedValue}
          open={openPeople}
          onClose={() => {
            setOpenPeople(false);
            console.log("selectedValue", selectedValue);
            setFormData({ ...formData, person1: selectedValue });
          }}
          // setSelectedValue={function (value: string): void {
          //   setFormData({ ...formData, person1: selectedValue });
          // }}
        />
        <br /> <br />
      </StyledBox>
    </ThemeProvider>
  );
};

export default PeopleChoice;
