var express = require('express');
var router = express.Router();
var controlador = require('../controllers/principal');  

router.get('/', controlador.acessarPrincipal);

router.post('/filtro', controlador.buscaFiltros);
  
router.post('/referencia', controlador.buscaReferencias);

module.exports = router;
