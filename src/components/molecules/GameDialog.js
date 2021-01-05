import React from "react";
import Paper from "@material-ui/core/Paper";
import Modal from "@material-ui/core/Modal";
import CustomButton from "../atoms/CustomButton";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  box: {
    minHeight: "100vh",
  },
  title: {
    fontFamily: ["Righteous", "cursive"].join(","),
    flexGrow: 1,
  },
  titleContainer: {
    height: "80px",
  },
}));

const GameDialog = (props) => {
  return (
    <Modal open={props.open} style={{ backgroundColor: "rgba(0,0,0,0,0.7)" }}>
      {DialogContent(props)}
    </Modal>
  );
};

const DialogContent = (props) => {
  const classes = useStyles();

  const handleClose = () => {
    props.setOpen(false);
  };

  return (
    <Grid
      className={classes.box}
      container
      direction="column"
      justify="center"
      alignItems="center"
    >
      <Paper
        style={
          ({ maxWidth: "95vw" }, { maxHeight: "95vh" }, { overflow: "auto" })
        }
      >
        <Typography>Example Dialog</Typography>
        <CustomButton
          text="Close"
          onClick={() => {
            handleClose();
          }}
        ></CustomButton>
      </Paper>
    </Grid>
  );
};

export default GameDialog;
