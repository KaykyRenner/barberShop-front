import { Box } from "@mui/material";
import { useAuthContext } from "../../contexts/authContext";

const Login = ({ children }) => {
  const { isAuthenticated } = useAuthContext();
  if (isAuthenticated) {
    console.log(isAuthenticated)
    return <>{children}</>;
  }

  return (
    <Box >
      LOGAR      
    </Box>
  );
};

export default Login;
