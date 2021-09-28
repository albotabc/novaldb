"use strict";

var mongoose = require('mongoose');

module.exports = function () {
  mongoose.connect('mongodb://localhost:27017/dataDB', {
    useUnifiedTopology: true,
    // 自动创建新集合
    useNewUrlParser: true //使用新的Url解析器

  }).then(function () {
    console.log('mongoDB连接成功');
  })["catch"](function (err) {
    console.error('连接失败', err);
  });
};