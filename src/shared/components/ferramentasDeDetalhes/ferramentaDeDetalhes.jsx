import {
  Box,
  Button,
  Divider,
  Icon,
  Paper,
  Skeleton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import PropTypes from "prop-types";

const FerramentasDeDetalhes = ({
  textoBotaoDeNovo = "NOVO",
  mostrarBotaoNovo = true,
  mostrarBotaoVoltar = true,
  mostrarBotaoApagar = true,
  mostrarBotaoSalvar = true,
  mostrarBotaoSalvarEFechar = false,

  mostrarBotaoNovoCarregando = false,
  mostrarBotaoVoltarCarregando = false,
  mostrarBotaoApagarCarregando = false,
  mostrarBotaoSalvarCarregando = false,
  mostrarBotaoSalvarEFecharCarregando = false,

  aoClicarEmNovo,
  aoClicarEmVoltar,
  aoClicarEmApagar,
  aoClicarEmSalvar,
  aoClicarEmSalvarEFechar,
}) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));
  const mdDown = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box
      component={Paper}
      elevation={2}
      height={theme.spacing(5)}
      display="flex"
      gap={theme.spacing(1)}
      marginX={theme.spacing(1)}
      padding={theme.spacing(1)}
      paddingX={theme.spacing(2)}
      alignItems="center"
    >
      {mostrarBotaoSalvar && !mostrarBotaoSalvarCarregando && (
        <Button
          onClick={aoClicarEmSalvar}
          variant="contained"
          color="primary"
          disableElevation
          startIcon={<Icon>save</Icon>}
        >
          <Typography
            variant="button"
            whiteSpace="nowrap"
            overflow="hidden"
            textOverflow="ellipsis"
          >
            SALVAR
          </Typography>
        </Button>
      )}
      {mostrarBotaoSalvarCarregando && (
        <Skeleton width={110} height={60}></Skeleton>
      )}
      {mostrarBotaoSalvarEFechar &&
        !mostrarBotaoSalvarEFecharCarregando &&
        !mdDown && (
          <Button
            onClick={aoClicarEmSalvarEFechar}
            variant="outlined"
            color="primary"
            disableElevation
            startIcon={<Icon>save</Icon>}
          >
            <Typography
              variant="button"
              whiteSpace="nowrap"
              overflow="hidden"
              textOverflow="ellipsis"
            >
              SALVAR E VOLTAR
            </Typography>
          </Button>
        )}
      {mostrarBotaoSalvarEFecharCarregando && !mdDown && (
        <Skeleton width={180} height={60}></Skeleton>
      )}
      {mostrarBotaoApagar && !mostrarBotaoApagarCarregando && (
        <Button
          onClick={aoClicarEmApagar}
          variant="outlined"
          color="primary"
          disableElevation
          startIcon={<Icon>delete</Icon>}
        >
          <Typography
            variant="button"
            whiteSpace="nowrap"
            overflow="hidden"
            textOverflow="ellipsis"
          >
            APAGAR
          </Typography>
        </Button>
      )}
      {mostrarBotaoApagarCarregando && (
        <Skeleton width={110} height={60}></Skeleton>
      )}
      {mostrarBotaoNovo && !mostrarBotaoNovoCarregando && !smDown && (
        <Button
          onClick={aoClicarEmNovo}
          variant="outlined"
          color="primary"
          disableElevation
          startIcon={<Icon>add</Icon>}
        >
          <Typography
            variant="button"
            whiteSpace="nowrap"
            overflow="hidden"
            textOverflow="ellipsis"
          >
            {textoBotaoDeNovo}
          </Typography>
        </Button>
      )}
      {mostrarBotaoNovoCarregando && !smDown && (
        <Skeleton width={110} height={60}></Skeleton>
      )}
      {mostrarBotaoVoltar &&
        (
          mostrarBotaoNovo ||
          mostrarBotaoVoltar ||
          mostrarBotaoApagar ||
          mostrarBotaoSalvar) && (
          <Divider variant="middle" orientation="vertical"></Divider>
        )}
      {mostrarBotaoVoltar && !mostrarBotaoVoltarCarregando && (
        <Button
          onClick={aoClicarEmVoltar}
          variant="outlined"
          color="primary"
          disableElevation
          startIcon={<Icon>arrow_back</Icon>}
        >
          <Typography
            variant="button"
            whiteSpace="nowrap"
            overflow="hidden"
            textOverflow="ellipsis"
          >
            VOLTAR
          </Typography>
        </Button>
      )}
      {mostrarBotaoVoltarCarregando && (
        <Skeleton width={110} height={60}></Skeleton>
      )}
    </Box>
  );
};
FerramentasDeDetalhes.propTypes = {
  mostrarBotaoNovo: PropTypes.bool,
  mostrarBotaoVoltar: PropTypes.bool,
  mostrarBotaoApagar: PropTypes.bool,
  mostrarBotaoSalvar: PropTypes.bool,
  mostrarBotaoSalvarEFechar: PropTypes.bool,

  mostrarBotaoNovoCarregando: PropTypes.bool,
  mostrarBotaoVoltarCarregando: PropTypes.bool,
  mostrarBotaoApagarCarregando: PropTypes.bool,
  mostrarBotaoSalvarCarregando: PropTypes.bool,
  mostrarBotaoSalvarEFecharCarregando: PropTypes.bool,

  aoClicarEmNovo: PropTypes.func,
  aoClicarEmVoltar: PropTypes.func,
  aoClicarEmApagar: PropTypes.func,
  aoClicarEmSalvar: PropTypes.func,
  aoClicarEmSalvarEFechar: PropTypes.func,
};
export default FerramentasDeDetalhes;
