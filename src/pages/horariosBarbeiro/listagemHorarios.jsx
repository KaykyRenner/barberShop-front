import {
  Box,
  Button,
  LinearProgress,
  Pagination,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import useDebounce from "../../shared/hooks/useDeBounce";
import { useEffect, useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import enviroment from "../../shared/environment";
import LayoutBaseDePagina from "../../shared/layouts/layoutBaseDePagina";
import FerramentasDeListagem from "../../shared/components/barraDeferramentas/FerramentasDeListagem";
import getIdFromToken from "../../shared/services/api/auth-login/manipulacaoDeId";
import { getByIdCliente } from "../../shared/services/api/cliente/cliente";
import { barbeiroServices } from "../../shared/services/api/barbeiro/barbeiro";
import { agendarHorario } from "../../shared/services/api/agendarHorario/agendarHorario";
import getAllHorarios from "../../shared/services/api/horariosBarbeiro/listagemHorario";

const ListagemDeHorarios = () => {
  const navigate = useNavigate()
  const [nomeBarbeiro, setNomeBarbeiro] = useState("");
  const [clienteID, setIdCliente] = useState("");
  const [status, setStatus] = useState("");
  const { debounce } = useDebounce();
  const [searchParams, setSearchParams] = useSearchParams();
  const [rows, setRows] = useState([]);
  const [count, setCount] = useState("");
  const [loading, setLoading] = useState(true);
  const busca = useMemo(() => {
    return searchParams.get("busca") || "";
  });
  const pagina = useMemo(() => {
    return Number(searchParams.get("pagina")) || 1;
  });
  const handleSelectId = async (reservar, id) => {
    try {
      const result = await agendarHorario(reservar, id);
      if(result.message === "voce só pode reservar um horario por vez"){
        alert("voce só pode reservar um horario por vez")
        navigate("/pagina-inicial-cliente")
      }else{
        alert("horario agendando com sucesso")
        navigate("/pagina-inicial-cliente")
      }
    } catch (err) {
      console.error("Erro ao agendar horario:", err);
      alert("Erro ao agendar horario")
      navigate("/pagina-inicial-cliente")
    }
  };
  useEffect(() => {
    const fetchCliente = async () => {
      try {
        const idUsuario = getIdFromToken();
        if (!idUsuario) return;

        const result = await getByIdCliente(idUsuario);
        if (!result) {
          console.error("Erro ao buscar cliente:", result);
          setIdCliente("");
          return;
        }

        const id = result.usuario.barbeiro_Id;
        setIdCliente(id);
        const barbeiroData = await barbeiroServices.getById(id);
        setNomeBarbeiro(barbeiroData.barbeiro.nomeBarbeiro);
        console.log(barbeiroData.barbeiro.nomeBarbeiro);
      } catch (err) {
        console.error("Erro ao buscar dados:", err);
      }
    };
    fetchCliente();
  }, []);
  useEffect(() => {
    debounce(async () => {
      if (!clienteID) return;

      setLoading(true);
      try {
        const result = await getAllHorarios(clienteID, pagina, busca);
        setLoading(false);

        if (!result || result.error) {
          console.error("Erro ao buscar horários:", result);
          setRows([]);
          setCount(0);
        } else {
          setRows(result.data.horarios || []);
          setCount(result.totalCount || 0);
        }
      } catch (err) {
        setLoading(false);
        console.error("Erro ao consultar horários:", err);
      }
    });
  }, [pagina, busca, clienteID]);

  return (
    <LayoutBaseDePagina titulo={`${nomeBarbeiro}`}>
      <FerramentasDeListagem
        MostrarStatus
        valorDeStatus={status}
        aoMudarStatus={(status) => {
          setStatus(status);
          setSearchParams({ busca: status, pagina: 1 }, { replace: true });
        }}
      />
      <TableContainer
        component={Paper}
        variant="outlined"
        sx={{ m: 1, width: "auto" }}
      >
        {loading && <LinearProgress variant="indeterminate" />}
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">horarios  {nomeBarbeiro}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.length > 0 ? (
              rows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell align="center">{row.status}</TableCell>
                  <TableCell>{row.horario}</TableCell>
                  <TableCell>
                    {row.status == "disponível" ? (
                      <Button variant="contained" value="reservado" color="success"
                      onClick={(e)=>{
                        const valor = e.currentTarget.value
                        handleSelectId(valor,row.id)
                      }}
                      >
                        reservar
                      </Button>
                    ) : (
                      <Typography color="error">reservado</Typography>
                    )}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={3} align="center">
                  Nenhum horario encontrado
                </TableCell>
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            {count > 0 && count > enviroment.LIMITE_DE_LINHAS && (
              <TableRow colSpan={3}>
                <Pagination
                  onChange={(e, newPage) => {
                    setSearchParams(
                      { busca, pagina: newPage.toString() },
                      { replace: true }
                    );
                  }}
                  page={pagina}
                  count={Math.ceil(count / enviroment.LIMITE_DE_LINHAS)}
                />
              </TableRow>
            )}
          </TableFooter>
        </Table>
      </TableContainer>
    </LayoutBaseDePagina>
  );
};
export default ListagemDeHorarios;
