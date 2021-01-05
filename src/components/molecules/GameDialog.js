import React from "react";
import Paper from "@material-ui/core/Paper";
import Modal from "@material-ui/core/Modal";
import CustomButton from "../atoms/CustomButton";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Button";
import RadioGroup from "@material-ui/core/RadioGroup";
import RadioButton from "../atoms/RadioButton";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const useStyles = makeStyles(() => ({
  box: {
    minHeight: "100vh",
  },
  content: {
    padding: 50,
  },
  dialogSheet: {
    maxWidth: "95vw",
    maxHeight: "95vh",
    overflow: "hidden",
    borderRadius: 0,
    padding: "50px",
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

  const [value, setValue] = React.useState("top");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

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
      <Paper className={classes.dialogSheet}>
        <Grid
          className={classes.content}
          container
          spacing={2}
          direction="column"
          justify="center"
          alignItems="center"
        >
          <FormControl component="fieldset">
            <RadioGroup
              row
              aria-label="position"
              name="position"
              value={value}
              onChange={handleChange}
            >
              <FormControlLabel
                value="top"
                control={<Radio />}
                label="Top"
                labelPlacement="bottom"
              />
              <FormControlLabel
                value="top2"
                control={<Radio />}
                label="Top"
                labelPlacement="bottom"
              />
              <FormControlLabel
                value="top3"
                control={<Radio />}
                label="Top"
                labelPlacement="bottom"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid
          container
          spacing={2}
          direction="column"
          justify="center"
          alignItems="center"
        >
          <CustomButton
            text="Start Game"
            onClick={() => {
              handleClose();
            }}
          ></CustomButton>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default GameDialog;
