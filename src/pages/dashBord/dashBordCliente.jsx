import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import FerramentasDeListagem from "../../shared/components/barraDeferramentas/FerramentasDeListagem";
import FerramentasDeDetalhes from "../../shared/components/ferramentasDeDetalhes/ferramentaDeDetalhes";
import LayoutBaseDePagina from "../../shared/layouts/layoutBaseDePagina";
import getIdFromToken from "../../shared/services/api/auth-login/manipulacaoDeId";
import getByIdHorarioCliente from "../../shared/services/api/horariosBarbeiro/getByIdHorarioCliente";
import { getByIdCliente } from "../../shared/services/api/cliente/cliente";
import { useEffect, useState } from "react";

function DashBordCliente() {
  const [horarioCliente, sethorarioCliente] = useState("");
  const [idUsuario, setIdUsuario] = useState(null);
  const [contagem, setContegem] = useState("");
  useEffect(() => {
    const id = getIdFromToken();
    if (id) {
      setIdUsuario(id);
    }
  }, []); // Obtém o ID do usuário ao carregar a página

  useEffect(() => {
    if (idUsuario) {
      fetchHorarioCliente();
    }
  }, [idUsuario]);
  const fetchHorarioCliente = async () => {
    try {
      //const idUsuario = getIdFromToken();
      if (!idUsuario) return;
      const result = await getByIdCliente(idUsuario);
      if (!result || !result.usuario) {
        console.error("Erro ao buscar cliente:", result);
        return;
      }
      const id = result.usuario.id;
      const horarioAgendado = await getByIdHorarioCliente(id);
      console.log(horarioAgendado);

      if (!horarioAgendado || !horarioAgendado.data.horario) {
        console.error("Erro ao buscar horario", horarioAgendado);
        sethorarioCliente("");
        return;
      }
      const horario = horarioAgendado.data.horario.slice(0, 5);
      sethorarioCliente(horario);
      calculaTempoRestante(horario);
      console.log(contagem);
    } catch (err) {
      console.error("Erro ao buscar dados:", err);
    }
  };
  const calculaTempoRestante = (horario) => {
    const [hora, minuto] = horario.split(":").map(Number);
    const horarioAgendado = new Date();
    horarioAgendado.setHours(hora, minuto, 0, 0);
    const atualizaContagem = () => {
      const agora = new Date();
      const diferenca = horarioAgendado - agora;
      if (diferenca <= 0) {
        setContegem("chegou a hora");
        return;
      }
      const horas = Math.floor(diferenca / (1000 * 60 * 60));
      const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
      const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);
      setContegem(
        `${String(horas).padStart(2, "0")}:${String(minutos)
          .padStart(2,"0")}:${String(segundos).padStart(2, "0")}`
      );
    };
    atualizaContagem()
    const intervalo = setInterval(atualizaContagem,1000)
    return () =>{clearInterval(intervalo)}
  };
  useEffect(()=>{
    if(horarioCliente) calculaTempoRestante(horarioCliente)
  },[horarioCliente])
  return (
    <LayoutBaseDePagina
      titulo="pagina inicial"
      barraDeFerramentas={<FerramentasDeDetalhes />}
    >
      <Box width="100%" display="flex">
        <Grid container margin={1.5}>
          <Grid item container spacing={2}>
            <Grid item xs={12} sm={12} md={8} lg={4} xl={2}>
              <Card>
                <CardContent>
                  <Typography variant="h5" align="center">
                    agendamento
                  </Typography>
                  <Box
                    padding={6}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Typography variant="h1">{horarioCliente}</Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={8} lg={4} xl={2}>
              <Card>
                <CardContent>
                  <Typography variant="h5" align="center">
                    tempo restante
                  </Typography>
                  <Box
                    padding={6}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Typography variant="h1">{contagem}</Typography>
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
