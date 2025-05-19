import * as React from "react";
import { Box, IconButton, TextField } from "@mui/material";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import { FormData } from "./InteractionForm";

export interface iProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
  setPersonToUpdate: React.Dispatch<React.SetStateAction<string>>;
  setOpenPeople: React.Dispatch<React.SetStateAction<boolean>>;
  formError: boolean;
  person: "person1" | "person2";
}

export default function PersonField(props: iProps) {
  const {
    formData,
    setFormData,
    formError,
    setPersonToUpdate,
    setOpenPeople,
    person,
  } = props;

  return (
    <Box
      sx={{
        display: "flex",
        paddingBottom: 1,
        marginTop: "5px",
        marginRight: 0,
      }}
    >
      <TextField
        size="small"
        onChange={(e) => setFormData({ ...formData, person1: e.target.value })}
        value={formData[person]}
        label={person == "person1" ? "Person 1" : "Person 2"}
        variant="filled"
        error={formError && !formData[person]}
      />
      <IconButton
        aria-label="ideas"
        onClick={() => {
          setPersonToUpdate(person);
          setOpenPeople(true);
        }}
      >
        <TipsAndUpdatesIcon />
      </IconButton>
    </Box>
  );
}
