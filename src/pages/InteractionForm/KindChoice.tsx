import {
  FormControl,
  FormHelperText,
  ThemeProvider,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import SectionHeading from "../../components/SectionHeading";
import theme from "../../theme";
import { StyledBox, FormDataInterface } from "./InteractionForm";
import { chatTypes } from "../../constants.ts";

const LABEL_TEXT = "Kind of interaction";

const KindChoice: React.FunctionComponent<FormDataInterface> = ({
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
        <SectionHeading title={LABEL_TEXT} />

        <FormControl sx={{ minWidth: 120 }} error={formError}>
          <InputLabel id="demo-simple-select-label">{LABEL_TEXT}</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={formData.chatType}
            label={LABEL_TEXT}
            onChange={(e) =>
              setFormData({ ...formData, chatType: e.target.value })
            }
          >
            {chatTypes.map((value, index) => (
              <MenuItem key={index} value={value}>
                {value}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>
            {!formData.chatType && "Please select an option."}
          </FormHelperText>
        </FormControl>
      </StyledBox>
    </ThemeProvider>
  );
};

export default KindChoice;
