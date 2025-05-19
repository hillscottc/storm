import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { IconButton, TextareaAutosize } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export interface ResultsDialogProps {
  open: boolean;
  onClose: () => void;
  results: string;
}

export default function ResultsDialog(props: ResultsDialogProps) {
  const { results, open, onClose } = props;

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle sx={{ textAlign: "center" }}>results</DialogTitle>
      <IconButton
        aria-label="close"
        onClick={onClose}
        sx={(theme) => ({
          position: "absolute",
          right: 8,
          top: 8,
          color: theme.palette.grey[500],
        })}
      >
        <CloseIcon />
      </IconButton>
      <TextareaAutosize value={results} readOnly />
    </Dialog>
  );
}
