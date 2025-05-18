import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import FloatingWords from "../../components/FloatingWords";

export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
  // setSelectedValue: (value: string) => void;
}

export default function WordsDialog(props: SimpleDialogProps) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value: string) => {
    console.log("value", value);
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>hello</DialogTitle>

      <Button onClick={() => handleListItemClick(selectedValue)}>wombat</Button>

      <FloatingWords
        setSelectedWord={function (word: string): void {
          console.log("word:", word);
        }}
      />
    </Dialog>
  );
}
