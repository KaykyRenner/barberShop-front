import api from "../axios-config/index";
const agendarHorario = async (reservar, id) => {
  try {
    const { data } = await api.put(`/cliente/agendamento/${id}`, {
      reservar,
    });
    return data;
  } catch (err) {
    if (err.response) {
      const erroBakcEnd =
        err.response.data?.message ||
        `erro ao agendar horarios. desconhecido do backEnd`;
      console.log(erroBakcEnd);
      return{
        message:erroBakcEnd
      }
    }
    console.log("erro desconhecido ao agendar hoaririos", err);
    throw new Error(
      "erro desconhecido ao agendar hoaririos, erro do back End"
    );
  }
};
export {agendarHorario}
