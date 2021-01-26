import React, {useEffect, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Grid, Table, TableBody, TableContainer} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import CustomButton from "../atoms/CustomButton";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import axios from "axios";
import {useHistory} from "react-router";
import {difficulties} from "../../Utils";
import GameDialog from "../molecules/GameDialog";
import PersonIcon from '@material-ui/icons/Person';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

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

export default function RankingPage() {
    const classes = useStyles();

    const [value, setValue] = useState("easy");
    const [ranks, setRanks] = useState([]);
    const [open, setOpen] = useState(false);

    const history = useHistory();

    useEffect(() => {
        axios.get("http://localhost:8080/rank/category/" + value).then((result) => {
            setRanks(result.data);
        });
    });

    const handleChangeTabs = (event, newValue) => {
        setValue(newValue);
    };

    const setOpenDialogHandler = () => {
        setOpen(!open);
    };

    const handleLogout = () => {
        history.push("/");
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
            <GameDialog open={open} setOpen={setOpen}/>
            <Grid
                container
                item
                direction={"row"}
                justify={"space-between"}
                alignItems={"center"}
                className={classes.containerItem}
            >
                <Grid item>
                    <Typography style={{display: "flex"}}>
                        <PersonIcon color={"secondary"} fontSize={"small"} style={{marginRight: "10px"}}/>
                        {localStorage.getItem("username")}
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography style={{display: "flex", cursor: "pointer"}} onClick={handleLogout}>
                        Log out
                        <ExitToAppIcon color={"secondary"} fontSize={"small"} style={{marginLeft: "10px"}}/>
                    </Typography>
                </Grid>
            </Grid>
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
                    <CustomButton text={"New Game"} onClick={setOpenDialogHandler}/>{" "}
                </Grid>
            </Grid>
            <Grid item style={{width: "75%"}}>
                <Paper square style={{width: "100%"}}>
                    <Tabs
                        value={value}
                        indicatorColor="secondary"
                        textColor="secondary"
                        onChange={handleChangeTabs}
                        aria-label="Difficulties"
                    >
                        {difficulties.map((difficulty) => (
                            <Tab label={difficulty} value={difficulty}/>
                        ))}
                    </Tabs>
                </Paper>
                <Paper square>
                    <TableContainer>
                        <Table>
                            <TableBody>
                                {ranks.map((ranking) => {
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
