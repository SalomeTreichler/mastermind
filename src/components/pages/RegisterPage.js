import React, {useEffect, useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";
import {useHistory} from 'react-router-dom';
import Typography from "@material-ui/core/Typography";
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import CustomButton from "../atoms/CustomButton";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import {Visibility, VisibilityOff} from "@material-ui/icons";
import axios from "axios";

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

    const history = useHistory()

    const [values, setValues] = useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const [username, setUsername] = useState("");
    const [register, setRegister] = useState(false)


    useEffect(() => {
        if (register === true) history.push("/login");
    }, [register])

    function handleSubmit(e) {
        e.preventDefault();
        axios.post("http://localhost:8080/users/signin", {
            username: username,
            password: values.password
        }).then(result => {
            if (result.status === 200) {
                setRegister(true)
            } else if (result.status === 401) {

            }
        }).catch(error => (console.log(error)))
    }


    const handleChange = (prop) => (event) => {
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
                <Paper square className={classes.registerCard} elevation={2}>
                    <Grid container alignItems={"center"} direction={"column"} className={classes.container}
                          spacing={3}>
                        <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
                            <Grid item>
                                <Typography variant={"h4"}>Register</Typography>
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
                                        onChange={handleChange('password')}
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
                                <br/>
                            </Grid>
                            <Grid item>
                                <CustomButton text={"Register"} type={"submit"}/>
                            </Grid>
                        </form>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    );
}