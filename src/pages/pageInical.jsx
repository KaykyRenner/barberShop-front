import {useTheme} from "../shared/contexts/themeContext"; 
import { Button } from "@mui/material";
function PageInicial() {
    const {themeName,toggleTheme} = useTheme()
    return (
      <>
        <div>
        <Button onClick={toggleTheme} variant="contained" color="primary">
            aa
        </Button>
        </div>
      </>
    )
  }
  
  export default PageInicial
  