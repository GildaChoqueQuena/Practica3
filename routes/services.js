var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {

//console.log(req);
//return;
var host = req.headers.host;
var baseUrl = "no pude encontrar baseUrl";
var originalUrl = req.originalUrl;a url bas
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

module.exports = router;
