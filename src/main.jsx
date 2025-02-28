import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppRouter  from './routes/index.jsx'
import { RouterProvider } from 'react-router-dom'
import { AppThemeProvider } from './shared/contexts/themeContext.jsx'
import MenuLatereal from './shared/components/menu-lateral/menuLateral.jsx'


createRoot(document.getElementById('root')).render(
  <AppThemeProvider>
  <StrictMode>
    <MenuLatereal>
    <RouterProvider router={AppRouter} />
    </MenuLatereal>
  </StrictMode>
  </AppThemeProvider>
  ,
)
