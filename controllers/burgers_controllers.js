var express = require("express");
var orm = require("../config/orm.js");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function (req, res) {
  burger.all(function (data) {
    var hbsObject = {
      burger: data
    };
    res.render("index", hbsObject);
  });
});

router.post("/", function (req, res) {
  burger.create(req.body.name, function (
    result
  ) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/", function (req, res) {
  burger.update(req.body.id, req.body.choice, function (result) {
    res.json({ id: result.insertId });
  })
});

module.exports = router;
