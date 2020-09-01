var express = require('express');
var router = express.Router();
var estatisticasDAO = require('../../models/estatisticasDAO');

router.post('/enviarRegisto', function (req, res, next) {
    var registo = JSON.parse(req.body.cestoConvertido);
    console.log(registo);
    estatisticasDAO.post(registo,
        function(result) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(JSON.stringify(result));
            return res.end();
        });
});

router.post('/enviarCestoFalhado', function (req, res, next) {
    var registo = JSON.parse(req.body.cestoFalhado);
    console.log(registo);
    estatisticasDAO.post(registo,
        function(result) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(JSON.stringify(result));
            return res.end();
        });
});

router.post('/enviarFaltaDesqualificante', function (req, res, next) {
    var registo = JSON.parse(req.body.faltaDesqualificante);
    console.log(registo);
    estatisticasDAO.post(registo,
        function(result) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(JSON.stringify(result));
            return res.end();
        });
});

router.post('/enviarFaltaPessoal', function (req, res, next) {
    var registo = JSON.parse(req.body.faltaPessoal);
    console.log(registo);
    estatisticasDAO.post(registo,
        function(result) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(JSON.stringify(result));
            return res.end();
        });
});

router.post('/enviarFaltaTecnica', function (req, res, next) {
    var registo = JSON.parse(req.body.faltaTecnica);
    console.log(registo);
    estatisticasDAO.post(registo,
        function(result) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(JSON.stringify(result));
            return res.end();
        });
});

router.post('/enviarAntiDesportiva', function (req, res, next) {
    var registo = JSON.parse(req.body.antiDesportiva);
    console.log(registo);
    estatisticasDAO.post(registo,
        function(result) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(JSON.stringify(result));
            return res.end();
        });
});



router.get('/dadosEstatisticos', function (req, res, next) {
    console.log(req.query.equipa1);
    estatisticasDAO.getDadosEstatisticos(req.query.equipa1,
        function(result) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(JSON.stringify(result));
            return res.end();
        });
});

module.exports = router;