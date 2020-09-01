var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');

require('../models/jogador')
const jogador = mongoose.model('jogadores')

const fs = require('fs');

exports.enviarRegisto = function (req, res, next) {

        jogador.find({ usernameDoDestinatario: req.query.ajaxName })
            .then(function(wapp) {

                var morada = wapp[0].morada;

                res.send(morada);

            });
}

exports.receberJogadores = function (req, res, next) {
        console.log("receberJogadores()");
        try {
            jogador.find({equipaJogador: req.query.equipa1},
                function (err, jogador) {
                    if (err) {
                        console.log(err);
                        res.send(err);
                    }

                    console.log(jogador);
                    res.send(jogador);

                })
        }catch (err) {
            console.log(err);
        }

    }