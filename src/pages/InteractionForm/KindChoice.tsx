import {
  FormControl,
  FormHelperText,
  ThemeProvider,
  Select,
  MenuItem,
  Box,
} from "@mui/material";
import SectionHeading from "../../components/SectionHeading";
import theme from "../../theme";
import { FormDataInterface } from "./InteractionForm";
import { chatTypes } from "../../constants.ts";
import { StyledBox } from "../../components/StyledComponents.tsx";

const KindChoice: React.FunctionComponent<FormDataInterface> = ({
  formData,
  setFormData,
  formError,
  //   setFormError,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <StyledBox>
        <SectionHeading title="Kind of interaction" />
        <Box sx={{ display: "flex", justifyContent: "center", p: 0, m: 0 }}>
          <FormControl sx={{ minWidth: 120 }} error={formError}>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              sx={{ marginTop: "15px", borderRadius: "5px" }}
              value={formData.chatType}
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
        </Box>

        <Box></Box>
      </StyledBox>
    </ThemeProvider>
  );
};

export default KindChoice;
