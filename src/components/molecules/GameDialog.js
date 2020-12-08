import React from "react";
import Dialog from "@material-ui/core/Dialog";

export default function GameDialog(props) {
  const [open, onClose] = props;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    ></Dialog>
  );
}
