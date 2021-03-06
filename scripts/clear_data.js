var default_collections = ['photos', 'blogs']

var MongoPool = require('../services/mongo_pool');

MongoPool.getInstance(function (db){
  default_collections.forEach(function(collection_name) {
    db.collection(collection_name).drop((function(err, result) {
      if (err) {
        console.log(err);
      } else {
        console.log('drop success');
      }
    }));
  });
});
