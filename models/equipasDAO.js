var MongoCon = require('../models/mongoCon');
const util = require('util');

exports.create = function(equipa,cb) {

       // console.log(JSON.stringify(db));
        console.log(util.inspect(db,{depth:2}))
       MongoCon.db.collection("equipas").insertOne(
            equipa,
            function(err) {
                if (err) throw err;
                console.log("1 document inserted");
                db.close();
                cb();
            });
}

exports.get = function(limit,cb) {
    MongoCon.db.collection("equipas").find({}).sort({$natural:-1}).limit(limit).toArray(function(err, result) {
            if (err) throw err;
            db.close();
            cb(result);
        });
}

exports.getTitulareSuplentes = function (equipa, cb) {
    MongoCon.db.collection("jogos").find({equipaCasa: equipa}).toArray(
        function (err, jogadores) {
            if (err) {
                console.log(err);
                cb("Erro");
            } else {
                cb(jogadores);
            }
        });

};

exports.getJogadores = function (equipa, cb) {
    console.log(equipa);
    MongoCon.db.collection("jogadores").find({equipaJogador: equipa}).toArray(
        function (err, jogadores) {
            if (err) {
                console.log(err);
                cb("Erro");
            } else {
                cb(jogadores);
            }
        });

};

exports.updateConvocados = function (equipaCasa, equipaVisitante, titulares, suplentes, cb) {
    console.log("Titulares " + titulares);
    console.log("Suplentes " + suplentes);
    var myQuery = {equipaCasa: equipaCasa, equipaVisitante:equipaVisitante};
    var newValues = {$set: {titulares: titulares, suplentes: suplentes}};
    console.log("New Values" + newValues);
    console.log("My Query"+ myQuery);
    MongoCon.db.collection("jogos").updateOne(myQuery, newValues, function (err, res) {
            if (err) {
                console.log(err);
                cb("Erro");
            } else {
                console.log("Res"+ res);
                cb(res);
            }
        });

};