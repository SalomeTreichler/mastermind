import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Table, TableBody, TableContainer } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import CustomButton from "../atoms/CustomButton";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import axios from "axios";
import GameDialog from "../molecules/GameDialog";

const useStyles = makeStyles(() => ({
  container: {
    height: "100%",
    width: "100%",
  },
  containerItem: {
    width: "75%",
    height: "100%",
  },
  title: {},
}));

const difficulties = [
  {
    difficulty: "EASY",
  },
];

export default function RankingPage() {
  const classes = useStyles();

  const [value, setValue] = useState("EASY");
  const [easyRanks, setEasyRanks] = useState([]);
  const [dialogIsOpen, setDialogIsOpen] = React.useState(false);

  const openDialog = () => setDialogIsOpen(true);

  const closeDialog = () => setDialogIsOpen(false);

  useEffect(() => {
    axios.get("http://localhost:8081/rank/category/" + value).then((result) => {
      setEasyRanks(result.data);
    });
  });

  const handleChangeTabs = (event, newValue) => {
    setValue(newValue);
  };

  const handleNewGame = () => {
    return <GameDialog open={dialogIsOpen} onClose={closeDialog} />;
  };

  return (
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
        justify={"space-between"}
        className={classes.containerItem}
      >
        <Grid item>
          <Typography variant={"h4"}>Ranking</Typography>
        </Grid>
        <Grid item>
          <CustomButton text={"New Game"} onClick={handleNewGame} />
        </Grid>
      </Grid>
      <Grid item style={{ width: "75%" }}>
        <Paper square style={{ width: "100%" }}>
          <Tabs
            value={value}
            indicatorColor="secondary"
            textColor="secondary"
            onChange={handleChangeTabs}
            aria-label="Difficulties"
          >
            {difficulties.map((difficulty) => (
              <Tab
                label={difficulty.difficulty}
                value={difficulty.difficulty}
              />
            ))}
          </Tabs>
        </Paper>
        <Paper square>
          <TableContainer>
            <Table>
              <TableBody>
                {easyRanks.map((ranking) => {
                  return (
                    <TableRow>
                      <TableCell component="th" scope="row">
                        {ranking.username}
                      </TableCell>
                      <TableCell align={"right"}>{ranking.score}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Grid>
    </Grid>
  );
}
