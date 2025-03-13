import api from "../axios-config/index";
const createCliente = async (nomeCliente,emailCliente,telefoneCliente)=>{
    try{
        const {data} = api.post('/cliente',{
            nomeCliente,
            emailCliente,
            telefoneCliente
        })
        if(data) return data.id
    }catch(err){
        if (err.response) {
            const erroBackEnd =
              err.response.data?.message ||
              `erro ao criar Cliente. desconhecido do backEnd`;
              
            console.log("erro ", erroBackEnd);
            return new Error(erroBackEnd);
          }
          console.log("erro desconhecido", err);
          return new Error(`erro ao criar Cliente. desconhecido do backEnd`);
    }
}
export default createCliente