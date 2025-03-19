import { Box, Card, CardContent, Grid, Grid2, Typography } from "@mui/material";
import FerramentasDeListagem from "../../shared/components/barraDeferramentas/FerramentasDeListagem";
import FerramentasDeDetalhes from "../../shared/components/ferramentasDeDetalhes/ferramentaDeDetalhes";
import LayoutBaseDePagina from "../../shared/layouts/layoutBaseDePagina";

function DashBordCliente() {
  return (
    <LayoutBaseDePagina
      titulo="pagina inicial"
      barraDeFerramentas={<FerramentasDeDetalhes mostrarBotaoNovo={false} />}
    >
      <Box width="100%" display="flex">
        <Grid container margin={1.5}>
          <Grid item container spacing={2}>
            <Grid item xs={12} sm={12} md={8} lg={4} xl={2}>
              <Card>
                <CardContent>
                  <Typography variant="h5" align="center">
                    agendamentos
                  </Typography>
                  <Box padding={6} display="flex" alignItems="center" justifyContent="center">
                    <Typography variant="h1">1</Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={8} lg={4} xl={2}>
              <Card>
              <CardContent>
                  <Typography variant="h5" align="center">
                    agendamentos
                  </Typography>
                  <Box padding={6} display="flex" alignItems="center" justifyContent="center">
                    <Typography variant="h1">1</Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </LayoutBaseDePagina>
  );
}

export default DashBordCliente;
