var express = require('express');
var router = express.Router();

const RECETA = require('../../database/coleccion/recetas/receta');
const ALIMENTO = require('../../database/coleccion/recetas/alimento');

/* GET Menu. */
router.get('/receta', function (req, res, next) {

   Receta.find().exec().then(docs => {
        if (docs.length == 0) {
            res.json({
                message: "No se encontro en la base de"
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

router.post('/receta', function (req, res, next) {
    const datos = {
        nombre: req.body.nombre,
        instrucciones: Response.body.instrucciones,
        porciones: req.body.porciones,
        Tipo: req.body.Tipo,
        ingredientes: req.body.ingredientes

    };

    var modelReceta = new Receta(datos);
    modelReceta.save().then(
        res.json({
            message: "Receta inseertado en la bd"
        })
    ).catch(err => {
        res.status(500).json({
            error: err
        })
    });

});

router.patch('/:id', function (req, res, next) {
    let idReceta = req.params.id;
    const datos = {};

    Object.keys(req.body).forEach((key) => {
        datos[key] = req.body[key];
    });
    console.log(datos);
    Receta.findByIdAndUpdate(idReceta, datos).exec()
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
    let idReceta = req.params.id;

    Receta.findByIdAndRemove(idReceta).exec()
        .then(() => {
            res.json({
                message: "receta eliminad"
            });
        }).catch(err => {
            res.status(500).json({
                error: err
            });
        });


});

// ALIMENTO
router.get('/alimento', function (req, res, next) {

    Alimento.find().exec().then(docs => {
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

router.post('/alimento', function (req, res, next) {
    const datos = {
        nombre: req.body.nombre,
        calorias: req.body.calorias,
        hidratosCa: req.body.hidratosCa,
        proteinas: req.body.proteinas,
        grasas: req.body.grasas,
        fibra: req.body.fibra


    };

    var modelAlimento = new Alimento(datos);
    modelPedido.save().then(
        res.json({
            message: "Pedido insertado en la base de datosd"
        })
    ).catch(err => {
        res.status(500).json({
            error: err
        })
    });

});

router.patch('/:id', function (req, res, next) {
    let idAlimento = req.params.id;
    const datos = {};

    Object.keys(req.body).forEach((key) => {
        datos[key] = req.body[key];
    });
    console.log(datos);
    Alimento.findByIdAndUpdate(idAlimento, datos).exec()
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
    let idAlimento = req.params.id;

    Alimento.findByIdAndRemove(idAlimento).exec()
        .then(() => {
            res.json({
                message: "receta eliminado"
            });
        }).catch(err => {
            res.status(500).json({
                error: err
            });
        });


});
module.exports = router;
