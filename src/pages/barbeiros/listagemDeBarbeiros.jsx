import { useEffect, useMemo } from "react";
import FerramentasDeListagem from "../../shared/components/barraDeferramentas/FerramentasDeListagem";
import LayoutBaseDePagina from "../../shared/layouts/layoutBaseDePagina";
import { useSearchParams } from "react-router-dom";
import { PessoaService } from "../../shared/services/api/barbeiro/barbeiro";
import useDebounce from "../../shared/hooks/useDeBounce";
const ListagemBarbeiros = () => {
  const { debounce } = useDebounce();
  const [searchParams, setSearchParams] = useSearchParams(1000);
  const busca = useMemo(() => {
    return searchParams.get("busca") || "";
  }, [searchParams]);

  useEffect(() => {
    debounce(() => {
      PessoaService.getAll(1, busca).then((result) => {
        if (result instanceof Error) {
          alert(result.message);
          return;
        } else {
          console.log(result);
        }
      });
    });
  }, [busca]);
  return (
    <LayoutBaseDePagina titulo={"barbeiros"}>
      <FerramentasDeListagem
        mostrarInputBusca
        textoDeBusca={busca}
        aoMudarTextoDeBusca={(texto) => {
          setSearchParams({ busca: texto }, { replace: true });
        }}
      />
    </LayoutBaseDePagina>
  );
};
export default ListagemBarbeiros;
