import handleError from "../../../components/handleError/handleErro";
import api from "../axios-config/index";

const selecionaBarbeiro = async (idBarbeiro)=>{
    try{
        const url = `/cliente/barbeiro/${idBarbeiro}`
        const {datad} = api.put(url)
    }catch(err){
        return handleError(err,'ao selecionar barbeiro')
    }
}
export default selecionaBarbeiro