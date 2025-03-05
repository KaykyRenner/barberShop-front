import axios from "axios";

const erroInterceptors = (erro) => {
    if (axios.isAxiosError(erro)) {
        if (erro.message === "Network Error") {
            return Promise.reject(new Error("Erro de conexão"));
        }
        if(erro.response){
            const mensagemErro = erro.response.data?.message || "ocorreu um erro inesperado"
            return Promise.reject(new Error (mensagemErro))
        }
    }
    return Promise.reject(erro)
};

export default erroInterceptors;
