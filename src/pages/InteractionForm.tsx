import { useState } from "react";
import {
  Button,
  Paper,
  Typography,
  FormControl,
  TextField,
  Box,
  FormControlLabel,
  RadioGroup,
  Radio,
  TextareaAutosize,
  FormHelperText,
  ThemeProvider,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { DNA as DNASpinner } from "react-loader-spinner";
import { fetchChat } from "../utils";
import SectionHeading from "../components/SectionHeading";
import theme from "../theme";

const chatTypes = [
  "rap battle",
  "love song",
  "interview",
  "debate",
  "argument",
  "comedy skit",
];

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

const InteractionForm: React.FunctionComponent = () => {
  const [formData, setFormData] = useState({
    person1: "",
    person2: "",
    chatType: "rap battle",
    topic: "",
  });
  const [chatResults, setChatResults] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [formError, setFormError] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { chatType, person1, person2, topic } = formData;
    if (!chatType || !person1 || !person2) {
      setFormError(true);
      setChatResults("Please fill out all fields.");
      return;
    }
    setFormError(false);

    let content = `Write ${chatType} between ${person1} and ${person2}`;
    if (topic) content += ` with a topic of ${topic}`;

    try {
      setIsLoading(true);
      setChatResults("Thinking...");
      const chatResponse = await fetchChat({ content });
      setChatResults(() => chatResponse || "No response");
      setIsLoading(false);
    } catch (error) {
      setChatResults(`Error: ${error}`);
      setIsLoading(false);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Paper
        elevation={8}
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: "5px",
          margin: "0",
          backgroundColor: "#f0f0f0",
          height: "100%",
          width: "100vw",
        }}
      >
        <form onSubmit={handleSubmit}>
          <SectionHeading title="Create an interaction!" />
          <Box
            sx={{ display: "flex", justifyContent: "center", marginBottom: 4 }}
          >
            <FormControl>
              <RadioGroup
                row
                defaultValue={"rap battle"}
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
          </Box>
          <SectionHeading title="Choose two people" />
          <Box
            sx={{
              display: "grid",
              justifyContent: "center",
              marginBottom: "5px",
            }}
          >
            <Typography
              variant="body1"
              gutterBottom
              sx={{ textAlign: "center" }}
            >
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
          <br /> <br />
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
          <br />
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              variant="contained"
              type="submit"
              sx={{
                width: "250px",
                backgroundColor: theme.palette.action.active,
              }}
            >
              GO !
            </Button>
          </Box>
        </form>

        {isLoading && (
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <DNASpinner
              visible={isLoading}
              height="80"
              width="80"
              ariaLabel="dna-loading"
              wrapperStyle={{}}
              wrapperClass="dna-wrapper"
            />
          </Box>
        )}

        <br />
        {chatResults && <TextareaAutosize value={chatResults} readOnly />}
      </Paper>
    </ThemeProvider>
  );
};

export default InteractionForm;
