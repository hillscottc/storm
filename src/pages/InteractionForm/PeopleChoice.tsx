import { useState } from "react";
import { Typography, Box, ThemeProvider } from "@mui/material";
import SectionHeading from "../../components/SectionHeading";
import theme from "../../theme";
import { FormDataInterface } from "./InteractionForm";
import WordsDialog from "./WordsDialog";
import { StyledBox } from "../../components/StyledComponents";
import PersonField from "./PersonField";

const PeopleChoice: React.FunctionComponent<FormDataInterface> = ({
  formData,
  setFormData,
  formError,
  //   setFormError,
}) => {
  const [openPeople, setOpenPeople] = useState(false);
  const [selectedValue] = useState("");
  const [personToUpdate, setPersonToUpdate] = useState("person1");

  return (
    <ThemeProvider theme={theme}>
      <StyledBox>
        <SectionHeading title="Enter two people" />
        <Box sx={{ display: "flex", justifyContent: "center", p: 0, m: 0 }}>
          <Typography variant="body1" gutterBottom sx={{ marginTop: "5px" }}>
            Anyone or anything, live or dead, real or fictional.
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", p: 0, m: 0 }}>
          <Box sx={{ display: "block", marginLeft: "25px" }}>
            <PersonField
              {...{
                formData,
                setFormData,
                formError,
                setPersonToUpdate,
                setOpenPeople,
                person: "person1",
              }}
            />

            <PersonField
              {...{
                formData,
                setFormData,
                formError,
                setPersonToUpdate,
                setOpenPeople,
                person: "person2",
              }}
            />
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
          setSelectedValue={function (word: string): void {
            if (personToUpdate === "person1") {
              setFormData({ ...formData, person1: word });
            } else {
              setFormData({ ...formData, person2: word });
            }
            setOpenPeople(false);
          }}
        />
      </StyledBox>
    </ThemeProvider>
  );
};

export default PeopleChoice;
