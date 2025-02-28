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
import { Box, } from "@mui/system";
import { useDrawer } from "../../contexts/drowerContext";

const MenuLatereal = ({ children }) => {
  const them = useTheme();
  const metches = useMediaQuery(them.breakpoints.down("sm"))
  const {isDrawerClosed,toggleDrawer } = useDrawer()
  return (
    <>
      <Drawer open={isDrawerClosed} onClose={toggleDrawer} variant={metches?"temporary" : "permanent"}>
        <Box
          width={them.spacing(28)}
          height="100%"
          display="flex"
          flexDirection="column"
        >
          <Box
            width="100%"
            height={them.spacing(20)}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Avatar
              sx={{ height: them.spacing(12), width: them.spacing(12) }}
              alt="Remy Sharp"
              src="https://avatars.githubusercontent.com/u/170106923?s=400&u=3264e4d1076ea118f0701c2c0235daa04013b4cf&v=4"
            />
          </Box>
          <Divider />
          <Box flex={1}>
            <List component="nav">
              <ListItemButton>
                <ListItemIcon>
                  <Icon>home</Icon>
                </ListItemIcon>
                <ListItemText primary="inicio" /> {/* Adicione um texto aqui */}
              </ListItemButton>
            </List>
          </Box>
        </Box>
      </Drawer>
      <Box height="100vh" marginLeft={metches? 0: them.spacing(28)}>
        {children}
      </Box>
    </>
  );
};
export default MenuLatereal;
