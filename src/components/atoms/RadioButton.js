import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  radioButton: {
    color: theme.palette.secondary.main,
  },
}));

export default function RadioButton(props) {
  const classes = useStyles();

  return <Radio />;
}
