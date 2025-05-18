import { Typography, Box, ThemeProvider, TextField } from "@mui/material";
import SectionHeading from "../../components/SectionHeading";
import theme from "../../theme";
import { StyledBox, FormDataInterface } from "./InteractionForm";

const sampleItems = [
  "Trump",
  "Tupac",
  "Liz Taylor",
  "Ghandi",
  "a cat",
  "Obama",
  "Churchill",
  "a gangster",
  "Malcolm X",
  "Eric Cartman",
  "Taylor Swift",
];

const PeopleChoice: React.FunctionComponent<FormDataInterface> = ({
  formData,
  setFormData,
  formError,
  //   setFormError,
}) => {
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
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <TextField
            size="small"
            onChange={(e) =>
              setFormData({ ...formData, person1: e.target.value })
            }
            value={formData.person1}
            label={"Person 1"}
            variant="filled"
            error={formError && !formData.person1}
            sx={{ paddingRight: 1 }}
          />
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
        </Box>
      </StyledBox>
    </ThemeProvider>
  );
};

export default PeopleChoice;
