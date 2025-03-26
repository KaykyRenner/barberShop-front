import api from "../axios-config/index";
const getByIdHorarioCliente = async (id) => {
  try {
    const { data } = await api.get(`barbeiro/horario/${id}`);
    return data;
  } catch (err) {
    if (err.response) {
      const erroBakcEnd =
        err.response.data?.message ||
        `erro ao consultar horario. desconhecido do backEnd`;
      console.log(erroBakcEnd);
      throw new Error(erroBakcEnd);
    }
    console.log("erro desconhecido ao consultar hoaririo", err);
    throw new Error(
      "erro desconhecido ao consultar hoaririo, erro do back End"
    );
  }
};
export default getByIdHorarioCliente