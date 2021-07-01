var modelo = require('../models/principal');  
  
var controladorPrincipal = {
    acessarPrincipal(req, res, next) {
        modelo.popularLocais(function (err, result, fields) {
            if (err) throw err;
            var dbLocais = JSON.parse(JSON.stringify(result[0]));
            var dbIdent = JSON.parse(JSON.stringify(result[1]));
        
            dbIdent.sort(function(a,b)
            {
              return a.identificacao.localeCompare(b.identificacao);
            });
            res.render('principal', { 
              title: 'Página Principal - Aqua', 
              headername: 'Aqua - Qualidade das Águas',
              listaLocais: dbLocais,
              listaIdentLocais: dbIdent
            });
        });
    },

    buscaFiltros(req,res){
      var selected = req.body.selectedFilter;
      modelo.popularFiltros(selected, function (err, result, fields) {
        if (err) throw err;
        var dbFilterData = JSON.parse(JSON.stringify(result));
        return res.json({
          success: true,
          message: "Succesful query!",
          filterData: dbFilterData
        });
      });
    },
  
    buscaReferencias(req,res){
      var parametro = req.body.parametro;
      modelo.popularReferencias(parametro, function (err, result, fields) {
        if (err) throw err;
        var dbReferenceData= JSON.parse(JSON.stringify(result));
        return res.json({
          success: true,
          message: "Succesful query!",
          references: dbReferenceData
        });
      });
    }
}

module.exports = controladorPrincipal; 