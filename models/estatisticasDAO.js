var MongoCon = require('../models/mongoCon');
const util = require('util');

exports.post = function (cestoConvertido, cb) {
    console.log(cestoConvertido);
    console.log(cestoConvertido.equipaVisitante);
    console.log(cestoConvertido.equipaCasa);

    MongoCon.db.collection("jogos").update(
        {equipaCasa: cestoConvertido.equipaCasa, equipaVisitante : cestoConvertido.equipaVisitante},
        {
            $push: {
                estatisticas : cestoConvertido
            }
        }
        , function (err, res) {
            if (err) {
                console.log(err);
                cb("Erro");
            } else {
                console.log("Res"+ res);
                cb(res);
            }
        });

};


exports.getDadosEstatisticos = function (equipa, cb) {
    console.log(equipa);

    MongoCon.db.collection("jogos").find({equipaCasa: equipa, estatisticas: {$elemMatch: {acao: "CestoConvertido"}}}).toArray(
        function (err, result) {
            if (err) {
                console.log(err);
                cb("Erro");
            } else {
                cb(result);
            }
        });

};

