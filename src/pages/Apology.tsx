/**
 * NOT USED ANY MORE
 */
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
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { DNA as DNASpinner } from "react-loader-spinner";
import Header from "../components/Header";
import { fetchChat } from "../utils";
import SectionHeading from "../components/SectionHeading";

const excuseTypes = [
  "none",
  "reasonable",
  "ridiculous",
  "sarcastic",
  "embarassing",
];

const Apology: React.FunctionComponent = () => {
  const [formData, setFormData] = useState({
    excuseType: "reasonable",
    toWhom: "",
    topic: "",
  });
  const [chatResults, setChatResults] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [formError, setFormError] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { excuseType, topic, toWhom } = formData;

    if (!topic) {
      setFormError(true);
      setChatResults("Please fill out all fields.");
      return;
    }
    setFormError(false);

    let content = `Write my apology to ${toWhom} for ${topic}`;
    if (excuseType === "none") content += ` with no excuse`;
    else content += ` , and include a ${excuseType} excuse`;

    console.log("content:", content);

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
    <Paper
      elevation={8}
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: "5px",
        margin: "10px",
        backgroundColor: "#f0f0f0",
        height: "100%",
        // height: "100vh",
      }}
    >
      <Header />
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Typography variant="h2">Apology</Typography>
      </Box>

      <br></br>

      <form onSubmit={handleSubmit}>
        <SectionHeading title="To whom?" />
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <TextField
            size="small"
            sx={{ minWidth: "75%" }}
            onChange={(e) =>
              setFormData({ ...formData, toWhom: e.target.value })
            }
            value={formData.toWhom}
            label={"who you are apologizing to"}
            variant="filled"
            error={formError && !formData.toWhom}
          />
        </Box>
        <br />
        <SectionHeading title="For what?" />
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <TextField
            size="small"
            sx={{ minWidth: "75%" }}
            onChange={(e) =>
              setFormData({ ...formData, topic: e.target.value })
            }
            value={formData.topic}
            label={"what you did"}
            variant="filled"
            error={formError && !formData.topic}
          />
        </Box>
        <br />
        <SectionHeading title="How about an Excuse?" />
        <Box
          sx={{ display: "flex", justifyContent: "center", marginBottom: 4 }}
        >
          <FormControl>
            <RadioGroup
              row
              defaultValue={"reasonable"}
              name="radio-buttons-group"
              onChange={(e) =>
                setFormData({ ...formData, excuseType: e.target.value })
              }
            >
              <Box sx={{ flexGrow: 1 }}>
                <Grid
                  container
                  spacing={1}
                  columns={3}
                  sx={{ justifyContent: "center" }}
                >
                  {excuseTypes.map((value, index) => (
                    <Grid
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      key={index}
                      sx={{
                        borderRadius: 2,
                        backgroundColor: "grey.300",
                        width: 100,
                      }}
                    >
                      <FormControlLabel
                        value={value}
                        key={value}
                        control={<Radio />}
                        label={
                          <Typography variant="button" sx={{ m: 0, p: 0 }}>
                            {value}
                          </Typography>
                        }
                        labelPlacement="bottom"
                      />
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </RadioGroup>
            <FormHelperText>
              {!formData.excuseType && "Please select an option."}
            </FormHelperText>
          </FormControl>
        </Box>
        <br /> <br />
        <br />
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button variant="contained" type="submit" sx={{ width: "250px" }}>
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
  );
};

export default Apology;
