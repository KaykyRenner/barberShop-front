import { createBrowserRouter, Navigate } from "react-router-dom";
import DashBordCliente from "../pages/dashBord/dashBordCliente";
import {MenuLaterealCliente} from "../shared/components/menu-lateral/menuLateralCliente"; 
import ListagemBarbeiros from "../pages/barbeiros/listagemDeBarbeiros";
import CreateUsuario from "../pages/cadastroELoginUsuarios/cadastro";

const AppRouter = createBrowserRouter([
  {
    path: "/cadastro",
    element: (
        <CreateUsuario />
    ),
  },
  {
    path: "/pagina-inicial",
    element: (
      <MenuLaterealCliente>
        <DashBordCliente />
      </MenuLaterealCliente>
    ),
  },
  {
    path: "/barbeiros",
    element: (
      <MenuLaterealCliente>
        <ListagemBarbeiros />
      </MenuLaterealCliente>
    ),
  },
  {
    path: "*",
    element: <Navigate to="/pagina-inicial" />,
  },
]);

export default AppRouter;
