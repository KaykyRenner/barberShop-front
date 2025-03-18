import {
  Box,
  TextField,
  Button,
  Paper,
  useTheme,
  Icon,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import enviroment from "../../environment";

const FerramentasDeListagem = ({
  textoDeBusca = "",
  mostrarInputBusca = false,
  aoMudarTextoDeBusca,
  tesxtoBotaoNovo = "novo",
  mostrarBotaoNovo = false,
  aoClicarEmNovo,
  MostrarStatus = false,
  valorDeStatus = "",
  aoMudarStatus,
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
            placeholder={enviroment.INPUT_DE_BUSCA}
          />
        )}
        <Box>
          {MostrarStatus && (
            <FormControl>
              <InputLabel>status</InputLabel>
              <Select
                sx={{minWidth:120, height:theme.spacing(5)}}
                label="valor"
                value={valorDeStatus}
                onChange={(e) => aoMudarStatus && aoMudarStatus(e.target.value)}
              >
                <MenuItem value="disponível">disponível</MenuItem>
                <MenuItem value="reservado">reservado</MenuItem>
              </Select>
            </FormControl>
          )}
        </Box>
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
  MostrarStatus: PropTypes.bool,
  valorDeStatus: PropTypes.string,
  aoMudarStatus: PropTypes.func,
};
export default FerramentasDeListagem;
