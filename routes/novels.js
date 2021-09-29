const router = require('koa-router')()
const novelCtl = require('../controller/novel')
router.prefix('/novels')

// 小说接口
router.get('/popFree', novelCtl.popFreeAPI)
router.get('/newFree', novelCtl.newFreeAPI)
router.get('/rank', novelCtl.RankAPI)
router.get('/chiefRecommend', novelCtl.ChiefRecommendAPI)
router.get('/finish', novelCtl.FinishAPI)
router.get('/godsNew', novelCtl.GodsNewAPI)
router.get('/latest', novelCtl.LatestAPI)
router.get('/redBooks', novelCtl.RedBooksAPI)
router.get('/sellWell', novelCtl.SellWellAPI)
router.get('/allBooks', novelCtl.AllBooksAPI)

// 搜索
router.get('/search', novelCtl.SearchAPI)

// 分类
router.get('/type', novelCtl.TypeAPI)

// 删除
router.get('/delBook', novelCtl.DeleteBookAPI)

//添加
router.post('/addBook', novelCtl.AddBookAPI)

//修改
router.put('/editBook', novelCtl.EditBookAPI)

module.exports = router