/* Criando um servidor HTTP*/

// carregar o módulo http
const http = require("http");
var fs = require('fs'); //parte 2

function readFile(response, file) {

    fs.readFile(file, (err, data) => {
        response.end(data);
    })

}

//criar o servidor
const server = http.createServer((request, response) => {
    //definimos o cabeçalho (header) com o tipo de resposta  - part 1
    //  response.writeHead(200, { "Content-Type": "text/plain" });

    //Mensagem de retorno
    //  response.end("Olá... do servidor novo!!");

    console.log(request.url);

    if (request.url == '/cars') {
        response.writeHead(200, { "Content-Type": "application/json" });

        readFile(response, "cars.json");
    } else if (request.url == '/fast') {

        //Parte 3 -> Converter o arquivo em JSON e fazer for Each
        fs.readFile("cars.json", (err, data) => {
            response.writeHead(200, { "Content-Type": "application/json" });

            let cars = JSON.parse(data)

            let sendData = []

            cars.forEach(element => {
                if (element.Acceleration > 21) {
                    sendData.push(element);
                }
            });
            response.end(JSON.stringify(sendData))
        });
    }
    else {

        response.end("Nada encontrado...")
    }

});

//Configurar a porta que vai "escutar"

server.listen(3030);

console.log("Servidor iniciado...");

//Parte 2 -> Lendo arquivos externos
//1. fazer o require do fs var fs = require('fs');

//2. criar uma função que ler o arquivo e devolve pra tela
//function fileRead

// Parte 3 ==> Exercicio = Criar rotas que devolva os seguintes dados:
// europa , usa , cilindros
