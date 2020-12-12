const express = require("express");
const bodyParser = require('body-parser')
const app = express();

const produtos = [
    {
        nome: 'xbox',
        id: 1,
        tipo: 'games',
    },
    {
        nome: 'chromecast',
        id: 2,
        tipo: 'acessórios',
    },
    {
        nome: 'dell inspirom',
        id: 1,
        tipo: 'computador',
    },
    {
        nome: 'teclado mecânico',
        id: 2,
        tipo: 'acessórios',
    }
]

app.use(bodyParser.json())

// arrow funcintion anonima, lambida 
app.get("/oi", (request, response) => {
    response.send("oi humano");
})

app.get("/oi/:nome", (request, response) => {
    const nome = request.params.nome;
    response.send("oi humano, " + nome);
})

app.get("/oi/:nome/:idade", (request, response) => {
    const nome = request.params.nome;
    const idade = request.params.idade;
    response.send("oi humano, " + nome + "você tem " + idade + " anos de idade?");
})
app.get("/:id/produtos", (request, response) => {
    const id = request.params.id;
    const tipo = request.query.tipo;
    const produtosDoCliente = produtos
        .filter(produto => produto.id == id)
        .filter(produto => produto.tipo == tipo);

    response.json({
        produtos: produtosDoCliente
    });
})
app.post("/produto", (request, response) => {
    const novoProduto = request.body;
    produtos.push(novoProduto);
    response.json(novoProduto);
})


app.listen(3002);


