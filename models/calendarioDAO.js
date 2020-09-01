var MongoCon = require('../models/mongoCon');
const util = require('util');

exports.getCalendario = function (equipa, cb) {
        MongoCon.db.collection("jogos").find({}).toArray(
        function (err, calendario) {
            if (err) {
                console.log(err);
                cb("Erro");
            } else {
                cb(calendario);
            }
        })
}
