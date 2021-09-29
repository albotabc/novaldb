const router = require('koa-router')()
const userCtl = require('../controller/user')
router.prefix('/users')

// 注册
router.get('/add', userCtl.userAdd)

// 修改密码
router.get('/update', userCtl.userUpdate)

// 删除用户
router.get('/del', userCtl.userDel)

// 查询所有用户
router.get('/find', userCtl.userFind)

// 登陆
router.post('/login', userCtl.login)



module.exports = router