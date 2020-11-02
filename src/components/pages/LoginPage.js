import React, {useEffect, useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {useHistory} from 'react-router-dom';
import {Grid} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import CustomButton from "../atoms/CustomButton";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import {Visibility, VisibilityOff} from "@material-ui/icons";
import Input from "@material-ui/core/Input";
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
    registerLink: {
        fontSize: "12px",
        marginTop: "12px"
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
    const [values, setValues] = useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    useEffect(() => {
        if (login === true) {
            history.push("/ranking")
            localStorage.setItem("username", username)
        }        ;
    }, [login])

    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }

    const handleCloseSnackbar = (event, reason) => {
        setOpenSnackbar(false);
    };

    function handleSubmit(e) {
        e.preventDefault();
        axios.post("http://localhost:8080/login", {
            username: username,
            password: values.password
        }).then(result => {
            if (result.status === 200) {
                console.log(result)
                setLogin(true)
            }
        }).catch(error => {
            setOpenSnackbar(true)
            console.log(error)
        })
    }

    const handleChangePassword = (prop) => (event) => {
        setValues({...values, [prop]: event.target.value});
    };

    const handleClickShowPassword = () => {
        setValues({...values, showPassword: !values.showPassword});
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };


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
                                <br/>
                                <br/>
                                <FormControl className={classes.textField} color={"secondary"} id="password"
                                             label="Password" required>
                                    <InputLabel>Password</InputLabel>
                                    <Input
                                        id="filled-adornment-password"
                                        type={values.showPassword ? 'text' : 'password'}
                                        value={values.password}
                                        onChange={handleChangePassword('password')}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                >
                                                    {values.showPassword ? <Visibility/> : <VisibilityOff/>}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                    />
                                </FormControl>
                                <br/>
                                <Typography className={classes.registerLink}>Don’t have an account yet? Register <a
                                    href={"register"} className={classes.link}>here</a></Typography>

                            </Grid>
                            <br/>
                            <br/>

                            <Grid item>
                                <CustomButton text={"Login"} type={"submit"}/>
                            </Grid>
                        </form>
                        <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                            <Alert onClose={handleCloseSnackbar} severity="error">
                                Choose another Username.
                            </Alert>
                        </Snackbar>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    );
}