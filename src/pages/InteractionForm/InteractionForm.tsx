import { useState } from "react";
import {
  Button,
  Paper,
  Box,
  TextareaAutosize,
  ThemeProvider,
  styled,
} from "@mui/material";
import { DNA as DNASpinner } from "react-loader-spinner";
import { fetchChat } from "../../utils";
import FloatingWords from "../../components/FloatingWords";
import theme from "../../theme";
import KindChoice from "./KindChoice";
import PeopleChoice from "./PeopleChoice";
import TopicChoice from "./TopicChoice";

export const StyledBox = styled("div")(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.primary.main,
  display: "flex",
  justifyContent: "center",
  marginBottom: 4,
}));

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
          <FloatingWords />
          <br /> <br />
          <TopicChoice
            formData={formData}
            setFormData={setFormData}
            setFormError={setFormError}
            formError={formError}
          />
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
