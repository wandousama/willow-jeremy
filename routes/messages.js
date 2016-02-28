'use strict'

var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var MongoPool = require('../services/mongodb');

/* GET users listing. */
router.get('/', function(req, res, next) {
  MongoPool.getInstance(function (db){
    db.collection('messages').find().toArray(function(err, result) {
      if (err) {
        res.send(result);
      }
      res.send(result);
    });
  });
});

router.post('/', function(req, res, next) {
  MongoPool.getInstance(function (db){
    db.collection('messages').insert(req.body, function(err, result) {
      if (err) {
        res.send(err);
      }
      res.send(result);
    });
  });
});

module.exports = router;
