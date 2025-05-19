import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import FloatingWords from "../../components/FloatingWords";

export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
  setSelectedValue: (value: string) => void;
}

export default function WordsDialog(props: SimpleDialogProps) {
  const { onClose, selectedValue, open, setSelectedValue } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle sx={{ textAlign: "center" }}>
        for example, click a name
      </DialogTitle>
      <FloatingWords setSelectedWord={setSelectedValue} />
    </Dialog>
  );
}
