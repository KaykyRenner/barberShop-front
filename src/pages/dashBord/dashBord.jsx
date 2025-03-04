import FerramentasDeListagem from "../../shared/components/barraDeferramentas/FerramentasDeListagem";
import FerramentasDeDetalhes from "../../shared/components/ferramentasDeDetalhes/ferramentaDeDetalhes";
import LayoutBaseDePagina from "../../shared/layouts/layoutBaseDePagina";

function DashBord() {
  return (
    <LayoutBaseDePagina
      titulo="pagina inicial"
      barraDeFerramentas={
        <FerramentasDeDetalhes         
          mostrarBotaoSalvarEFechar
        />
      }
    >
      testando
    </LayoutBaseDePagina>
  );
}

export default DashBord;
