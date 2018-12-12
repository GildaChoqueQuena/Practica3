const mongoose = require('../connect')
const Schema = mongoose.Schema;

const clienteSchema = Schema({
    nombre: String,
    ci: String,
    saldo: String,
    fechaRegistro: Date
});

const client = mongoose.model('cliente', clienteSchema);

module.exports = client;
