import { createTheme } from "@mui/material";
import { blueGrey, deepOrange } from "@mui/material/colors";


export const darkTheme = createTheme({
    palette: {
        mode:"dark",
        primary: {
            main: blueGrey[700],
            dark: blueGrey[800],
            light: blueGrey[500],
            contrastText: '#FFFFFF'
        },
        secondary: {
            main: deepOrange[500],
            dark: deepOrange[400],
            light: deepOrange[300],
            contrastText: '#FFFFFF'
        },
        background: {
            default: '#303030',
            paper: '#424242'
        },
    },
    typography:{
        allVariants:{
            color:"#FFFFFF"
        }
    }
});
