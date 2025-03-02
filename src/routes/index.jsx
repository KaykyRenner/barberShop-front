import { createBrowserRouter, Navigate } from "react-router-dom";
import DashBord from "../pages/dashBord/dashBord";
import { MenuLatereal } from "../shared/components/menu-lateral/menuLateral";

const AppRouter = createBrowserRouter([
  {
    path: "/pagina-inicial",
    element: (
      <MenuLatereal>
        <DashBord />
      </MenuLatereal>
    ),
  },
  {
    path: "*",
    element: <Navigate to="/pagina-inicial" />,
  },
]);

export default AppRouter;
