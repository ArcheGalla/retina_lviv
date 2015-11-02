var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  console.log("hello");
  res.sendFile(__dirname + "public/.tmp/serve/index.html")
});

module.exports = router;
