import FerramentasDeListagem from "../../shared/components/barraDeferramentas/FerramentasDeListagem";
import FerramentasDeDetalhes from "../../shared/components/ferramentasDeDetalhes/ferramentaDeDetalhes";
import LayoutBaseDePagina from "../../shared/layouts/layoutBaseDePagina";

function DashBordCliente() {
  return (
    <LayoutBaseDePagina
      titulo="pagina inicial"
      barraDeFerramentas={<FerramentasDeDetalhes mostrarBotaoSalvarEFechar />}
    >
    </LayoutBaseDePagina>
  );
}

export default DashBordCliente;
