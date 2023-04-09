var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const data = '<a href="/domains">Go to: /domains</a>';
  res.send(data);
});

module.exports = router;
