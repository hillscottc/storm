import * as React from "react";
import { Box, Button, Typography } from "@mui/material";
import axios from "axios";
import { fetchAIService } from "../utils";

// Define the type for the data you expect to fetch
interface DataType {
  body: string;
  // Add other fields as necessary
}

const Admin: React.FunctionComponent = () => {
  //   https://functionapponezero.azurewebsites.net

  const [data, setData] = React.useState<DataType[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<DataType[]>(
          "https://functionapponezero.azurewebsites.net/api/HttpExample"
        );
        console.log("response", response);
        setData(response.data);
      } catch (err) {
        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <Box
      sx={{
        display: "grid",
        justifyContent: "center",
        p: 1,
        m: 1,
      }}
    >
      <Typography variant="h2">Admin</Typography>

      <Button
        onClick={() => {
          console.log("clicked");
          const results = fetchAIService({ content: "Tell me a joke" });
          console.log("results", results);
        }}
        size="large"
        variant="contained"
      >
        STUFF
      </Button>

      <div>
        <h1>Fetched Data</h1>

        <div>{JSON.stringify(data)}</div>

        {/* <ul>
          {data.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul> */}
      </div>
    </Box>
  );
};
export default Admin;
