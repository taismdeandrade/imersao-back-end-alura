
import conectarAoBanco from "../config/dbConfig.js";

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

//Função assincrona para buscar todos os posts do banco de dados
export async function getTodosPosts(){
    //Seleciona o banco imersao
    const db = conexao.db("imersao");
    //Seleciona a colecao posts dentro do banco de dados
    const colecao = db.collection("posts");
    //Retorna um array com todas os documentos da colecao
    return colecao.find().toArray();
}

export async function criarPost(novoPost){
    const db = conexao.db("imersao");
    //Seleciona a colecao posts dentro do banco de dados
    const colecao = db.collection("posts");
    //Insere o novoPost na coleção do banco de dados
    return colecao.insertOne(novoPost);
}