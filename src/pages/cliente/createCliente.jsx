import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Icon,
  TextField,
  Typography,
} from "@mui/material";
import create from "../../shared/services/api/cliente/cliente";
import { NavigateNext } from "@mui/icons-material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const CreateCliente = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const navigate = useNavigate()
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
              CADASRTO CLIENTE
            </Typography>
            <TextField
              fullWidth
              label="nome"
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              //onKeyDown={handleEnter}
            />

            <TextField
              fullWidth
              label="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              fullWidth
              label="telefone"
              type="tel"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
            />
          </Box>
        </CardContent>
        <CardActions>
          <Box
            width="100%"
            display="flex"
            justifyContent="center"
            onClick={async () => {
              await create(nome, email, telefone).then(()=>{
                navigate("/pagina-inicial-cliente")
              })
            }}
          >
            <Button variant="contained">
              Próximo <Icon>{<NavigateNext />}</Icon>
            </Button>
          </Box>
        </CardActions>
      </Card>
    </Box>
  );
};
export default CreateCliente;
