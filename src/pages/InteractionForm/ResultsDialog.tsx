import * as React from "react";
import {
  AppBar,
  Button,
  Dialog,
  IconButton,
  Slide,
  TextareaAutosize,
  Toolbar,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { TransitionProps } from "@mui/material/transitions";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<unknown>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export interface iProps {
  open: boolean;
  onClose: () => void;
  results: string;
}

export default function ResultsDialog(props: iProps) {
  const { results, open, onClose } = props;

  const handleSave = () => {
    const blob = new Blob([results], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "results.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <Dialog
      fullScreen
      TransitionComponent={Transition}
      open={open}
      onClose={onClose}
    >
      <AppBar sx={{ position: "relative" }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={onClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            Results
          </Typography>
          <Button autoFocus color="inherit" onClick={handleSave}>
            save
          </Button>
        </Toolbar>
      </AppBar>

      <TextareaAutosize value={results} readOnly />
    </Dialog>
  );
}
