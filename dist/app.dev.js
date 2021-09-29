"use strict";

var Koa = require('koa');

var cors = require('koa2-cors');

var app = new Koa();

var views = require('koa-views');

var json = require('koa-json');

var onerror = require('koa-onerror');

var bodyparser = require('koa-bodyparser');

var logger = require('koa-logger');

var MongoConnect = require('./db'); // 引入db.js
// 连接数据库


MongoConnect();

var index = require('./routes/index');

var users = require('./routes/users');

var movies = require('./routes/movies');

var novels = require('./routes/novels'); // error handler 错误处理器


onerror(app); // middlewares

app.use(bodyparser({
  enableTypes: ['json', 'form', 'text']
}));
app.use(json());
app.use(logger());
app.use(require('koa-static')(__dirname + '/public')); //静态资源路径

app.use(views(__dirname + '/views', {
  //视图路径
  extension: 'pug' //视图引擎

})); // 跨域中间件 

app.use(cors());
app.use(cors({
  origin: function origin(ctx) {
    //设置允许来自指定域名请求
    var whiteList = ['http://10.3.136.64:2103', 'http://39.108.232.64', 'http://10.3.136.106:3000', 'http://10.3.136.106:8081', 'http://localhost:8081']; //可跨域白名单

    var url = ctx.header.referer; // let url = ctx.header.referer.substr(0, ctx.header.referer.length - 1)

    if (whiteList.includes(url)) {
      return url; //注意，这里域名末尾不能带/，否则不成功，所以在之前我把/通过substr干掉了
    }

    return 'http://localhost:3000'; //默认允许本地请求3000端口可跨域
  },
  maxAge: 5,
  //指定本次预检请求的有效期，单位为秒。
  credentials: true,
  //是否允许发送Cookie
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  //设置所允许的HTTP请求方法
  allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
  //设置服务器支持的所有头信息字段
  exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'] //设置获取其他自定义字段

}));
app.use(function _callee(ctx, next) {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          ctx.set('Access-Control-Allow-Origin', '*');
          ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
          ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
          ctx.set('Access-Control-Allow-Credentials', 'true');
          ctx.set('Cache-Control', 'private', 'max-age=86400'); // 设置缓存 

          if (!(ctx.method == 'OPTIONS')) {
            _context.next = 9;
            break;
          }

          ctx.body = 200;
          _context.next = 11;
          break;

        case 9:
          _context.next = 11;
          return regeneratorRuntime.awrap(next());

        case 11:
        case "end":
          return _context.stop();
      }
    }
  });
}); // logger

app.use(function _callee2(ctx, next) {
  var start, ms;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          start = new Date();
          _context2.next = 3;
          return regeneratorRuntime.awrap(next());

        case 3:
          ms = new Date() - start;
          console.log("".concat(ctx.method, " ").concat(ctx.url, " - ").concat(ms, "ms"));

        case 5:
        case "end":
          return _context2.stop();
      }
    }
  });
}); // routes  启动路由

app.use(index.routes(), index.allowedMethods());
app.use(users.routes(), users.allowedMethods());
app.use(movies.routes(), movies.allowedMethods());
app.use(novels.routes(), novels.allowedMethods()); // error-handling

app.on('error', function (err, ctx) {
  console.error('server error', err, ctx);
});
module.exports = app;