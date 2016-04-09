var express = require('express');
var path = require('path');
var router = express.Router();


router.use('/', function(req, res) {
  res.json({
    test: "It works!"
  });
});


module.exports = router;
