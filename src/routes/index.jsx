//import Erro from "../pages/erro";
//import NavBar from "../shared/components/navBar";

import { createBrowserRouter, Navigate } from "react-router-dom";
import PageInicial from "../pages/pageInical";
const AppRouter = createBrowserRouter([
  {
    path: "/pagina-inicial",
    element:<PageInicial/>
  },
  {
    path: "*",
    element: <Navigate to="/pagina-inicial" />
  }
]);

export default AppRouter;
