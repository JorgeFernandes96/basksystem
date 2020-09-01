var express = require('express');
var router = express.Router();
var equipasDAO = require('../models/equipasDAO');


router.get('/', function(req, res, next) {
    res.render('index');
});

router.get('/index', function(req, res, next) {
    res.render('index');
});

router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/equipas', function(req, res, next)  {
    res.render('equipas')
});

router.get('/jogo', function(req, res, next)  {
    res.render('jogo')
});

router.get('/jogos', function(req, res, next)  {
    res.render('jogos')
});

router.get('/jogosTreinador', function(req, res, next)  {
    res.render('jogosTreinador')
});

router.get('/convocados', function(req, res, next)  {
    res.render('convocados')
});

router.get('/estatisticas', function(req, res, next)  {
    res.render('estatisticas')
})

router.post('/equipasPost', function (req, res, next) {
    var equipa = {
        nomeE: req.body.nome,
        escalaoE: req.body.escalao,
        nivelComp: req.body.nivelCompetitivo
    };
    equipasDAO.create(equipa,
        function() {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write("1 document inserted");
            return res.end();
        });
});

module.exports = router;