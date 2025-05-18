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
import { StyledBox, FormDataInterface } from "./InteractionForm";
import { sampleItems } from "../../constants";
import WordsDialog from "./WordsDialog";

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
        <SectionHeading title="Choose two people" />
        <Box
          sx={{
            display: "grid",
            justifyContent: "center",
            marginBottom: "5px",
          }}
        >
          <Typography variant="body1" gutterBottom sx={{ textAlign: "center" }}>
            Enter two people or things that can interact.
          </Typography>
          <Typography variant="body1" gutterBottom>
            For example:&nbsp;
            {sampleItems.map((item) => `${item}, `)} etc.
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
          <Box sx={{ display: "flex", paddingBottom: 1 }}>
            <TextField
              size="small"
              sx={{ paddingRight: 1, marginRight: 2 }}
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
              sx={{ paddingRight: 1, marginRight: 2 }}
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
            setFormData({ ...formData, person1: selectedValue });
          }}
        />
        <br /> <br />
      </StyledBox>
    </ThemeProvider>
  );
};

export default PeopleChoice;
