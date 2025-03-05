import enviroment from "../../../environment";
import api from "../axios-config/index";
//id
//nomeBarbeiro
//emailBarbeiro
//telefoneBarbeiro
//user_id
const getAll = async(page =1,filter='')=>{
    const urlRelative = `/barbeiro?page=${page}&limit=${enviroment.LIMITE_DE_LINHAS}&filter=${filter}`
    const { data} = api.get(urlRelative)
}

const getById = async()=>{
    
}

const create = async()=>{
    
}

const update = async()=>{
    
}

const deleteById = async()=>{
    
}

export const PessoaService = {
    getAll,
    getById,
    create,
    update,
    deleteById
}