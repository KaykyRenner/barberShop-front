import { Box, TextField, Button, Paper, useTheme, Icon } from "@mui/material";
import PropTypes from "prop-types";

const FerramentasDeListagem = ({
  textoDeBusca = "",
  mostrarInputBusca = false,
  aoMudarTextoDeBusca,
  tesxtoBotaoNovo = "novo",
  mostrarBotaoNovo = true,
  aoClicarEmNovo,
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
      <Box flex={1}>
        {mostrarInputBusca && (
          <TextField
            value={textoDeBusca}
            onChange={(e) => e && aoMudarTextoDeBusca(e.target.value)}
            size="small"
            placeholder="pesquisar"
          />
        )}
      </Box>
      {mostrarBotaoNovo && (
        <Button
          onChange={(e) => e && aoClicarEmNovo(e.target.value)}
          variant="contained"
          color="primary"
          disableElevation
          endIcon={<Icon>add</Icon>}
        >
          {tesxtoBotaoNovo}
        </Button>
      )}
    </Box>
  );
};
FerramentasDeListagem.prototype = {
  textoDeBusca: PropTypes.string,
  mostrarInputBusca: PropTypes.bool,
  aoMudarTextoDeBusca: PropTypes.func,
  tesxtoBotaoNovo: PropTypes.string,
  mostrarBotaoNovo: PropTypes.bool,
  aoClicarEmNovo: PropTypes.func,
};
export default FerramentasDeListagem;
