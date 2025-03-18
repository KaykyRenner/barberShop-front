import { useEffect, useMemo, useState } from "react";
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
} from "@mui/material";
import { useSearchParams } from "react-router-dom";

import FerramentasDeListagem from "../../shared/components/barraDeferramentas/FerramentasDeListagem";
import { barbeiroServices } from "../../shared/services/api/barbeiro/barbeiro";
import LayoutBaseDePagina from "../../shared/layouts/layoutBaseDePagina";
import useDebounce from "../../shared/hooks/useDeBounce";
import enviroment from "../../shared/environment";
import selecionaBarbeiro from "../../shared/services/api/agendarHorario/selecionaBarbeiro";

const ListagemBarbeiros = () => {
  const { debounce } = useDebounce();
  const [searchParams, setSearchParams] = useSearchParams();
  const [rows, setRows] = useState([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const handleSelectId = (id) => {
    console.log(id);
    selecionaBarbeiro(id);
  };
  const busca = useMemo(() => {
    return searchParams.get("busca") || "";
  }, [searchParams]);
  const pagina = useMemo(() => {
    return Number(searchParams.get("pagina")) || 1;
  }, [searchParams]);

  useEffect(() => {
    debounce(async () => {
      setLoading(true);
      await barbeiroServices
        .getAll(pagina, busca)
        .then((result) => {
          setLoading(false);
          if (result instanceof Error) {
            setRows([]);
            setCount(0);
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
  }, [busca, pagina]);
  return (
    <LayoutBaseDePagina titulo={"barbeiros"}>
      <FerramentasDeListagem
        mostrarInputBusca
        textoDeBusca={busca}
        aoMudarTextoDeBusca={(texto) => {
          setSearchParams({ busca: texto, pagina: 1 }, { replace: true });
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
                    <Button
                      onClick={() => handleSelectId(row.id)}
                      variant="contained"
                    >
                      Selecionar
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={3}>nenhum horario encontrado</TableCell>
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            {count > 0 && count > enviroment.LIMITE_DE_LINHAS && (
              <TableRow>
                <TableCell colSpan={3}>
                  <Pagination
                    onChange={(e, newPage) =>{
                      setSearchParams(
                        { busca, pagina: newPage.toString() },
                        { replace: true }
                      )}
                    }
                    page={pagina}
                    count={Math.ceil(count / enviroment.LIMITE_DE_LINHAS)}
                  />
                </TableCell>
              </TableRow>
            )}
          </TableFooter>
        </Table>
      </TableContainer>
    </LayoutBaseDePagina>
  );
};

export default ListagemBarbeiros;
