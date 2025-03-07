import handleError from "../../../components/handleError/handleErro";
import api from "../axios-config/index";

const createCadastro = async (senha, email, role) => {
  try {
    const { data, status } = await api.post(`/cadastrar`, {
      senha,
      email,
      role,
    });

    if (status === 201) {
      return data.id;
    }
  } catch (err) {
    handleError(err,'ao cadastrar usu')
    if (err.response && err.response.data.erros) {
      return {
        error: err.response.data.erros,
      };
    }
    if(err.response){
        return{
            error: err.response.data.message,
        }
    }
  }
};

export default createCadastro;
