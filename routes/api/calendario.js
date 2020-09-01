var express = require('express');
var router = express.Router();
var calendarioDAO = require('../../models/calendarioDAO');

router.get('/calendario', function (req, res, next) {

    calendarioDAO.getCalendario({},
        function(calendario) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(JSON.stringify(calendario));
            return res.end();
        });
});


module.exports = router;