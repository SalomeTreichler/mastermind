import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";
import CustomButton from "../atoms/CustomButton";
import MastermindBoard from "../organisms/MastermindBoard";

const useStyles = makeStyles(() => ({
    container: {
        height: "100%",
        width: "100%",
    },
    containerItem: {
        width: "75%",
        height: "100%"
    },
}));

export default function GamePage() {
    const classes = useStyles();
    const [winningText, setWinningText] = React.useState("");

    return (
        <Grid container alignItems={"center"} justify={"center"} direction={"column"} className={classes.container} spacing={4}>
            <Grid container item direction={"row"} justify={"space-between"} alignItems={"center"} className={classes.containerItem}>
                <Grid item>
                    <CustomButton text={"Back to Ranking"}/>
                </Grid>
                <Grid item style={{color: "green"}}>
                    {winningText}
                </Grid>
                <Grid item>
                    <CustomButton text={"New Game"}/>
                </Grid>
            </Grid>
            <Grid item style={{width: "75%"}}>
                <MastermindBoard codeLength={4} setWinningText={setWinningText}/>
            </Grid>
        </Grid>
    );
};

