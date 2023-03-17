/* Criando um servidor HTTP*/ 

// carregar o módulo http
const http = require("http");
const routes = require("./routes");

const server = http.createServer(routes);

const database = require('./db');

try {
    const resultado =  database.sync();
    
    console.log(resultado);
    
} catch (error) {
    console.log(error);
}

server.listen(3000);
