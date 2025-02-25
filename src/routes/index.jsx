//import Erro from "../pages/erro";
//import NavBar from "../shared/components/navBar";
import { createBrowserRouter, Navigate } from "react-router-dom";

const AppRouter = createBrowserRouter([
  {
    path: "/pagina-inicial",
    element: <p>teste</p>,
  },
  {
    path: "*",
    element: <Navigate to="/pagina-inicial" />
  }
]);

export default AppRouter;
