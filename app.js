const Koa = require('koa')
const cors = require('koa2-cors')

const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const MongoConnect = require('./db')
// 引入db.js
// 连接数据库
MongoConnect()

const index = require('./routes/index')
const users = require('./routes/users')

// error handler 错误处理器
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes: ['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public')) //静态资源路径
app.use(views(__dirname + '/views', { //视图路径
  extension: 'pug' //视图引擎
}))

// 跨域中间件 
app.use(cors())


app.use(
  cors({
    origin: function (ctx) { //设置允许来自指定域名请求
      const whiteList = ['http://10.3.136.64:2103', 'http://39.108.232.64', 'http://10.3.136.106:3000', 'http://10.3.136.106:8081', 'http://localhost:8081']; //可跨域白名单
      let url = ctx.header.referer;
      // let url = ctx.header.referer.substr(0, ctx.header.referer.length - 1)
      if (whiteList.includes(url)) {
        return url //注意，这里域名末尾不能带/，否则不成功，所以在之前我把/通过substr干掉了
      }
      return 'http://localhost:3000' //默认允许本地请求3000端口可跨域
    },
    maxAge: 5, //指定本次预检请求的有效期，单位为秒。
    credentials: true, //是否允许发送Cookie
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], //设置所允许的HTTP请求方法
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'], //设置服务器支持的所有头信息字段
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'] //设置获取其他自定义字段
  }))

app.use(async (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', '*');
  ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  ctx.set('Access-Control-Allow-Credentials', 'true');
  ctx.set('Cache-Control', 'private', 'max-age=86400'); // 设置缓存 
  if (ctx.method == 'OPTIONS') {
    ctx.body = 200;
  } else {
    await next();
  }
});

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes  启动路由
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app