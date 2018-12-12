const mongoose = require('mongoose');
<<<<<<< HEAD
mongoose.connect("mongodb://127.0.0.1:27017/Foods", {useNewUrlParser: true}).then(() => {
    console.log('conexion a mongodb exitosa');
}).catch(err => {
    console.log('Error en la conexion', err);
=======
mongoose.connect("mongodb://127.0.0.1:27017/apirestFoods", {useNewUrlParser: true}).then(() => {
    console.log('conexion a la mongodb exitosa');
}).catch(err => {
    console.log('Error en la conexion en la base ', err);
>>>>>>> aa7bbd4bd6e0604da291ff39b8e2bd0dfe8c20a9
});

module.exports = mongoose;
