import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import { useAuthContext } from "../../contexts/authContext";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useAuthContext();
  const navigete = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = () => {
    login(email, senha)
      .then((result) => {
        if (result instanceof Error) {
          navigete("/login");
        } else {
          navigete("/pagina-inicial-cliente");

          window.location.reload();
        }
      })
      .catch((err) => {
        console.log(err, "erro");
      });
  };
  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Card>
        <CardContent>
          <Box display="flex" flexDirection="column" gap={2} width={250}>
            <Typography variant="h6" align="center">
              Login
            </Typography>
            <TextField
              fullWidth
              label="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={handleEnter}
            />

            <TextField
              fullWidth
              label="senha"
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              onKeyDown={handleEnter}
            />
          </Box>
        </CardContent>
        <CardActions>
          <Box width="100%" display="flex" justifyContent="center">
            <Button
              variant="contained"
              onClick={handleLogin}
              onKeyDown={handleEnter}
            >
              ENTRAR
            </Button>
          </Box>
        </CardActions>
        <CardContent>
          <Typography align="center">
            <Link to="/criar">Criar Conta</Link>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Login;
