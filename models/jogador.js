var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Create Shema
var JogadorSchema = new Schema({
    nomeJogador:{
        type:String,
        required: true
    },
    escalao:{
        type: String,
        required: true
    },
    nacionalidade:{
        type: String,
        required: true
    },
    anoNascimento: {
        type: String,
        required: true
    },
    equipaJogador: {
        type: String,
        required: true
    }
})

mongoose.model('jogadores', JogadorSchema);