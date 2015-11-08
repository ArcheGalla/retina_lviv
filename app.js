var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

app.get("/test", function (req, res) {
  res.send("Hello World! ");
});
app.use('/', express.static(__dirname + '/public/dist/'));


var port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log("work");
});