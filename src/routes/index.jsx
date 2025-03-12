import { createBrowserRouter, Navigate } from "react-router-dom";
import DashBordCliente from "../pages/dashBord/dashBordCliente";
import { MenuLaterealCliente } from "../shared/components/menu-lateral/menuLateralCliente";
import ListagemBarbeiros from "../pages/barbeiros/listagemDeBarbeiros";
import CreateUsuario from "../pages/cadastroUsuarios/cadastro";
import { useAuthContext } from "../shared/contexts/authContext";
import Login from "../shared/components/login/login";

const PublicAuth = ({ element }) => {
  const { isAuthenticated } = useAuthContext();
  return isAuthenticated ? <Navigate to="/pagina-inicial" /> : element;
};
const ProtectAuth = ({ element }) => {
  const { isAuthenticated } = useAuthContext();
  return isAuthenticated ? element : <Navigate to="/login" />;
};

const AppRouter = createBrowserRouter([
  {
    path: "/login",
    element: <PublicAuth element={<Login />} />,
  },
  {
    path: "/criar",
    element: <PublicAuth element={<CreateUsuario />} />,
  },
  {
    path: "/pagina-inicial",
    element: (
      <ProtectAuth
        element={
          <MenuLaterealCliente>
            <DashBordCliente />
          </MenuLaterealCliente>
        }
      />
    ),
  },
  {
    path: "/barbeiros",
    element: (
      <ProtectAuth
        element={
          <MenuLaterealCliente>
            <ListagemBarbeiros />
          </MenuLaterealCliente>
        }
      />
    ),
  },
  {
    path: "*",
    element: <Navigate to="/pagina-inicial" />,
  },
]);

export { AppRouter };
