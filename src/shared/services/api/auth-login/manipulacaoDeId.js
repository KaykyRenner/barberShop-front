import {jwtDecode}  from "jwt-decode"
const getIdFromToken = () =>{
    const token = localStorage.getItem("APP_ACESS_TOKEN")
    if(!token) return null
    try{
        const decode = jwtDecode(token)
        return decode.id || null
    }catch(err){
        console.error("Erro ao decodificar token:", err);
        return null;
    }
}
export default getIdFromToken