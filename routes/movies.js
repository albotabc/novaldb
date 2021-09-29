const router = require('koa-router')()
const movieCtl = require('../controller/movies')
router.prefix('/movies')

// 电影数据接口
router.get('/', movieCtl.moviesAPI)

module.exports = router