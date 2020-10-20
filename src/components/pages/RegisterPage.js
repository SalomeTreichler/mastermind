import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import CustomButton from "../atoms/CustomButton";

const useStyles = makeStyles((theme) => ({
    registerCard: {
        height: "390px",
        width: "500px",
        backgroundColor: theme.palette.common.lightgray,
        padding: "40px 100px 0px 100px"
    },
    container: {
        height: "100%",
    },
    link: {
        color: theme.palette.secondary.main,
    },
    textField: {
        width: "100%",
    },
    item: {
        width: "100%"
    },
}));

export default function RegisterPage() {
    const classes = useStyles();

    return (
        <Grid container alignItems={"center"} justify={"center"} direction={"row"} className={classes.container}>
            <Grid item>
                <Paper square className={classes.registerCard} elevation={2}>
                    <Grid container alignItems={"center"} direction={"column"} className={classes.container}
                          spacing={3}>
                        <Grid item>
                            <Typography variant={"h4"}>Register</Typography>
                        </Grid>
                        <Grid item className={classes.item}>
                            <form className={classes.root} noValidate autoComplete="off">
                                <TextField className={classes.textField} id="username" label="Username" required
                                           color={"secondary"}/>
                                <br/>
                                <br/>
                                <TextField className={classes.textField} id="password" label="Password" required
                                           color={"secondary"}/>
                                <br/>
                                <br/>
                                <TextField className={classes.textField} id="password" label="Confirm Password" required
                                           color={"secondary"}/>
                            </form>
                        </Grid>
                        <Grid item>
                            <CustomButton text={"Register"}/>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    );
}