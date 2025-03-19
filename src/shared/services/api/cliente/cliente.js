import api from "../axios-config/index";
const create = async (nomeCliente, emailCliente, telefoneCliente) => {
  try {
    const { data } = api.post("/cliente", {
      nomeCliente,
      emailCliente,
      telefoneCliente,
    });
    if (data) return data.id;
  } catch (err) {
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
};
const getByIdCliente = async (id) => {
  try {
    const { data } = await api.get(`/cliente/${id}`);
    if (data) return data;
  } catch (err) {
    if (err.response) {
        const erroBackEnd =
          err.response.data?.message ||
          `erro ao consultar Cliente. desconhecido do backEnd`;
  
        console.log("erro ", erroBackEnd);
        return new Error(erroBackEnd);
      }
      console.log("erro desconhecido", err);
      return new Error(`erro ao consultar Cliente. desconhecido do backEnd`);
    }
};
export {getByIdCliente,create};
