var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.selectAll("burger", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols,cb) {
    orm.insertOne(cols, function(res) {
      cb(res);
    });
  },
  update: function(idvalue, trueorfalse, cb) {
    orm.updateOne(idvalue, trueorfalse, function(res) {
      cb(res);
    });
  }
};

module.exports = burger;

