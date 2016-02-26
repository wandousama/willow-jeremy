'use strict'

var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send([
  {
    "title": "四窗岩漂流",
    "author": "Jeremy",
    "time": "2015-06",
    "image": "img/portfolio-01.jpg",
    "content": "漂流漂流漂流漂流漂流漂流漂流漂流漂流."
  },
  {
    "title": "苏州",
    "author": "Willow",
    "time": "2015-04",
    "image": "img/portfolio-02.jpg",
    "content": "拙政园 虎丘 没开门的唐寅祠 观前街."
  },
  {
    "title": "大明山滑雪",
    "author": "Willow",
    "time": "2015-01-10",
    "image": "img/portfolio-03.jpg",
    "content": "滑雪 摔倒 滑雪 摔倒 滑雪 摔倒 滑雪 摔倒 滑雪 摔倒 滑雪 摔倒 滑雪 摔倒 滑雪 摔倒 滑雪 摔倒. 温泉"
  },
  {
    "title": "2015外滩跨年",
    "author": "Jeremy",
    "time": "2015-01-01",
    "image": "img/portfolio-01.jpg",
    "content": "人人人人人人人人人人人人人人人人人人人人人人人人人人人人人人人人人人人人我你."
  },
  {
    "title": "嵊泗",
    "author": "Willow",
    "time": "2014-05-10",
    "image": "img/portfolio-02.jpg",
    "content": "坐船 下雨 冷 冷 洗脚 洗脚 洗脚 冷 冷 踢球 踢球 踢球 踢球 脚丫疼 不冷 不冷 不冷 不冷 吃海鲜 吃海鲜 坐船 。"
  },
  {
    "title": "东天目山",
    "author": "Willow",
    "time": "2013-04-20",
    "image": "img/portfolio-03.jpg",
    "content": "拍照 爬山 爬山 拍照 爬山 累 爬山 爬山 拍照 爬山 累 爬山 拍照 累 累 累 累 累 拍照."
  }
]
);
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
