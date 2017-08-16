var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');

var app = express();
var port = process.env.NODE_ENV === 'development' ? 3000 : 80;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

// create reusable transporter object using SMTP transport
var transporter = nodemailer.createTransport('SMTP', {
  service: "Gmail",
  auth: { user: "retinalviv@gmail.com", pass: "REtinaLViv02" }
});

app.post("/register", function (req, res) {
  var user = {
    name: req.body.name || ' error name ',
    sname: req.body.sname || ' error sname ',
    phone: req.body.phone || ' error phone ',
    city: req.body.city || ' error city ',
    email: req.body.email || ' error email ',
    message: req.body.message || ' empty message',
    intern: req.body.intern || "not selected"
  };

// setup e-mail data with unicode symbols
  var mailOptions = {
    from: 'New User <retinalviv@gmail.com>',
    to: "retinalviv@gmail.com, evgeniya.volkova1911@gmail.com",
    subject: 'meeting member',
    text: 'Дані про нового учасника ' +
          ' /n ' +  user.name +
          ' /n ' + user.sname +
          ' /n ' + user.email +
          ' /n ' + user.phone +
          ' /n ' + user.city +
          ' /n  is it Intern ?'+ user.intern +
          ' /n ' + user.message,
    html: 'Дані про нового учасника ' +
    ' <br> ' +  user.name +
    ' <br> ' + user.sname +
    ' <br> ' + user.email +
    ' <br> ' + user.phone +
    ' <br> ' + user.city +
    ' <br/> is it Intern ? ' +  user.intern +
    ' <br/> '+ user.message
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      res.status(401).send("bad");
      return console.log(error);
    }
    res.status(200).send(info);
  });
});
app.use('/', express.static(__dirname + '/client/.dist/'));
app.listen(port, function () { console.log(" Magic happen on " + port ); });
