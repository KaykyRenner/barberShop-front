import api from "../axios-config/index";
const auth = async (email, senha) => {
  try {
    const { data } = await api.post("/entrar", {
      senha,
      email,
    });
    return data
  } catch (err) {
    if (err.response) {
      return {
        erro: err.response.data.message || `erro desconhecido do backEnd`,
      };
    }
    console.log("erro desconhecido", err);
    return new Error(`erro ${mensagemDeRota}. desconhecido do backEnd`);
  }
};
export default auth;
