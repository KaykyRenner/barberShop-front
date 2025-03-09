import axios from "axios";
import sucessInterceptors from "./interceptors/sucessInterceptors";
import erroInterceptors from "./interceptors/erroInterceptors";
import enviroment from "../../../environment";

// Criação da instância do axios
const api = axios.create({
    baseURL: enviroment.URL_BASE,
    headers:{
        authorization:`Bearer ${JSON.parse(localStorage.getItem('APP_ACESS_TOKEN')|| '')}`
    }
});

// Configuração dos interceptadores de resposta
api.interceptors.response.use(
    // Interceptador de sucesso
    (response) => {
        sucessInterceptors(response);
        return response;  
    },
    // Interceptador de erro
    (error) => {
        
        erroInterceptors(error);
        return Promise.reject(error);
    }
);

export default api;
