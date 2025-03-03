import { Box, Button, Divider, Icon, Paper, Skeleton, useTheme } from "@mui/material";
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
      {(mostrarBotaoSalvar && !mostrarBotaoSalvarCarregando) && (
        <Button
          onClick={aoClicarEmSalvar}
          variant="contained"
          color="primary"
          disableElevation
          startIcon={<Icon>save</Icon>}
        >
          SALVAR
        </Button>
      )}
      {mostrarBotaoSalvarCarregando &&(<Skeleton width={110} height={60}></Skeleton>)}
      {(mostrarBotaoSalvarEFechar &&  !mostrarBotaoSalvarEFecharCarregando) && (
        <Button
        onClick={aoClicarEmSalvarEFechar}
          variant="outlined"
          color="primary"
          disableElevation
          startIcon={<Icon>save</Icon>}
        >
          SALVAR E VOLTAR
        </Button>
      )}
      {mostrarBotaoSalvarEFecharCarregando &&(<Skeleton width={180} height={60}></Skeleton>)}
      {(mostrarBotaoApagar && !mostrarBotaoApagarCarregando) && (
        <Button
        onClick={aoClicarEmApagar}
          variant="outlined"
          color="primary"
          disableElevation
          startIcon={<Icon>delete</Icon>}
        >
          APAGAR
        </Button>
      )}
      {mostrarBotaoApagarCarregando &&(<Skeleton width={110} height={60}></Skeleton>)}
      {(mostrarBotaoNovo && !mostrarBotaoNovoCarregando) && (
        <Button
        onClick={aoClicarEmNovo}
          variant="outlined"
          color="primary"
          disableElevation
          startIcon={<Icon>add</Icon>}
        >
          {textoBotaoDeNovo}
        </Button>
      )}
      {mostrarBotaoNovoCarregando &&(<Skeleton width={110} height={60}></Skeleton>)}
      <Divider variant="middle" orientation="vertical"></Divider>
      {(mostrarBotaoVoltar && !mostrarBotaoVoltarCarregando) && (
        <Button
        onClick={aoClicarEmVoltar}
          variant="outlined"
          color="primary"
          disableElevation
          startIcon={<Icon>arrow_back</Icon>}
        >
          VOLTAR
        </Button>
      )}
      {mostrarBotaoVoltarCarregando &&(<Skeleton width={110} height={60}></Skeleton>)}
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
