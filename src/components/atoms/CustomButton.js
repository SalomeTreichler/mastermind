import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    button: {
        backgroundColor: theme.palette.primary.light,
        borderRadius: 0,
        color: theme.palette.common.white
    },
}));

export default function CustomButton(props) {
    const classes = useStyles();

    return (
        <Button {...props} variant="contained" disableElevation color="primary" className={classes.button}>
            {props.text}
        </Button>
    );
}