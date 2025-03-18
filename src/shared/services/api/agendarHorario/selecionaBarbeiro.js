import handleError from "../../../components/handleError/handleErro";
import api from "../axios-config/index";
import getAllHorarios from "../horariosBarbeiro/listagemHorario";

const selecionaBarbeiro = async (idBarbeiro)=>{
    try{
        const url = `/cliente/barbeiro/${idBarbeiro}`
        const {data} = await api.put(url)
        return {id:data.barbeiroId}
    }catch(err){
        return handleError(err,'ao selecionar barbeiro')
    }
}
export default selecionaBarbeiro