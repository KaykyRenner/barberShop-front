import FerramentasDeListagem from "../../shared/components/barraDeferramentas/FerramentasDeListagem";
import LayoutBaseDePagina from "../../shared/layouts/layoutBaseDePagina";

function DashBord() {
  return (
    <LayoutBaseDePagina
      titulo="pagina inicial"
      barraDeFerramentas={<FerramentasDeListagem mostrarInputBusca />}
    >
      testando
    </LayoutBaseDePagina>
  );
}

export default DashBord;
