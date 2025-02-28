import { useDrawer } from "../shared/contexts/drowerContext";
import {useTheme} from "../shared/contexts/themeContext"; 
import { Button } from "@mui/material";
function PageInicial() {
    const {themeName,toggleTheme} = useTheme()
    const {toggleDrawer} = useDrawer()
    return (
      <>
        <div>
        <Button onClick={toggleDrawer} variant="contained" color="primary">
            aa
        </Button>
        </div>
      </>
    )
  }
  
  export default PageInicial
  