import * as React from "react";
import {
  Slide,
  AppBar,
  Dialog,
  Toolbar,
  IconButton,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { TransitionProps } from "@mui/material/transitions";
import FloatingWords from "../../components/FloatingWords";

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
  selectedValue: string;
  onClose: (value: string) => void;
  setSelectedValue: (value: string) => void;
}

export default function WordsDialog(props: iProps) {
  const { onClose, selectedValue, open, setSelectedValue } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog
      fullScreen
      TransitionComponent={Transition}
      onClose={handleClose}
      open={open}
    >
      <AppBar sx={{ position: "relative" }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            for example, click a name
          </Typography>
        </Toolbar>
      </AppBar>

      <FloatingWords setSelectedWord={setSelectedValue} />
    </Dialog>
  );
}
