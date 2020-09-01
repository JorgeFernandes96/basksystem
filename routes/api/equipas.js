var express = require('express');
var router = express.Router();
var equipasDAO = require('../../models/equipasDAO');

router.get('/jogadores', function (req, res, next) {

    equipasDAO.getJogadores(req.query.equipa1,
        function(jogadores) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(JSON.stringify(jogadores));
            return res.end();
            });
});

router.get('/TitularesSuplentes', function (req, res, next) {

    equipasDAO.getTitulareSuplentes(req.query.equipa1,
        function(jogadores) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(JSON.stringify(jogadores));
            return res.end();
        });
});

router.put('/updateConvocados', function (req, res, next) {
    console.log(req.body['titulares[]']);
    equipasDAO.updateConvocados(req.body.equipaCasa, req.body.equipaVisitante, req.body['titulares[]'], req.body['suplentes[]'],
        function(jogadores) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(JSON.stringify(jogadores));
            return res.end();
        });
});

module.exports = router;