import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    loginCard: {
        height: "375px",
        width: "500px",
        backgroundColor: theme.palette.common.lightgray,
        padding: "50px 100px 0px 100px"
    },
    title: {
        fontFamily: ["Righteous"].join(","),
        flexGrow: 1,
    },
    container: {
        height: "100%",
    },
    link:{
        color: theme.palette.secondary.main,
    },
    textField: {
        width: "100%",
    },
    registerLink: {
        fontSize: "12px",
        marginTop: "12px"
    },
    item:{
        width: "100%"
    },
    loginButton: {
        backgroundColor: theme.palette.primary.light,
        borderRadius: 0,
        color: theme.palette.common.white,
        marginTop: "10px"
    }
}));

export default function LoginPage() {
    const classes = useStyles();

    return (
        <Grid container alignItems={"center"} justify={"center"} direction={"row"} className={classes.container}>
            <Grid item>
                <Paper square className={classes.loginCard} elevation={2}>
                    <Grid container alignItems={"center"} direction={"column"} className={classes.container} spacing={3}>
                        <Grid item>
                            <Typography variant={"h4"}>Login</Typography>
                        </Grid>
                        <Grid item className={classes.item}>
                            <form className={classes.root} noValidate autoComplete="off">
                                <TextField className={classes.textField} id="username" label="Username" required color={"secondary"}/>
                                <br/>
                                <br/>
                                <TextField className={classes.textField} id="password" label="Password" required color={"secondary"}/>
                                <br/>
                                <Typography className={classes.registerLink}>Don’t have an account yet? Register <a href={"google.ch"} className={classes.link}>here</a></Typography>
                            </form>
                        </Grid>
                        <Grid item>
                            <Button variant="contained" disableElevation color="primary" className={classes.loginButton}>
                                Login
                            </Button>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    );
}