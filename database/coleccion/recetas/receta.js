const mongoose = require('../../connect');
const Schema = mongoose.Schema;

const recetaSchema = Schema({
    nombre: String,
    instrucciones: String,
    porciones: Number,
    Tipo: String,
    ingredientes: {
        type: Schema.Types.ObjectId,
        ref: "Alimento"
    }

})

const receta = mongoose.model('receta', recetaSchema);

module.exports = receta;
