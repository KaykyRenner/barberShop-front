import { Box, Typography } from "@mui/material";
import { useAuthContext } from "../../contexts/authContext";

const Login = ({ children }) => {
  const { isAuthenticated } = useAuthContext();

  if (isAuthenticated) {
    // Se o usuário estiver autenticado, renderiza os filhos passados
    return <>{children}</>;
  }

  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
      <Typography variant="h6">Você precisa estar logado para acessar esta página.</Typography>
      {/* Aqui você pode incluir um formulário de login, caso deseje */}
    </Box>
  );
};

export default Login;
