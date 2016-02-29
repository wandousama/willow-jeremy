var express = require('express');
var router = express.Router();
var MongoPool = require('../services/mongo_pool');

/* GET users listing. */
router.get('/', function(req, res, next) {
  MongoPool.getInstance(function (db){
    db.collection('users').find().toArray(function(err, result) {
      if (err) {
        res.send(result);
      }
      res.send(result);
    });
  });
});

router.post('/', function(req, res, next) {
  MongoPool.getInstance(function (db){
    db.collection('users').insertMany([
      {a : 1}, {a : 2}, {a : 3}
    ], function(err, result) {
      if (err) {
        res.send(result);
      }
      res.send(result);
    });
  });
});

module.exports = router;
