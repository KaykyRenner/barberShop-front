import { createBrowserRouter, Navigate } from "react-router-dom";
import DashBordCliente from "../pages/dashBord/dashBordCliente";
import {MenuLaterealCliente} from "../shared/components/menu-lateral/menuLateralCliente"; 
import ListagemBarbeiros from "../pages/barbeiros/listagemDeBarbeiros";
import CreateUsuario from "../pages/cadastroELoginUsuarios/cadastro";
import Login from "../shared/components/login/login";
import PrivateRoute from "../shared/components/priveteRoute/priveteRoute";

const AppRouter = createBrowserRouter([
  {
    path: "/criar",
    element: <CreateUsuario />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/pagina-inicial",
    element: (
      <PrivateRoute>
        <MenuLaterealCliente>
          <DashBordCliente />
        </MenuLaterealCliente>
      </PrivateRoute>
    ),
  },
  {
    path: "/barbeiros",
    element: (
      <PrivateRoute>
        <MenuLaterealCliente>
          <ListagemBarbeiros />
        </MenuLaterealCliente>
      </PrivateRoute>
    ),
  },
  {
    path: "*",
    element: <Navigate to="/pagina-inicial" />,
  },
]);

export {AppRouter};
