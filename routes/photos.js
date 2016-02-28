'use strict'

var express = require('express');
var router = express.Router();
var MongoPool = require('../services/mongo_pool');


/* GET users listing. */
router.get('/', function(req, res, next) {
  MongoPool.getInstance(function (db){
    db.collection('photos').find().toArray(function(err, result) {
      if (err) {
        res.send(err);
      }
      res.send(result);
    });
  });
});

router.post('/', function(req, res, next) {
  MongoPool.getInstance(function (db){
    db.collection('photos').insert(req.body, function(err, result) {
      if (err) {
        res.send(err);
      }
      res.send(result);
    });
  });
});

module.exports = router;
