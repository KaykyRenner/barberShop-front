import { Typography, useTheme,IconButton,Icon, useMediaQuery} from "@mui/material";
import { Box } from "@mui/system";
import PropTypes from "prop-types";
import { useDrawer } from "../contexts/drowerContext";
const LayoutBaseDePagina = ({ children, titulo }) => {
  const theme = useTheme();
  const {toggleDrawer} = useDrawer()
  const match = useMediaQuery(theme.breakpoints.down("sm"))
  return (
    <Box height="100%" display="flex" flexDirection="column" gap={1}>
      <Box
        gap={1}
        padding={1}
        height={theme.spacing(12)}
        display="flex"
        alignItems="center"
      >
        {match && (<IconButton onClick={toggleDrawer}><Icon>menu</Icon></IconButton>)}
        <Typography variant="h5">{titulo}</Typography>
      </Box>
      <Box>{children}</Box>
      <Box>barra de ferramenta</Box>
    </Box>
  );
};
LayoutBaseDePagina.prototype = {
  titulo: PropTypes.string,
};

export default LayoutBaseDePagina;
