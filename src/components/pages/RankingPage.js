import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Grid, Table, TableBody, TableContainer} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import CustomButton from "../atoms/CustomButton";
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

const useStyles = makeStyles(() => ({
    container: {
        height: "100%",
        width: "100%",
    },
    containerItem: {
        width: "75%",
        height: "100%"
    },
    title: {}
}));

const difficulties = {
    easy: "EASY",
    medium: "MEDIUM",
    hard: "HARD",
    extreme: "EXTREME"
}

const rankingMockEasy = [
    {
        "id": "1",
        "username": "salome",
        "score": 111,
        "category": {
            "id": "1",
            "name": "EASY"
        }
    },
    {
        "id": "1",
        "username": "sina",
        "score": 111,
        "category": {
            "id": "1",
            "name": "EASY"
        }
    },
]

const rankingMockMedium = [
    {
        "id": "1",
        "username": "salome",
        "score": 222,
        "category": {
            "id": "1",
            "name": "MEDIUM"
        }
    },
    {
        "id": "1",
        "username": "sina",
        "score": 222,
        "category": {
            "id": "1",
            "name": "MEDIUM"
        }
    },
]

const rankingMockHard = [
    {
        "id": "1",
        "username": "salome",
        "score": 333,
        "category": {
            "id": "1",
            "name": "HARD"
        }
    },
    {
        "id": "1",
        "username": "sina",
        "score": 333,
        "category": {
            "id": "1",
            "name": "HARD"
        }
    },
]

const rankingMockExtreme = [
    {
        "id": "1",
        "username": "salome",
        "score": 444,
        "category": {
            "id": "1",
            "name": "EXTREME"
        }
    },
    {
        "id": "1",
        "username": "sina",
        "score": 444,
        "category": {
            "id": "1",
            "name": "EXTREME"
        }
    },
]

function getRankings(category) {
    switch (category) {
        case difficulties.easy:
            return rankingMockEasy;
        case difficulties.medium:
            return rankingMockMedium;
        case difficulties.hard:
            return rankingMockHard;
        case difficulties.extreme:
            return rankingMockExtreme;
        default:
            return [];
    }
}


export default function RankingPage() {
    const classes = useStyles();
    const [value, setValue] = React.useState("EASY");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Grid container alignItems={"center"} justify={"center"} direction={"column"} className={classes.container}
              spacing={4}>
            <Grid container item direction={"row"} justify={"space-between"} className={classes.containerItem}>
                <Grid item>
                    <Typography variant={"h4"}>Ranking</Typography>
                </Grid>
                <Grid item>
                    <CustomButton text={"New Game"}/>
                </Grid>
            </Grid>
            <Grid item style={{width: "75%"}}>
                <Paper square style={{width: "100%"}}>
                    <Tabs
                        value={value}
                        indicatorColor="secondary"
                        textColor="secondary"
                        onChange={handleChange}
                        aria-label="Difficulties"
                    >
                        <Tab label={difficulties.easy} value={difficulties.easy}/>
                        <Tab label={difficulties.medium} value={difficulties.medium}/>
                        <Tab label={difficulties.hard} value={difficulties.hard}/>
                        <Tab label={difficulties.extreme} value={difficulties.extreme}/>
                    </Tabs>
                </Paper>
                <Paper square>
                    <TableContainer>
                        <Table>
                            <TableBody>
                                {getRankings(value).map(ranking => {
                                    return(<TableRow>
                                        <TableCell component="th" scope="row">
                                            {ranking.username}
                                        </TableCell>
                                        <TableCell align={"right"}>
                                            {ranking.score}
                                        </TableCell>
                                    </TableRow>)
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            </Grid>
        </Grid>
    );
};

