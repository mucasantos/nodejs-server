//Criar o que fizemos antes utilizando um framework: express
//1. Instalar o framework -> r> npm install express --save

//importar o express

let express = require('express');
let app = express();

//body-parser
var bodyParser = require('body-parser');

//usar o body-parser como middleware - ele atual antes ou depois da requisição para
//atualizar alguma informação

app.use(bodyParser.urlencoded({ extended: false }))

////Para receber um JSON
app.use(bodyParser.json());

//3.Criar as rotas

app.get('/fruit', (req, res) => {
    res.send("Hello from Express...")
})

//4.criar rota POST

app.post('/pessoa', (req, res) => {
    let nome = req.body.nome;
    let email = req.body.email;

    res.send({ "response": true })

    console.log(nome)
    console.log(email)

})

//2.Iniciar o servidor
let server = app.listen(3131, () => {
    console.log("Servidor iniciado na porta 3131.")
})

// Por padrão, o Express não lê as informações enviadas por POST
//Precisamos então instalar mais um módulo: o body-parser
//  npm install body-parser --save

// Config do body-parser
/*
var bodyParser = require('body-parser');

 */