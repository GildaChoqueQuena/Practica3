var express = require('express');
var router = express.Router();

const CLIENTE = require('../../database/ventas/cliente');
const PRODUCTO= require('../../database/ventas/producto');
const PEDIDO= require('../../database/ventas/pedido');

// CLIENTE
router.get('/cliente', function (req, res, next) {

    CLIENTE.find().exec().then(docs => {
        if (docs.length == 0) {
            res.json({
                message: "Base de datos no encontrada"
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

router.post('/cliente', function (req, res, next) {
    const datos = {
        nombre: req.body.nombre,
        ci: req.body.ci,
        saldo:req.body.saldo,
        fechaRegistro: new Date
    };

    var modelClient = new CLIENTE(datos);
    modelClient.save().then(
        res.json({
            message: "Cliente insertado en la Base de Datos"
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
                message: "Datos actualizados corectamente"
            });
        }).catch(err => {
            res.status(500).json({
            });
                error: err
            })
});

router.delete('/:id', function (req, res, next) {
    let idCliente = req.params.id;

    CLIENTE.findByIdAndRemove(idCliente).exec()
        .then(() => {
            res.json({
                message: "Cliente Eliminado"
            });
        }).catch(err => {
            res.status(500).json({
                error: err
            });
        });
});

// PRODUCTO
router.get('/producto', function (req, res, next) {

   PRODUCTO.find().exec().then(docs => {
        if (docs.length == 0) {
            res.json({
                message: "Base de Datos no Encontrada"
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

router.post('/producto', function (req, res, next) {
    const datos = {
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        precio: req.body.precio,
        stock: req.body.stock,
    };

    var modelPruducto = new PRODUCTO(datos);
    modelPruducto.save().then(
        res.json({
            message: "Producto insertado en la base de datos"
        })
    ).catch(err => {
        res.status(500).json({
            error: err
        })
    });

});

router.patch('/:id', function (req, res, next) {
    let idProducto = req.params.id;
    const datos = {};

    Object.keys(req.body).forEach((key) => {
        datos[key] = req.body[key];
    });
    console.log(datos);
    PRODUCTO.findByIdAndUpdate(idProducto, datos).exec()
        .then(result => {
            res.json({
                message: "Datos actualizados"
            });
        }).catch(err => {
            res.status(500).json({
                error: err
            })
        });
});

router.delete('/:id', function (req, res, next) {
    let idProducto = req.params.id;

    PRODUCTO.findByIdAndRemove(idProducto).exec()
        .then(() => {
            res.json({
                message: "Producto eliminad"
            });
        }).catch(err => {
            res.status(500).json({
                error: err
            });
        });


});

//PEDIDO
router.get('/pedido', function (req, res, next) {

   PEDIDO.find().exec().then(docs => {
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

router.post('/pedido', function (req, res, next) {
    const datos = {
        descripcion: req.body.descriocion,
        fechaEntrega: new Date,
        fechaRegistro: new Date,
        entregado: req.body.entregado,
        costoTotal: req.body.costoTotal,
        producto: req.body.producto

    };

    var modelPedido = new PEDIDO(datos);
    modelPedido.save().then(
        res.json({
            message: "Pedido inseertado en la bd"
        })
    ).catch(err => {
        res.status(500).json({
            error: err
        })
    });

});

router.patch('/:id', function (req, res, next) {
    let idPedido = req.params.id;
    const datos = {};

    Object.keys(req.body).forEach((key) => {
        datos[key] = req.body[key];
    });
    console.log(datos);
    PEDIDO.findByIdAndUpdate(idPedido, datos).exec()
        .then(result => {
            res.json({
                message: "Datos actualizados"
            });
        }).catch(err => {
            res.status(500).json({
                error: err
            })
        });
});

router.delete('/:id', function (req, res, next) {
    let idPedido = req.params.id;

    PEDIDO.findByIdAndRemove(idPedido).exec()
        .then(() => {
            res.json({
                message: "Pedido eliminado"
            });
        }).catch(err => {
            res.status(500).json({
                error: err
            });
        });


});

module.exports = router;
