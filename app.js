// Load environment variables
require('dotenv').load();

// Load dependencies
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var webpack = require("webpack");
var app = express();


// Load server routes
var api = require('./src/server/routes/api');


// Load Webpack config
var packConfig = require('./webpack.config');
var compiler = webpack(packConfig);


// Webpack middleware to allow webpack to automatically rebundle on changes
app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: packConfig.output.publicPath
}));

// Webpack middleware to automatically refresh pages on changes
app.use(require("webpack-hot-middleware")(compiler));


// View engine setup
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'src/client/assets', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Setup for publicly accessible assets
app.use(express.static(path.join(__dirname, 'src/client/assets')));


// Mount Routes
app.use('/api', api)


// If no route is matched before this any route will be served to the react router to handle.
app.get('*', function(req, res) {
  var filename = path.join(compiler.outputPath,'index.html');
  compiler.outputFileSystem.readFile(filename, function(err, result){
    if (err) {
      return next(err);
    }
    res.set('content-type','text/html');
    res.send(result);
    res.end();
  });
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
