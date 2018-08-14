var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/userRoute');
var trailersRouter = require('./routes/trailerRoute');
var trailerCommentsRouter = require('./routes/trailerCommentRoute');
var movieCategories = require('./routes/movieCategory');
var rolesRouter = require('./routes/roleRoute');
var clipsRouter = require('./routes/clipRoute');
var clipCommentRouter = require('./routes/clipCommentRoute');
var rolesRouter = require('./routes/roleRoute')
var celebrityRouter = require('./routes/celebrityRoute');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use('/Images/uploads', express.static('Images/uploads')); //making Images/uploads folder publicly accessible
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//to enable Cross-Origin resourse Sharing
app.use( function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  if(req.method === 'OPTIONS'){
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, PATCH, DELETE');
    return res.status(200).json({});
  }
  next(); //allows the next middleware to execute
}) 



//connecting to mongoose database
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://flixia:genesystechhub2018*@ds121652.mlab.com:21652/flixia');


//Routes which should handle requests
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/movieCategories', movieCategories);
app.use('/trailers', trailersRouter);
app.use('/trailer/comments', trailerCommentsRouter);
app.use('/roles', rolesRouter);
app.use('/clips', clipsRouter);
app.use('/clipComments', clipCommentRouter);
app.use('/celebrities', celebrityRouter);

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
console.log('Server started');
