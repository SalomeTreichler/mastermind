import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const useStyles = makeStyles((theme) => ({
  radioButton: {
    color: theme.palette.secondary.main,
  },
}));

export default function RadioButton(props) {
  const classes = useStyles();

  return <Radio className={classes.radioButton} />;
}
