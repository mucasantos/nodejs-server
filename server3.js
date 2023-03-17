//Instalar e importar o mongoose

let express = require('express');
let app = express();

const mongoose = require('mongoose');

//importar o modelo, depois de criar
const DataModel = require('./datamodel');

//body-parser
var bodyParser = require('body-parser');
//usar o body-parser como middleware - ele atual antes ou depois da requisição para
//atualizar alguma informação
app.use(bodyParser.urlencoded({ extended: false }))
////Para receber um JSON
app.use(bodyParser.json());

app.get('/fruit', (req, res) => {
    res.send("Hello from Express...")
})

//endpoint para salvar dados
app.post('/salvar', (req, res, next) => {

    let nome = req.body.nome;
    let email = req.body.email;

    const userData = new DataModel({
        name: nome,
        email: email,
    });

    //Este comando salva os dados no banco de dados e retorna a mensagem
    userData.save().then(result => {
        res.status(201).json({
            message: 'Data created successfully!...',
            data: userData,
            creator: { _id: "creator._id", name: " creator.name" }
        });
    });
})


//endpoint - pegar os dados do banco de dados

app.get('/leitura', (req, res, next) => {

    DataModel.find().then(result => {
        res.status(200).json({ data: result });
    })
})


//conectar com o banco de dados

mongoose.connect("mongodb://127.0.0.1:27017/esp32-data", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => {
        //  console.log(result)
        let server = app.listen(3131, () => {
            console.log("Servidor iniciado na porta 3131.")
        })
    })
    .catch(err => console.log(err));


//Criar um modelo de dados - modelo
//importa aqui e criar a rota