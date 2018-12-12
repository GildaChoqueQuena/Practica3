const mongoose = require('../../connect');
const Schema = mongoose.Schema;

const alimentoSchema = Schema({
    nombre: String,
    calorias: Number,
    hidratosCa: Number,
    proteinas: Number,
    grasas: Number,
    fibra: Number
});

const alimento = mongoose.model('alimento', alimentoSchema);
module.exports = alimento;
