import {
  Typography,
  useTheme,
  IconButton,
  Icon,
  useMediaQuery,
} from "@mui/material";
import { Box } from "@mui/system";
import PropTypes from "prop-types";
import { useDrawer } from "../contexts/drowerContext";
const LayoutBaseDePagina = ({ children, titulo, barraDeFerramentas }) => {
  const theme = useTheme();
  const { toggleDrawer } = useDrawer();
  const snDown = useMediaQuery(theme.breakpoints.down("sm"));
  const mdDown = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box height="100%" display="flex" flexDirection="column" gap={1}>
      <Box
        gap={1}
        padding={1}
        height={theme.spacing(snDown ? 6 : mdDown ? 8 : 12)}
        display="flex"
        alignItems="center"
      >
        {snDown && (
          <IconButton onClick={toggleDrawer}>
            <Icon>menu</Icon>
          </IconButton>
        )}
        <Typography
          variant={snDown ? "h5" : mdDown ? "h4" : "h3"}
          whiteSpace="nowrap"
          overflow="hidden"
          textOverflow="ellipsis"
        >
          {titulo}
        </Typography>
      </Box>
      {barraDeFerramentas && (
        <Box>
          <Typography>{barraDeFerramentas}</Typography>
        </Box>
      )}
      <Box flex={1} overflow="auto">
        <Typography>{children}</Typography>
      </Box>
    </Box>
  );
};
LayoutBaseDePagina.prototype = {
  titulo: PropTypes.string,
  barraDeFerramentas: PropTypes.node,
};

export default LayoutBaseDePagina;
