import { createContext, useState, useContext, useCallback, useMemo } from "react"
import {lightTheme,darkTheme} from "../themes/"
import { ThemeProvider} from "@emotion/react"
import { Box } from "@mui/material"
const ThemeContext = createContext()
const AppThemeProvider = ({children})=>{
    const [themeName,setTheme] = useState('light')
    const toggleTheme =useCallback(()=>{
        setTheme((theme) => theme === 'light'?'dark':'light');
    },[]);
    const theme = useMemo(()=>{
        if(themeName === 'light') return lightTheme

        return darkTheme
    },[themeName])
    return (
        <ThemeContext.Provider value={{themeName,toggleTheme}}>
            <ThemeProvider theme={theme}>
                <Box width="100vw" height="100vh" bgcolor={theme.palette.background.default}>
                {children}
                </Box>
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}
const useTheme = ()=>{
    return useContext(ThemeContext)
}
export {AppThemeProvider,useTheme}