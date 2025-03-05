import axios from "axios";
import sucessInterceptors from "./interceptors/sucessInterceptors"
import erroInterceptors from "./interceptors/erroInterceptors";
import enviroment from "../../../environment";
const api = axios.create({
    baseURL: enviroment.URL_BASE
})
api.interceptors.response.use(
    (response) =>{
            sucessInterceptors(response)
    },
    (error)=>{
        erroInterceptors(error)
    }
)
export default api