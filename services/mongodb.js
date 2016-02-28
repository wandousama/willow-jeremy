var MongoClient = require('mongodb').MongoClient;
var url = 'localhost'

function MongoPool(){}

var p_db;

function initPool(cb){
  MongoClient.connect('mongodb://localhost:27017/users', function(err, db) {
    if (err) throw err;

    p_db = db;
    if(cb && typeof(cb) == 'function')
        cb(p_db);
  });
  return MongoPool;
}

MongoPool.initPool = initPool;

function getInstance(cb){
  if(!p_db){
    initPool(cb)
  }
  else{
    if(cb && typeof(cb) == 'function')
      cb(p_db);
  }
}

MongoPool.getInstance = getInstance;

module.exports = MongoPool;
