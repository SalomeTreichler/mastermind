import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Grid} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    header: {
        height: "80px",
        textAlign: "center",
    },
    title: {
        fontFamily: ["Righteous", "cursive"].join(","),
        flexGrow: 1,
    }
}));

export default function Header(props) {
    const classes = useStyles();

    return (
        <AppBar position="static" color={"primary"} className={classes.header}>
            <Grid container alignItems={"center"} justify={"center"} direction={"row"}>
                <Grid item>
                    <Toolbar>
                        <Typography variant="h4" className={classes.title}>
                            {props.title}
                        </Typography>
                    </Toolbar>
                </Grid>
            </Grid>
        </AppBar>
    );
}