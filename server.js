import express from "express";
import routes from "./src/routes/postsRoutes.js";

// const posts = [
//     {   id: 1,
//         descricao: "Uma foto",
//         imagem: "https://placecats.com/millie/300/150"
//     },
//     {
//         id: 2,
//         descricao: "Um Gatinho",
//         imagem: "https://placecats.com/millie/300/150"
//     },
//     {
//         id: 3,
//         descricao: "Gatinho fazendo yoga",
//         imagem: "https://placecats.com/millie/300/150"
//     }   
// ];

const app = express();
app.use(express.static("uploads"));
routes(app);

app.listen(3000, () => {
    console.log("Servidor escutando...");
});


// function buscarPostPorId(id){
//     return posts.findIndex((post) => {
//         return post.id === Number(id);
//     });
// }

// app.get("/posts/:id", (req, res) => {
//     const index = buscarPostPorId(req.params.id);
//     res.status(200).json(posts[index]);
// });

