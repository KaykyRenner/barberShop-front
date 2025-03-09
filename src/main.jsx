import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom"; // Importando o RouterProvider
import { AppThemeProvider } from "./shared/contexts/themeContext.jsx";
import { DrawerProvider } from "./shared/contexts/drowerContext.jsx"; // Importando o DrawerProvider
import AppRouter from "./routes/index.jsx";
import { AuthProvider } from "./shared/contexts/authContext.jsx";
import Login from "./shared/components/login/login.jsx";
import CreateUsuario from "./pages/cadastroELoginUsuarios/cadastro.jsx";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <AppThemeProvider>

      <Login>        
        <DrawerProvider>
          <StrictMode>
            <RouterProvider router={AppRouter} />
          </StrictMode>
        </DrawerProvider>
      </Login>

    </AppThemeProvider>
  </AuthProvider>
);
