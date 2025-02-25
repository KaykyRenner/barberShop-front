import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import AppRouter  from './routes/index.jsx'
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from '@mui/material'
import lightTheme from './shared/themes/light.js'


createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={lightTheme}>
  <StrictMode>
    <RouterProvider router={AppRouter} />
  </StrictMode>
  </ThemeProvider>
  ,
)
