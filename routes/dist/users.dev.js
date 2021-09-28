"use strict";

var router = require('koa-router')();

var userCtl = require('../controller/user'); // router.prefix('/users')
// 注册


router.get('/add', userCtl.userAdd); // 修改密码

router.get('/update', userCtl.userUpdate); // 删除用户

router.get('/del', userCtl.userDel); // 查询所有用户

router.get('/find', userCtl.userFind); // 登陆

router.post('/login', userCtl.login); // 电影数据接口

router.get('/movies', userCtl.moviesAPI); // 小说接口

router.get('/popFree', userCtl.popFreeAPI);
router.get('/newFree', userCtl.newFreeAPI);
router.get('/rank', userCtl.RankAPI);
router.get('/chiefRecommend', userCtl.ChiefRecommendAPI);
router.get('/finish', userCtl.FinishAPI);
router.get('/godsNew', userCtl.GodsNewAPI);
router.get('/latest', userCtl.LatestAPI);
router.get('/redBooks', userCtl.RedBooksAPI);
router.get('/sellWell', userCtl.SellWellAPI);
router.get('/allBooks', userCtl.AllBooksAPI); // 搜索

router.get('/search', userCtl.SearchAPI); // 分类

router.get('/type', userCtl.TypeAPI); // 删除

router.get('/delBook', userCtl.DeleteBookAPI); //添加

router.post('/addBook', userCtl.AddBookAPI);
module.exports = router;