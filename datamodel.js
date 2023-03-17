//importar o mongoose

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dataModel = new Schema({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: 'Novo usuário!'
    },
},

);

module.exports = mongoose.model('DataModel', dataModel);