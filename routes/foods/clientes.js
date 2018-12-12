var express = require('express');
var router = express.Router();

const CLIENTE = require('../../database/coleccion/ventas/cliente');

/* GET Menu. */
router.get('/', function (req, res, next) {

    CLIENTE.find().exec().then(docs => {
        if (docs.length == 0) {
            res.json({
                message: "No se encontro en la base de datos"
            })
        } else {
            res.json(docs);
        }
    }).catch(err => {
        res.json({
            error: err
        });
    })

});

router.post('/', function (req, res, next) {
    const datos = {
        nombre: req.body.nombre,
        ci: req.body.ci,
        saldo:req.body.saldo,
        fechaRegistro: new Date

    };

    var modelMenu = new CLIENTE(datos);
    modelMenu.save().then(
        res.json({
            message: "Cliente insertado en la base de datos"
        })
    ).catch(err => {
        res.status(500).json({
            error: err
        })
    });

});

router.patch('/:id', function (req, res, next) {
    let id = req.params.id;
    const datos = {};

    Object.keys(req.body).forEach((key) => {
        datos[key] = req.body[key];
    });
    console.log(datos);
    CLIENTE.findByIdAndUpdate(id, datos).exec()
        .then(result => {
            res.json({
                message: "Datos actualizados"
            });
        }).catch(err => {
            res.status(500).json({
            });
                error: err
            })
});

router.delete('/:id', function (req, res, next) {
    let idMenu = req.params.id;

    CLIENTE.findByIdAndRemove(idMenu).exec()
        .then(() => {
            res.json({
                message: "cliente eliminado"
            });
        }).catch(err => {
            res.status(500).json({
                error: err
            });
        });


});

module.exports = router;
