var MongoClient = require('mongodb').MongoClient;
var mongoUrl = "mongodb://bdubasket2:1234ocorr@ds211309.mlab.com:11309/basket";

    MongoClient.connect(mongoUrl,{poolSize:10}, function(err, db) {
        if (err) throw err;
        exports.db = db;
    });
