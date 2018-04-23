var connection = require("./connection.js");

var orm = {
  selectAll: function(tableInput, cb) {
    connection.query("SELECT * FROM ??;", [tableInput], function(err, data) {
      if (err) {
        throw err;
      }

      cb(data);
    });
  },

  insertOne: function(valOfCol, cb) {
    connection.query(
      "insert into burger (burger_name) value (?) ;",
      [valOfCol],
      function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      }
    );
  },

  updateOne: function(id, trueorfalse, cb) {
    connection.query(
      "UPDATE burger SET devoured = ? WHERE id = ?",
      [trueorfalse, id],
      function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      }
    );
  }
};

module.exports = orm;
