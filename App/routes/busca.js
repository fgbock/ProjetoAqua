var express = require('express');
var router = express.Router();
var controlador = require('../controllers/busca');  

router.post('/simples', controlador.buscaSimples);
  
router.post('/avancada', controlador.buscaAvancada);
  
module.exports = router;