var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {

//console.log(req);
//return;
var host = req.headers.host;
var baseUrl = "no pude encontrar baseUrl";
var originalUrl = req.originalUrl;
var httpVersion = req.httpVersion;
var _startTime = req._startTime;
var respuesta = "nose encuentra baseUrl, originalUrl devuelve la url original de la solicitud"
res.status(200).json({
  "host":host,
  "baseUrl":baseUrl,
  "originalUrl":originalUrl,
  "httpVersion":httpVersion,
  "_startTime":_startTime,
  "respuestas pregunta (b)": respuesta

});
});

router.post('/interes', function(req,res,next) {
 var monto_inicial= req.body.monto_inicial;
 var porcentaje_anual= req.body.porcentaje_anual;
 if (monto_inicial == 0 || porcentaje_anual == 0 || monto_inicial == undefined || porcentaje_anual==undefined){
   res.status(400).json({msn : "Error al introducir las variables"});
 }
 var X = parseFloat(monto_inicial);
 var Y = parseFloat(porcentaje_anual);
 var final =0;
 final=((Y/100)*X)+(X);
 var Año=0;
 Año=(Y*X)/100;
 var mes=Año/12;
 var semana=Año/52;
 var dia=Año/365;
      res.status(200).json({
           "Monto Final":final,
           "Monto Anual":Año,
           "Monto Mensual":mes,
           "MOnto Semanal":semana,
           "Monto Diario":dia
 });





});
module.exports = router;
