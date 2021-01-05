import React, {Fragment} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";
import Paper from '@material-ui/core/Paper';
import CheckIcon from '@material-ui/icons/Check';
import {RGBToHex, calculateScore, defaultColors, shuffleArray} from "../../Utils";
import axios from "axios";


const useStyles = makeStyles(() => ({
    container: {
        height: "100%",
        width: "100%",
    },
    containerItem: {
        width: "75%",
        height: "100%"
    },
    hint: {
        borderRadius: "100%",
        height: "16px",
        width: "16px",
        margin: "5px 5px 5px 5px"
    },
    colorButton: {
        borderRadius: "100%",
        width: "40px",
        height: "40px",
        marginRight: "15px"
    }
}));

export default function MastermindBoard(props) {
    const classes = useStyles();
    const settings = props.settings;
    const generatedColorCode = props.code;
    const colors = defaultColors;
    let gameHasEnded = false;
    const [tryHistory, setTryHistory] = React.useState([]);

    for (let i = 0; i<8-settings.colorAmount; i++){
        colors.pop();
    }

    let codeRows = [];
    for (let i = 0; i < settings.codeLength; i++) {
        const elementId = "codeDiv" + i
        codeRows.push(
            <Grid item style={{backgroundColor: "#e8e8e8", cursor: "pointer"}} id={elementId}
                  className={classes.colorButton} onClick={() => changeColor(elementId)}/>)
    }

    function changeColor(divId) {
        let currentColor = RGBToHex(document.getElementById(divId).style.backgroundColor);
        let indexCurrent = colors.findIndex((color) => color === currentColor)
        if (indexCurrent === colors.length - 1) {
            document.getElementById(divId).style.backgroundColor = colors[0]
        } else {
            document.getElementById(divId).style.backgroundColor = colors[indexCurrent + 1]
        }
    }

    function checkCode() {
        if (!gameHasEnded) {
            let colorCode = []
            for (let i = 0; i<settings.codeLength; i++){
                colorCode.push(RGBToHex(document.getElementById("codeDiv" + i).style.backgroundColor))
            }
            let hints = [];
            for (let i = 0; i < colorCode.length; i++) {
                if (colorCode[i] === generatedColorCode[i]) {
                    hints.push(<Grid item style={{backgroundColor: "#000000"}} className={classes.hint}/>)
                } else if (generatedColorCode.find((color) => color === colorCode[i])) {
                    hints.push(<Grid item style={{backgroundColor: "#ffffff", border: "2px solid black"}}
                                     className={classes.hint}/>)
                } else {
                    hints.push(<Grid item style={{backgroundColor: "#e8e8e8"}} className={classes.hint}/>)
                }
            }

            if (settings.areHintsShuffled){
                hints = shuffleArray(hints);
            }

            if (!hints.find(hint => hint.props.style.backgroundColor === "#ffffff" || hint.props.style.backgroundColor === "#e8e8e8")) {
                endGame();
            } else {
                addTry(colorCode, hints);
                resetColors();
            }
        }
    }

    function addTry(colorCode, hints) {
        let code = [];
        for (let color in colorCode) {
            code.push(<Grid item style={{backgroundColor: colorCode[color]}} className={classes.colorButton}/>)
        }

        let newHistory = tryHistory;
        newHistory.unshift(
            <Fragment>
                <Grid container item direction={"row"} justify={"space-between"} alignItems={"center"} spacing={2}
                      className={classes.container}>
                    <Grid item container direction={"row"} justify={"flex-start"} alignItems={"center"}
                          style={{width: "400px", marginLeft: "25px"}}>
                        {code}
                    </Grid>
                    <Grid item container direction={"row"} justify={"flex-end"} alignItems={"center"}
                          style={{width: "200px"}}>
                        <Grid item container direction={"row"} style={{width: "60px"}}>
                            {hints}
                        </Grid>
                    </Grid>
                </Grid>
                <hr/>
            </Fragment>
        )
        setTryHistory([...newHistory]);
    }

    function resetColors() {
        for (let i = 0; i < settings.codeLength; i++) {
            document.getElementById("codeDiv" + i).style.backgroundColor = colors[0]
        }
    }

    function endGame() {
        gameHasEnded = true;
        props.setWinningText("You won!");
        saveRank();
        document.getElementById("check-container").innerHTML = '';
    }

    function saveRank() {
        axios.post("http://localhost:8081/rank", {
            username: localStorage.getItem("username"),
            score: calculateScore(tryHistory.length + 1),
            category: {id: "1", name: "EASY"}
        }).then(result => (console.log(result)))
    }

    return (
        <Fragment>
            <Paper square style={{marginBottom: "20px"}}>
                <Grid container item direction={"row"} justify={"space-between"} alignItems={"center"} spacing={2}
                      className={classes.container}>
                    <Grid item container direction={"row"} justify={"flex-start"} alignItems={"center"}
                          style={{width: "400px", marginLeft: "25px"}}>
                        {codeRows}
                    </Grid>
                    <Grid item container direction={"row"} justify={"flex-end"} alignItems={"center"}
                          style={{width: "200px"}}>
                        <Grid id={"check-container"} item container style={{width: "60px"}}>
                            <CheckIcon id={"check"} color={"secondary"} style={{cursor: "pointer"}}
                                       onClick={() => checkCode()}/>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
            {tryHistory}
        </Fragment>
    );
};