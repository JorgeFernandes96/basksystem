var express = require('express');
var router = express.Router();
var equipasDAO = require('../models/equipasDAO');

//Models
var Equipa = require('../models/equipa');

//Routes

Equipa.methods(['get', 'put', 'post', 'delete']);
Equipa.register(router, '/equipasRest')

module.exports = router;