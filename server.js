import express from "express";

const post = [
    {
        descricao: "Uma foto teste",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        descricao: "Um gato fofo dormindo",
        imagem: "https://placekitten.com/200/300"
    },
        {
        descricao: "Paisagem montanhosa",
        imagem: "https://source.unsplash.com/random/300x200/?mountains"
    },
        {
        descricao: "Cachorro brincando na praia",
        imagem: "https://source.unsplash.com/random/300x200/?dog,beach"
    },
        {
        descricao: "Comida deliciosa",
        imagem: "https://source.unsplash.com/random/300x200/?food"
    },
        {
        descricao: "Carro esportivo vermelho",
        imagem: "https://source.unsplash.com/random/300x200/?car,red"
    },
]; 

const app = express ();
app.use (express.json());

app.listen(3000, () => {
    console.log ("Servidor escutando...");
});

app.get("/posts", (req, res) => {
    res.status(200).json(posts);
});
