import { useState } from "react";
import OpenAI from "openai";
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

const API_KEY = import.meta.env.VITE_OPENAI_APIKEY || "";

/* https://help.openai.com/en/articles/5112595-best-practices-for-api-key-safety */
async function fetchChat({
  content = "Tell me a joke",
  apiKey = "",
}: {
  content: string;
  apiKey: string;
}): Promise<string | null> {
  const client = new OpenAI({ apiKey: apiKey, dangerouslyAllowBrowser: true });
  const response = await client.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content }],
    temperature: 0.8,
    max_tokens: 1024,
  });
  return response.choices[0]?.message?.content;
}

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

const Konvo: React.FunctionComponent = () => {
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
      const chatResponse = await fetchChat({ content, apiKey: API_KEY });
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
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Typography variant="h1">KONVO AI</Typography>
      </Box>

      <form onSubmit={handleSubmit}>
        <Box sx={{ display: "flex", justifyContent: "center", p: 1, m: 1 }}>
          <Typography variant="h4" gutterBottom sx={{ textAlign: "center" }}>
            Create an interaction!
          </Typography>
        </Box>
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
                  {chatTypes.map((value) => (
                    <Grid
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
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
              {!formData.chatType && "Please select an option."}
            </FormHelperText>
          </FormControl>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "3px",
          }}
        >
          <Typography variant="h4" gutterBottom>
            Choose two people
          </Typography>
        </Box>
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
        <br /> <br />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "3px",
          }}
        >
          <Typography variant="h4" gutterBottom>
            Topic (optional)
          </Typography>
        </Box>
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

export default Konvo;
