var express = require('express');
var router = express.Router();
var db = require("../model/users.js");


router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post("/create", function (req, res, next) {
  var obj = req.body;

  db.save(obj, function (isOk) {
    if (isOk) {
      res.send("ok");
    } else {
      res.send("bad");
    }

  });

});

module.exports = router;
