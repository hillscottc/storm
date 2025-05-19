import { useState } from "react";
import { Button, Paper, Box, ThemeProvider } from "@mui/material";
import { DNA as DNASpinner } from "react-loader-spinner";
import { fetchChat } from "../../utils";
import theme from "../../theme";
import KindChoice from "./KindChoice";
import PeopleChoice from "./PeopleChoice";
import TopicChoice from "./TopicChoice";
import ResultsDialog from "./ResultsDialog";
import { StyledBox } from "../../components/StyledComponents";

export type FormData = {
  person1: string;
  person2: string;
  chatType: string;
  topic: string;
};

export interface FormDataInterface {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
  formError: boolean;
  setFormError: React.Dispatch<React.SetStateAction<boolean>>;
}

const InteractionForm: React.FunctionComponent = () => {
  const [formData, setFormData] = useState<FormData>({
    person1: "",
    person2: "",
    chatType: "rap battle",
    topic: "",
  });
  const [chatResults, setChatResults] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [formError, setFormError] = useState(false);
  const [showResults, setShowResults] = useState(false);

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
      setShowResults(true);
      const chatResponse = await fetchChat({ content });
      setChatResults(() => chatResponse || "No response");
      setIsLoading(false);
    } catch (error) {
      setChatResults(`Error: ${error}`);
      setShowResults(true);
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
          height: "100vh",
          width: "100vw",
        }}
      >
        <form onSubmit={handleSubmit}>
          <KindChoice
            formData={formData}
            setFormData={setFormData}
            setFormError={setFormError}
            formError={formError}
          />
          <PeopleChoice
            formData={formData}
            setFormData={setFormData}
            setFormError={setFormError}
            formError={formError}
          />

          <TopicChoice
            formData={formData}
            setFormData={setFormData}
            setFormError={setFormError}
            formError={formError}
          />

          <StyledBox>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                height: "max-content",
                padding: "30px",
              }}
            >
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
          </StyledBox>
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

        <ResultsDialog
          open={showResults}
          results={chatResults}
          onClose={() => setShowResults(false)}
        />
      </Paper>
    </ThemeProvider>
  );
};

export default InteractionForm;
