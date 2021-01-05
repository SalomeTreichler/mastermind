import React, { useState, Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import CustomButton from "../atoms/CustomButton";
import MastermindBoard from "../organisms/MastermindBoard";
import { useHistory } from "react-router";
import { generateSettings, generateCode, defaultColors } from "../../Utils";
import GameDialog from "../molecules/GameDialog";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(() => ({
  container: {
    height: "100%",
    width: "100%",
  },
  containerItem: {
    width: "75%",
    height: "100%",
  },
}));

export default function GamePage() {
  const classes = useStyles();
  const [winningText, setWinningText] = useState("");
  const history = useHistory();
  const difficulty = "easy";
  const settings = generateSettings(difficulty);
  const code = generateCode(
    defaultColors,
    settings.colorAmount,
    1,
    settings.codeLength,
    settings.isMultipleColorCode
  );

  const [open, setOpen] = useState(false);

  const handleBackToRanking = () => {
    history.push("/ranking");
  };

  const handleLogout = () => {
    history.push("/");
  };

  return (
    <Fragment>
      <GameDialog open={open} />
      <Grid
        container
        alignItems={"center"}
        justify={"center"}
        direction={"column"}
        className={classes.container}
        spacing={4}
      >
        <Grid
          container
          item
          direction={"row"}
          justify={"flex-end"}
          alignItems={"center"}
          className={classes.containerItem}
        >
          <Grid item>
            <Typography onClick={handleLogout} style={{ cursor: "pointer" }}>
              LOG OUT
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          item
          direction={"row"}
          justify={"space-between"}
          alignItems={"center"}
          className={classes.containerItem}
        >
          <Grid item>
            <CustomButton
              text={"Back to Ranking"}
              onClick={handleBackToRanking}
            />
          </Grid>
          <Grid item style={{ color: "green" }}>
            {winningText}
          </Grid>
          <Grid item>
            <CustomButton text={"New Game"} onClick={setOpen(true)} />
          </Grid>
        </Grid>
        <Grid item style={{ width: "75%" }}>
          <MastermindBoard
            settings={settings}
            code={code}
            difficulty={difficulty}
            setWinningText={setWinningText}
          />
        </Grid>
      </Grid>
    </Fragment>
  );
}
