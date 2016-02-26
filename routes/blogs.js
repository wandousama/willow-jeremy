'use strict'

var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send([
    {
      "title": "Rails Assets Pipeline Bug小记",
      "author": "Jeremy",
      "time": "2015-10-23 12:08 AM",
      "image": "",
      "content": "前段时间在用Rails部署生产环境时遇到一个诡异的情况，在生产环境的集群下面每台机器build出来的assets摘要（digest）后缀不一样，这导致了在loadbalance访问时随机出现assets 404 的情况。<br/><br/>经过debug后发现是由于一个第三方的前端类库（angular-rails-templates）在做assets pipeline的时候根据项目的path改了<code>Rails.application.config.assets.version</code>，这导致只要项目的path不一样算出来的asset version都不一样。而asset version是用来计算所有assets的digest后缀的key。<br/><br/>在我们生产集群环境中的每个project root path都不一样（根据自动化部署的时间），所以每台机器经过assets pipeline打出来的assets后缀也都不同了。（Rails assets pipeline是个坑？也许。。）<br/><br/>我们总是在挖坑填坑中积累经验，所以在debug期间研究了一下Rails做assets pipeline的过程，简单记录一下。<br/><br/>"
    },
    {
      "title": "Some",
      "author": "Jeremy",
      "time": "2015-10-22 12:08 AM",
      "image": "",
      "content": "Sed a lorem quis neque interdum consequat ut sed sem. Duis quis tempor nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent id tempor ipsum. Fusce at massa ac nunc porta fringilla sed eget neque. Quisque quis pretium nulla. Fusce eget bibendum neque, vel volutpat augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum et malesuada fames ac ante ipsum primis in faucibus."
    },
    {
      "title": "Has image",
      "author": "Willow",
      "time": "2015-10-20 12:08 AM",
      "image": "img/iphone-bg.png",
      "content": "Hhhhhhhhh, test pic"
    }
  ]);
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
