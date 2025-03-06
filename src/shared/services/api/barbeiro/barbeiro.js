import enviroment from "../../../environment";
import api from "../axios-config/index";

//id
//nomeBarbeiro
//emailBarbeiro
//telefoneBarbeiro
//user_id
const handleError = (err, mensagemDeRota) => {
  if (err.response) {
    const erroBackEnd =
      err.response.data?.message ||
      `erro ${mensagemDeRota}. desconhecido do backEnd`;
    console.log("erro ", erroBackEnd);
    return new Error(erroBackEnd);
  }
  console.log("erro desconhecido", err);
  return new Error(`erro ${mensagemDeRota}. desconhecido do backEnd`);
};

const getAll = async (page = 1, filter = "") => {
  try {
    const url = `/barbeiro?page=${page}&limit=${enviroment.LIMITE_DE_LINHAS}&filter=${filter}`;
    
    const response = await api.get(url);

    // Verificando a resposta
    
    if (response && response.data) {
      return {
        data: response.data, // Agora 'data' estará no lugar de 'barbeiros'
        totalCount: response.headers['x-total-count'] || 0, // Número total de itens
      };
    }

    // Se não houver dados
    return new Error("Erro ao consultar barbeiros");
  } catch (err) {
    // Tratamento de erros
    return handleError(err, "ao buscar registros");
  }
};


const getById = async (id) => {
  try {
    const urlRelative = `/barbeiro/${id}`;
    const { data } = await api.get(urlRelative);
    if (data) {
      return data;
    }
    return new Error("Erro ao consultar barbeiro");
  } catch (err) {
    return handleError(err, "ao buscar registro");
  }
};

const create = async (nomeBarbeiro, emailBarbeiro, telefoneBarbeiro) => {
  try {
    const { data } = await api.post("/barbeiro", {
      nomeBarbeiro,
      emailBarbeiro,
      telefoneBarbeiro,
    });
    if (data) return data.id;
    return new Error("Erro ao criar barbeiro");
  } catch (err) {
    return handleError(err, "ao criar registro");
  }
};

const update = async (id, nomeBarbeiro, emailBarbeiro, telefoneBarbeiro) => {
  try {
    const { data } = await api.put(`/barbeiro/${id}`, {
      nomeBarbeiro,
      emailBarbeiro,
      telefoneBarbeiro,
    });
    if (data) return data.id;
    return new Error("Erro ao atualizar barbeiro");
  } catch (err) {
    return handleError(err, "ao atualizar registro");
  }
};

const deleteById = async (id) => {
  try {
    const urlRelative = `/barbeiro/${id}`;
    const { data } = await api.delete(urlRelative);
    if (data) {
      return data;
    }
    return new Error("Erro ao deletar barbeiro");
  } catch (err) {
    return handleError(err, "ao deletar registro");
  }
};

export const PessoaService = {
  getAll,
  getById,
  create,
  update,
  deleteById,
};
