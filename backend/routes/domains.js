var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const data = { dummyData: true, domain: 'nlu.se', price: '5000', currency: 'SEK', uploaded: '2023-04-09 13:29' };
  res.json(data);
});

module.exports = router;
