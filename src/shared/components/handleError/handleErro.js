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

export default handleError