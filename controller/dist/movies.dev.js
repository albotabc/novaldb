"use strict";

var _require = require('../models'),
    Movie = _require.Movie; //解构模型对象


var moviesAPI = function moviesAPI(ctx) {
  return regeneratorRuntime.async(function moviesAPI$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(Movie.find().then(function (rel) {
            // 对模型对象进行请求
            ctx.body = {
              code: 200,
              msg: "电影信息获取成功",
              result: rel // 为什么返回rel为空数组 ? ,

            };
          })["catch"](function (err) {
            ctx.body = {
              code: 400,
              msg: '电影信息获取失败'
            };
            console.log(err);
          }));

        case 2:
        case "end":
          return _context.stop();
      }
    }
  });
};

module.exports = {
  moviesAPI: moviesAPI
};