var express = require('express');
var path = require('path');
var router = express.Router();

router.get('/todo', function(req, res) {
  var todos = ['Make a sandwhich', 'Build a sandcastle', 'Do a flip', 'Bark like a dog'];
  res.json(todos[Math.floor(Math.random() * todos.length)]);
});


module.exports = router;
