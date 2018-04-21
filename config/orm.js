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

  updateOne: function(id) {
    connection.query(
      "UPDATE burger SET devoured = 1 WHERE id = ?",
      [id],
      function(err, result) {
        if (err) {
          throw err;
        } else if (result.changedRows === 0) {
          console.log("a burger with that id does not exist");
        }
        // res.status(200).end();
        //cb(result_);
        console.log(result);
      }
    );
  }
};

module.exports = orm;
