var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;


/* GET users listing. */
router.get('/', function(req, res, next) {
  MongoClient.connect('mongodb://localhost:27017/users', function(err, db) {
    if (err) {
      res.send(result);
    }
    db.collection('users').find().toArray(function(err, result) {
      if (err) {
        res.send(result);
      }
      res.send(result);
    });
  });
});

router.post('/', function(req, res, next) {
  MongoClient.connect('mongodb://localhost:27017/users', function(err, db) {
    if (err) {
      res.send(result);
    }
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
