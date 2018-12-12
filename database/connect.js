const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/apirestFoods", {useNewUrlParser: true}).then(() => {
    console.log('conexion a la mongodb exitosa');
}).catch(err => {
    console.log('Error en la conexion en la base ', err);
});

module.exports = mongoose;
