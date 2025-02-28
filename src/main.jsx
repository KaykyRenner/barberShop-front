import AppRouter  from './routes/index.jsx'
import MenuLatereal from './shared/components/menu-lateral/menuLateral.jsx'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { AppThemeProvider } from './shared/contexts/themeContext.jsx'
import {DrawerProvider} from './shared/contexts/drowerContext.jsx'

createRoot(document.getElementById('root')).render(
  <AppThemeProvider>
    <DrawerProvider>
  <StrictMode>
    <MenuLatereal>
    <RouterProvider router={AppRouter} />
    </MenuLatereal>
  </StrictMode>
  </DrawerProvider>
  </AppThemeProvider>
  ,
)
