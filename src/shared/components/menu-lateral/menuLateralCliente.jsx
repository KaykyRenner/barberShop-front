import {
  Drawer,
  useTheme,
  Avatar,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Icon,
  useMediaQuery,
} from "@mui/material";
import { useMatch, useNavigate, useResolvedPath } from "react-router-dom";
import { ContentCut, ScheduleSendTwoTone } from "@mui/icons-material";
import { Box } from "@mui/system";
import { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
//
import { getByIdCliente } from "../../services/api/cliente/cliente";
import { useTheme as mudarTema } from "../../contexts/themeContext";
import { useDrawer } from "../../contexts/drowerContext";
import { useAuthContext } from "../../contexts/authContext";
import getIdFromToken from "../../services/api/auth-login/manipulacaoDeId";

const ListItemLink = ({ to, icon, label, onClick }) => {
  const navigate = useNavigate();
  const resolvedPath = useResolvedPath(to);
  const match = useMatch({ path: resolvedPath.pathname, end: false }); // Uso do hook navigate do react-router-dom
  const handleClick = () => {
    navigate(to); // Realiza a navegação
    if (onClick) onClick(); // Executa a função onClick, caso seja fornecida
  };
  return (
    <ListItemButton selected={!!match} onClick={handleClick}>
      <ListItemIcon>
        <Icon>{icon}</Icon>
      </ListItemIcon>
      <ListItemText primary={label} />
    </ListItemButton>
  );
};

ListItemLink.propTypes = {
  to: PropTypes.string.isRequired,
  icon: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

const MenuLaterealCliente = ({ children }) => {
  const [verifynulll, setVerifynulll] = useState(null);
  const { logout } = useAuthContext();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm")); // Responsividade para ajustar o layout em telas pequenas
  const { isDrawerClosed, toggleDrawer } = useDrawer(); // Contexto do Drawer para controlar seu estado de abertura/fechamento
  const { themeName, toggleTheme } = mudarTema();
  useEffect(() => {
    const fetchCliente = async () => {
      try {
        const idUsuario = getIdFromToken();
        if (!idUsuario) return;
        const result = await getByIdCliente(idUsuario);
        if (!result) {
          console.error("Erro ao buscar cliente:", result);
          return;
        } else {
          const verifyResult = result.usuario.barbeiro_Id;
          if (verifyResult !== null) {
            setVerifynulll(verifyResult);
          }
        }
      } catch (err) {
        console.error("Erro ao buscar cliente:", err);
      }
    };
    fetchCliente()
  }, []);

  return (
    <>
      <Drawer
        open={isDrawerClosed}
        onClose={toggleDrawer}
        variant={matches ? "temporary" : "permanent"} // O tipo de Drawer muda com base no tamanho da tela
      >
        <Box
          width={theme.spacing(28)}
          height="100%"
          display="flex"
          flexDirection="column"
        >
          <Box
            width="100%"
            height={theme.spacing(20)}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Avatar
              sx={{ height: theme.spacing(12), width: theme.spacing(12) }}
              alt="Remy Sharp"
              src="https://avatars.githubusercontent.com/u/170106923?s=400&u=3264e4d1076ea118f0701c2c0235daa04013b4cf&v=4"
            />
          </Box>
          <Divider />
          <Box display="flex" flexDirection="column" height="100vh">
            <Box flex={1}>
              <List component="nav">
                {/* Adicionando o ListItemLink para navegação */}
                <ListItemLink
                  icon="home"
                  label="Página Inicial"
                  to="/pagina-inicial-cliente"
                  onClick={toggleDrawer}
                />
                <ListItemLink
                  icon={<ContentCut />}
                  label="Barbeiros"
                  to="/barbeiros"
                  onClick={toggleDrawer}
                />
                {verifynulll !== null && (
                  <ListItemLink
                    icon={<ScheduleSendTwoTone />}
                    label="Horários"
                    to="/horarios"
                  />
                )}
              </List>
            </Box>
            <List component="nav">
              <ListItemLink
                icon={"logout"}
                label="sair"
                onClick={logout}
                to="/login"
              />
              <ListItemLink
                icon={themeName === "light" ? "light_mode" : "dark_mode"}
                label="alternar Tema"
                onClick={toggleTheme}
              />
            </List>
          </Box>
        </Box>
      </Drawer>
      <Box height="100vh" marginLeft={matches ? 0 : theme.spacing(28)}>
        {/* Renderiza o conteúdo dentro do layout com o menu lateral */}
        {children}
      </Box>
    </>
  );
};

export { MenuLaterealCliente };
