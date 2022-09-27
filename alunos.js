
const Sequelize = require('sequelize');
const database = require('./db');
 
const Alunos = database.define('alunos', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING
    },
    telefone: Sequelize.STRING,
    turma: Sequelize.STRING

})
 
module.exports = Alunos;