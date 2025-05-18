import {
  Typography,
  FormControl,
  Box,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormHelperText,
  ThemeProvider,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import SectionHeading from "../../components/SectionHeading";
import theme from "../../theme";
import { StyledBox, FormDataInterface } from "./InteractionForm";
import { chatTypes } from "../../constants.ts";

const KindChoice: React.FunctionComponent<FormDataInterface> = ({
  formData,
  setFormData,
  // formError,
  //   setFormError,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <StyledBox
        sx={{ display: "flex", justifyContent: "center", marginBottom: 4 }}
      >
        <SectionHeading title="Create an interaction!" />
        <FormControl>
          <RadioGroup
            row
            value={formData.chatType}
            name="radio-buttons-group"
            onChange={(e) =>
              setFormData({ ...formData, chatType: e.target.value })
            }
          >
            <Box sx={{ flexGrow: 1 }}>
              <Grid
                container
                spacing={1}
                columns={3}
                sx={{ justifyContent: "center" }}
              >
                {chatTypes.map((value, index) => (
                  <Grid
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    key={index}
                    sx={{
                      borderRadius: 2,
                      backgroundColor: theme.palette.action.active,
                      color: "white",
                      width: 150,
                    }}
                  >
                    <FormControlLabel
                      value={value}
                      key={value}
                      control={
                        <Radio
                          sx={{
                            color: "white",
                            "&.Mui-checked": {
                              color: "magenta",
                            },
                          }}
                        />
                      }
                      label={
                        <Typography variant="button" sx={{ m: 0, p: 0 }}>
                          {value}
                        </Typography>
                      }
                      labelPlacement="end"
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </RadioGroup>
          <FormHelperText>
            {!formData.chatType && "Please select an option."}
          </FormHelperText>
        </FormControl>
      </StyledBox>
    </ThemeProvider>
  );
};

export default KindChoice;
