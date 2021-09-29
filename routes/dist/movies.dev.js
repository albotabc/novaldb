"use strict";

var router = require('koa-router')();

var movieCtl = require('../controller/movies');

router.prefix('/movies'); // 电影数据接口

router.get('/', movieCtl.moviesAPI);
module.exports = router;