console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n\n\n");
console.log("IF NOT WORKING PLEASE TRY: node app-front-end.js");
console.log("\n\n\nXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
var express = require('express');
var exphbs  = require('express-handlebars');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


var index = require('./routes/index.js');
var timeline = require('./routes/timeline.js');
var users = require('./routes/users.js');

var app = express();
var config = require("./config");
var server = require('http').Server(app);
var socket = require('./sockets')(server);

// view engine setup
//app.set('views', path.join(__dirname, 'views'));



app.engine('html', exphbs({defaultLayout: 'main',  extname : '.html'}));
app.set('view engine', 'html');


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', timeline);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

server.listen(config.web.port, function () {
    console.log("Live at Port " + config.web.port);
});

// auto reload page on file change.
/*
if(app.get('env') === 'development'){
    var livereload = require('livereload');
    var server = livereload.createServer();
    server.watch(__dirname + "/");
}*/


module.exports = app;
