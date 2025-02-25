//import Erro from "../pages/erro";
//import NavBar from "../shared/components/navBar";
import { Button } from "@mui/material";
import { createBrowserRouter, Navigate } from "react-router-dom";

const AppRouter = createBrowserRouter([
  {
    path: "/pagina-inicial",
    element: <Button variant="contained" color="primary">aa</Button>
  },
  {
    path: "*",
    element: <Navigate to="/pagina-inicial" />
  }
]);

export default AppRouter;
