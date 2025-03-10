import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { AppThemeProvider } from "./shared/contexts/themeContext";
import { DrawerProvider } from "./shared/contexts/drowerContext";
import { AuthProvider } from "./shared/contexts/authContext"; // Certifique-se de importar isso!
import {AppRouter} from "./routes/index"

const RootComponent = () => {
  return (
    <AuthProvider>  {/* 🔥 O AuthProvider precisa envolver toda a aplicação! */}
      <AppThemeProvider>
        <DrawerProvider>
          <RouterProvider router={AppRouter} />
        </DrawerProvider>
      </AppThemeProvider>
    </AuthProvider>
  );
};

createRoot(document.getElementById("root")).render(<RootComponent />);
