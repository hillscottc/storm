import { Box, ThemeProvider, TextField } from "@mui/material";
import SectionHeading from "../../components/SectionHeading";
import theme from "../../theme";
import { StyledBox, FormDataInterface } from "./InteractionForm";

const TopicChoice: React.FunctionComponent<FormDataInterface> = ({
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
        <SectionHeading title="Topic (optional)" />
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <TextField
            size="small"
            onChange={(e) =>
              setFormData({ ...formData, topic: e.target.value })
            }
            value={formData.topic}
            label={"any topic"}
            variant="filled"
            error={formError && !formData.topic}
          />
        </Box>
      </StyledBox>
    </ThemeProvider>
  );
};

export default TopicChoice;
