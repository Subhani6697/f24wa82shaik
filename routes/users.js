var express = require('express');
var router = express.Router();

let value = 0;
let total = 0;

/* GET users listing. */
router.get('/', function(req, res, next) {
  value += 2;
  total += value;
  res.send(`Total is: ${total}`);
});

module.exports = router;
