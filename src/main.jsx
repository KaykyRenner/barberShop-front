import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { AppThemeProvider } from "./shared/contexts/themeContext";
import { DrawerProvider } from "./shared/contexts/drowerContext";
import { AuthProvider } from "./shared/contexts/authContext"; // Certifique-se de importar isso!
import { AppRouter } from "./routes/index";
import Login from "./shared/components/login/login";
import CreateUsuario from "./pages/cadastroUsuarios/cadastro";

const RootComponent = () => {
  return (
    <AuthProvider>
      <AppThemeProvider>
        <DrawerProvider>
          <RouterProvider router={AppRouter} />
        </DrawerProvider>
      </AppThemeProvider>
    </AuthProvider>
  );
};

createRoot(document.getElementById("root")).render(<RootComponent />);
