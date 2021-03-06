import React, {useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";
import CustomButton from "../atoms/CustomButton";
import MastermindBoard from "../organisms/MastermindBoard";
import {useHistory} from "react-router";
import {generateCode} from "../../Utils";

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
    const [winningText, setWinningText] = useState("");
    const history = useHistory();
    const colors = [
        "#e8e8e8", "#ff6767", "#ffa767", "#ffde67", "#d7ff67", "#67ffed", "#67adff", "#9867ff", "#ea67ff"
    ]
    const generatedColorCode = generateCode(colors, 8, 1, 4);

    const handleNewGame = () => {
        window.location.reload(false);
    };

    const handleBackToRanking = () => {
        history.push("/ranking")
    };

    return (
        <Grid container alignItems={"center"} justify={"center"} direction={"column"} className={classes.container}
              spacing={4}>
            <Grid container item direction={"row"} justify={"space-between"} alignItems={"center"}
                  className={classes.containerItem}>
                <Grid item>
                    <CustomButton text={"Back to Ranking"} onClick={handleBackToRanking}/>
                </Grid>
                <Grid item style={{color: "green"}}>
                    {winningText}
                </Grid>
                <Grid item>
                    <CustomButton text={"New Game"} onClick={handleNewGame}/>
                </Grid>
            </Grid>
            <Grid item style={{width: "75%"}}>
                <MastermindBoard codeLength={4} setWinningText={setWinningText} generatedCode={generatedColorCode}/>
            </Grid>
        </Grid>
    );
};

