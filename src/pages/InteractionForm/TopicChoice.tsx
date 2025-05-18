import { Box, ThemeProvider, TextField } from "@mui/material";
import SectionHeading from "../../components/SectionHeading";
import theme from "../../theme";
import { FormDataInterface } from "./InteractionForm";
import { StyledBox } from "../../components/StyledComponents";

const TopicChoice: React.FunctionComponent<FormDataInterface> = ({
  formData,
  setFormData,
  formError,
  //   setFormError,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <StyledBox>
        <SectionHeading title=" (optional) Topic" />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            height: "max-content",
          }}
        >
          <TextField
            size="small"
            sx={{ marginTop: "15px" }}
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
