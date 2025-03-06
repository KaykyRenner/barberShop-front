import { useEffect, useMemo, useState } from "react";
import {
  Box,
  Button,
  LinearProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableRow,
} from "@mui/material";
import { useSearchParams } from "react-router-dom";

import FerramentasDeListagem from "../../shared/components/barraDeferramentas/FerramentasDeListagem";
import { PessoaService } from "../../shared/services/api/barbeiro/barbeiro";
import LayoutBaseDePagina from "../../shared/layouts/layoutBaseDePagina";
import useDebounce from "../../shared/hooks/useDeBounce";
import enviroment from "../../shared/environment";

const ListagemBarbeiros = () => {
  const { debounce } = useDebounce();
  const [searchParams, setSearchParams] = useSearchParams();
  const [rows, setRows] = useState([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const busca = useMemo(() => {
    return searchParams.get("busca") || "";
  }, [searchParams]);

  useEffect(() => {
    debounce(() => {
      setLoading(true);
      PessoaService.getAll(1, busca)
        .then((result) => {
          setLoading(false);
          if (result instanceof Error) {
            setRows([])
            setCount(0)            
            //alert(result.message);
          } else {
            setRows(result.data.data);
            setCount(result.totalCount);
          }
        })
        .catch((err) => {
          setLoading(false);
          setError("Erro ao carregar os dados");
        });
    });
  }, [busca, debounce]);
  return (
    <LayoutBaseDePagina titulo={"barbeiros"}>
      <FerramentasDeListagem
        mostrarInputBusca
        textoDeBusca={busca}
        aoMudarTextoDeBusca={(texto) => {
          setSearchParams({ busca: texto }, { replace: true });
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
              <TableCell>ações</TableCell>
              <TableCell>nomeCompleto</TableCell>
              <TableCell>selecionar</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.length > 0 ? (
              rows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>ações</TableCell>
                  <TableCell>{row.nomeBarbeiro}</TableCell>
                  <TableCell>
                    <Button variant="contained">selecionar</Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={3}>Nenhum dado disponível</TableCell>
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            
          </TableFooter>
        </Table>
      </TableContainer>
    </LayoutBaseDePagina>
  );
};

export default ListagemBarbeiros;
