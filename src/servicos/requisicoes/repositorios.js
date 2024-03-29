import api from "../api";

export async function pegarRepositoriosDoUsuario(id){
    try{
        const resultado = await api.get(`/repos?lpostId=${id}`)
        return resultado.data
    }
    catch (error){
        console.log(error)
        return []
    }
}
export async function salvarRepositoriosDoUsuario(postId,nome,data,id){
    try{
        await api.put(`/repos/${id}`,{
            name:nome,
            data: data,
            postId: postId,
            id: id
        });
        return 'sucesso'
    }
    catch (error){
        console.log(error)
        return 'erro'
    }
}
export async function criarRepositoriosDoUsuario(postId,nome,data){
    try{
        await api.pots(`/repos`,{
            name:nome,
            data: data,
            postId: postId,
            id: id
        });
        return 'sucesso'
    }
    catch (error){
        console.log(error)
        return 'erro'
    }
}
export async function deletarRepositorioDoUsuario(id){
    try{
        await api.delete(`/repo/${id}`);
        return 'sucesso'
    }
    catch (error){
        console.log(error)
        return 'erro'
    }
}