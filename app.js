var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');

var app = express();
var port = process.env.PORT || 80;

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());


// create reusable transporter object using SMTP transport
var transporter = nodemailer.createTransport('SMTP', {
  service: "Gmail",
  auth: {
    user: "retinalviv@gmail.com",
    pass: "REtinaLViv02"
  }
});


app.post("/register", function (req, res) {
  console.log();
  var user = {
    name: req.body.name || ' error name ',
    sname: req.body.sname || ' error sname ',
    phone: req.body.phone || ' error phone ',
    email: req.body.email || ' error email ',
    message: req.body.message || ' empty message'
  };

// setup e-mail data with unicode symbols
  var mailOptions = {
    from: 'Fred Foo ✔ <retinalviv@gmail.com>',
    to: "retinalviv@gmail.com, evgeniya.volkova1911@gmail.com",
    subject: 'meeting member', // Subject line
    text: user.name + ' /n ' + user.sname + ' /n ' + user.email + ' /n ' + user.phone + ' /n ' + user.message,
    html: user.name + ' <br> ' + user.sname + ' <br> ' + user.email + ' <br> ' + user.phone + ' <br/> ' + +user.message
  };


  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      res.status(401).send("bad");
      return console.log(error);
    }
    console.log('Message sent: ' + info.response);
    res.status(200).send(info.response)
  });
});

app.use('/', express.static(__dirname + '/public/dist/'));


app.listen(port, function () {
  console.log(" magic happen on " + port);
});