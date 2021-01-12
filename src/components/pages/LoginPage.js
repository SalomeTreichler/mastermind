import React, {useEffect, useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {useHistory} from 'react-router-dom';
import {Grid} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import CustomButton from "../atoms/CustomButton";
import axios from "axios";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
    loginCard: {
        height: "375px",
        width: "500px",
        backgroundColor: theme.palette.common.lightgray,
        padding: "50px 100px 0px 100px"
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

export default function LoginPage() {
    const classes = useStyles();
    const history = useHistory();

    const [username, setUsername] = useState("");
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [login, setLogin] = useState(false)

    useEffect(() => {
        if (login === true) {
            history.push("/ranking")
            localStorage.setItem("username", username)
        }
        ;
    }, [login])

    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }

    const handleCloseSnackbar = (event, reason) => {
        setOpenSnackbar(false);
    };

    function handleSubmit(e) {
        e.preventDefault();
        axios.get("http://localhost:8080/rank/isinuse/" + username)
            .then(result => {
                if (result.data) {
                    setOpenSnackbar(true);
                } else {
                    setLogin(true);
                }
            })
    }

    return (
        <Grid container alignItems={"center"} justify={"center"} direction={"row"} className={classes.container}>
            <Grid item>
                <Paper square className={classes.loginCard} elevation={2}>
                    <Grid container alignItems={"center"} direction={"column"} className={classes.container}
                          spacing={3}>
                        <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
                            <Grid item>
                                <Typography variant={"h4"}>Login</Typography>
                            </Grid>
                            <Grid item className={classes.item}>

                                <TextField className={classes.textField} id="username" label="Username" required
                                           color={"secondary"} onChange={e => {
                                    setUsername(e.target.value)
                                }}/>
                            </Grid>
                            <br/>
                            <Grid item>
                                <CustomButton text={"Login"} type={"submit"}/>
                            </Grid>
                        </form>
                        <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                            <Alert onClose={handleCloseSnackbar} severity="error">
                                This username is already in use. Try another one.
                            </Alert>
                        </Snackbar>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    );
}