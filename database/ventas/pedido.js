const mongoose = require('../connect');
const Schema = mongoose.Schema;

const pedidoSchema = Schema({
    descripcion: String,
    fechaEntrega: Date,
    fechaRegistro: Date,
    entregado: Boolean,
    costoTotal: Number,
    cliente: {
        type: Schema.Types.ObjectId,
        ref: "cliente"
    },
    producto:[String]
})

const pedido = mongoose.model('pedido', pedidoSchema);

module.exports = pedido;
