var restful = require('node-restful');
var mongoose = restful.mongoose;

//Schema
var equipaSchema = new mongoose.Schema({
    nomeEquipa : String,
    escalaoEquipa : String,
    nivelCompetitivo : String
});

module.exports = restful.model('Equipas', equipaSchema);