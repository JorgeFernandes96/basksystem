var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var jogoController = require('./controllers/jogoController');
var apiRouter = require('./routes/api');
var users = require('./routes/users');
var equipas = require('./routes/api/equipas');
var calendario = require('./routes/api/calendario');
var estatisticas = require('./routes/api/estatisticas');
var bodyParser = require('body-parser');
//Mongodb
//mongoose.connect('mongodb://bdubasket2:1234ocorr@ds211309.mlab.com:11309/basket');

var app = express();


var swig = require('swig');
app.engine('html', swig.renderFile);
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json({strict:false}));
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(bodyParser.json);

app.use('/', users);
app.use('/users', users);
app.use('/api/equipas', equipas);
app.use('/api/calendario', calendario);
app.use('/api/estatisticas', estatisticas);




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
