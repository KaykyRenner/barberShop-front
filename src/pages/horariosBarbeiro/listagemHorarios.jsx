import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  useMediaQuery,
} from "@mui/material";
import LayoutBaseDePagina from "../../shared/layouts/layoutBaseDePagina";
import useDebounce from "../../shared/hooks/useDeBounce";
import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import getAllHorarios from "../../shared/services/api/horariosBarbeiro/listagemHorario";
import selecionaBarbeiro from "../../shared/services/api/agendarHorario/selecionaBarbeiro";
import FerramentasDeListagem from "../../shared/components/barraDeferramentas/FerramentasDeListagem";
const ListagemDeHorarios = () => {
  const { debounce } = useDebounce();
  const [searchParams, setSearchParams] = useSearchParams();
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const busca = useMemo(() => {
    return searchParams.get("busca") || "";
  });
  const page = useMemo(() => {
    return searchParams.get("pagina") || 1;
  });
  useEffect(() => {
    debounce(async()=>{
        setLoading(true)
        await getAllHorarios(1).then
    })
  })

  return (
    <LayoutBaseDePagina titulo="horarios">
      <FerramentasDeListagem mostrarInputBusca />
      <TableContainer
        component={Paper}
        variant="outlined"
        sx={{ m: 1, width: "auto" }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">horarios</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.length > 0 ? (
              rows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>Ações</TableCell>
                  <TableCell>{row.horario}</TableCell>
                  <TableCell>
                    <Button variant="contained">Selecionar</Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={3} align="center">
                  Nenhum barbeiro encontrado
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </LayoutBaseDePagina>
  );
};
export default ListagemDeHorarios;
