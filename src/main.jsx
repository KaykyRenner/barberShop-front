import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom"; // Importando o RouterProvider
import { AppThemeProvider } from "./shared/contexts/themeContext.jsx";
import { DrawerProvider } from "./shared/contexts/drowerContext.jsx"; // Importando o DrawerProvider
import AppRouter from "./routes/index.jsx";

createRoot(document.getElementById("root")).render(
  <AppThemeProvider>
    <DrawerProvider>
      <StrictMode>
        <RouterProvider router={AppRouter} />
      </StrictMode>
    </DrawerProvider>
  </AppThemeProvider>
);
