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
  useMediaQuery,
} from "@mui/material";
import LayoutBaseDePagina from "../../shared/layouts/layoutBaseDePagina";
import useDebounce from "../../shared/hooks/useDeBounce";
import { useEffect, useMemo, useState } from "react";
import { replace, useSearchParams } from "react-router-dom";
import getAllHorarios from "../../shared/services/api/horariosBarbeiro/listagemHorario";
import selecionaBarbeiro from "../../shared/services/api/agendarHorario/selecionaBarbeiro";
import FerramentasDeListagem from "../../shared/components/barraDeferramentas/FerramentasDeListagem";
import enviroment from "../../shared/environment";
const ListagemDeHorarios = () => {
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
  useEffect(() => {
    debounce(async () => {
      setLoading(true);
      await getAllHorarios(3,pagina, busca)

        .then((result) => {
          setLoading(false);
          if (result instanceof Error) {
            console.log(result);
            setRows([]);
            setCount(0);
          } else {
            console.log(result);
            setRows(result.data.horarios);
            setCount(result.totalCount);
          }
        })
        .catch((err) => {
          setLoading(false);
          console.log(err, "erro ao consultar horarios");
        });
    });
  }, [pagina, busca]);

  return (
    <LayoutBaseDePagina titulo="horarios">
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
              <TableCell align="center">horarios</TableCell>
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
                      <Button variant="contained" color="success">
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
                  Nenhum barbeiro encontrado
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
                  count={Math.ceil(count/enviroment.LIMITE_DE_LINHAS)}
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
