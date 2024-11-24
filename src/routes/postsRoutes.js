import express from "express";
import multer from "multer";
import cors from "cors";

import { listarPosts, postarNovoPost, uploadImagem, atualizarNovoPost } from "../controllers/postsController.js";

const corsOptions = {
  origin: "http://localhost:8000",
  optionsSuccessStatus: 200
}

// Configura o armazenamento do Multer para uploads de imagens
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      // Especifica o diretório para armazenar as imagens enviadas
      cb(null, 'uploads/'); 
    },
    filename: function (req, file, cb) {
      // Mantém o nome original do arquivo
      cb(null, file.originalname); 
    }
  });

  //cria a instância do multer ( o storage é utilizado para sistemas windows)
const upload = multer({dest:"./uploads", storage});
//Para linux e mac
//const upload = multer({dest:"./uploads"});

const routes = (app) => {
    //Permite que o servidor interprete requisições com corpo em formato JSON
    app.use(express.json());

    app.use(cors(corsOptions));
    //Rota para buscar todos os posts
    app.get("/posts", listarPosts);
    //Rota para criar um novo post
    app.post("/posts", postarNovoPost);

    app.post("/upload", upload.single("imagem"), uploadImagem);

    app.put("/upload/:id", atualizarNovoPost);
}

export default routes;


