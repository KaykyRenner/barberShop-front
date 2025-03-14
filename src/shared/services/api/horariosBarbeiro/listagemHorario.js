import enviroment from "../../../environment"
import api from "../axios-config/index";
const getAllHorarios  = async(id,page=1,filter="")=>{
    try{
        const url = `/barbeiro/${id}/horario?page=${page}&limit=${enviroment.LIMITE_DE_LINHAS}&filter=${filter}`
        const {data} = await api.get(url)
        return {
            data:data
        }
    }catch(err){
        if(err.response){
            const erroBakcEnd = err.response.data?.message||
            `erro ao consultar horarios. desconhecido do backEnd`;
            console.log(erroBakcEnd)
            return new Error(erroBakcEnd)
        }
        console.log("erro desconhecido ao consultar hoaririos", err)
        return new Error("erro desconhecido ao consultar hoaririos, erro do back End")
    }
}
export default getAllHorarios