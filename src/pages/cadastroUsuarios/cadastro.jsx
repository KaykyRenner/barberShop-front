import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import createCadastro from "../../shared/services/api/cadastroELoginUsuarios/cadastro";
import { Link, Navigate } from "react-router-dom";
import { useAuthContext } from "../../shared/contexts/authContext";

const CreateUsuario = ({children}) => {
  const { isAuthenticated } = useAuthContext();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [role, setRole] = useState("");
  const [errors, setErrors] = useState({});
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    const created = await createCadastro(senha, email, role);
    if (created.error === "Email ou Senha já cadastrado") {
        setErrors({
          email: "Email ou Senha já cadastrado", 
          senha: "Email ou Senha já cadastrado",
        });
      } else if (created.error && created.error.body) {
        const newError = {};
        
        if (created.error.body.email) newError.email = created.error.body.email;
        if (created.error.body.senha) newError.senha = created.error.body.senha;
        if (created.error.body.role) newError.role = created.error.body.role;
  
        setErrors(newError);
      } else {
        setErroGeneric("Erro desconhecido ao cadastrar.");
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
          <form onSubmit={handleSubmit}>
            <Box display="flex" flexDirection="column" gap={2} width={250}>
              <Typography variant="h6" align="center">
                Cadastre-se
              </Typography>
              <TextField
                fullWidth
                label="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && (
                <Typography style={{ color: "red", m: 0 }}>
                  {errors.email}
                </Typography>
              )}
              <TextField
                fullWidth
                label="senha"
                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
              {errors.senha && (
                <Typography style={{ color: "red", m: 0 }}>
                  {errors.senha}
                </Typography>
              )}
              <FormControl fullWidth>
                <InputLabel>selecione um tipo</InputLabel>
                <Select
                  label="barbeiro ou cliente"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                >
                  <MenuItem value="cliente">Usuário</MenuItem>
                  <MenuItem value="barbeiro">Barbeiro</MenuItem>
                </Select>
                {errors.role && (
                  <Typography style={{ color: "red", m: 0 }}>
                    {errors.role}
                  </Typography>
                )}
              </FormControl>
            </Box>
            <CardActions>
              <Box width="100%" display="flex" justifyContent="center">
                <Button variant="contained" type="submit">
                  cadastrar
                </Button>
              </Box>
            </CardActions>
          </form>          
            <Box paddingTop={2}>
              <Typography align="center">
                <Link to="/login">
                já tem uma conta?
                </Link>
              </Typography>
            </Box>
        </CardContent>
      </Card>
    </Box>
  );}

export default CreateUsuario;
