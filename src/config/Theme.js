import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#006A71",
            light: "#68B0AB",
            contrastText: "#ffffff"
        },
        secondary: {
            main: "#FF7E67",
            contrastText: "#ffffff",
        },
        common: {
            black: "#000000",
            white: "#ffffff",
            lightgray: "#E8E8E8"
        },
        mastermind: {
            red: "#FF6767",
            orange: "#FFA767",
            yellow: "#FFDE67",
            green: "#D7FF67",
            cyan: "#67FFED",
            blue: "#67ADFF",
            purple: "#9867FF",
            pink: "#EA67FF"
        }
    },
    typography: {
        fontFamily: ["Montserrat"].join(","),
        color: "#000000",
    },
});

export default theme;