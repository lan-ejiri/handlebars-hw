var express = require("express");
var orm = require("../config/orm.js");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function(req, res) {
  //   orm.selectAll("burger");
  //   res.render("index", { burger: data });

  burger.all(function(data) {
    var hbsObject = {
      burger: data
    };
    console.log("the styff", hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/", function(req, res) {
  burger.create("burger_name", req.body.name, function(
    result
  ) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

module.exports = router;
