var fs = require('fs');

var file = "db.json";

exports.save = function (ob, cb) {

  fs.writeFile(file, JSON.stringify(ob, null, 4), function (err) {
    if (err) {
      console.log(err);
    } else {
      cb(true);
    }
  });

};