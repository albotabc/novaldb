const {
    User
} = require('../models')

//注册
const userAdd = async (ctx) => {
    let {
        username,
        pwd
    } = ctx.request.query

    let isDouble = false

    await User.findOne({
        username,
        pwd
    }).then(rel => {
        if (rel) isDouble = true
    })

    if (isDouble) {
        ctx.body = {
            code: 300,
            msg: '用户名已存在'
        }
        return false
    }


    await User.create({ //User.create是异步操作，先触发响应，才存入数据库，所以需要异步操作,否则会Notfound
        username: username,
        pwd: pwd
    }).then(rel => {
        if (rel) {
            ctx.body = {
                code: 200,
                msg: '注册成功',
                data: rel
            }
        } else {
            ctx.body = {
                code: 300,
                msg: '注册失败，请填写注册信息'
            }
        }
    }).catch(err => {
        ctx.body = {
            code: 500,
            msg: '注册用户时出现异常',
            err
        }
    })
}

//找回密码
const userUpdate = async (ctx) => {
    let params = ctx.request.body //修改后的参数
    await User.updateOne({
        _id: params._id
    }, {
        username: params.username,
        pwd: params.pwd
    }).then(rel => {
        ctx.body = {
            result: rel
        }
    }).catch(err => {
        ctx.body = {
            code: 400,
            msg: '修改用户时出现异常'
        }
        console.error(err)
    })
}
// 删除用户
const userDel = async (ctx) => {
    let {
        username
    } = ctx.request.body //
    await User.findOneAndDelete({
        username: {
            $regex: new RegExp(ctx.request.query.username)
        }
    }).then(rel => {
        ctx.body = {
            msg: '用户名为' + rel.username + '的用户已被删除',
            result: rel.username //将被删除的用户数据以对象形式返回
        }
    }).catch(err => {
        ctx.body = {
            code: 400,
            msg: '删除用户时出现异常'
        }
        console.log(err);
    })
}

// 查询所有用户
const userFind = async (ctx) => {
    await User.find().then(rel => {
        ctx.body = {
            result: rel
        }
    }).catch(err => {
        ctx.body = {
            code: 400,
            msg: '查询时出现异常'
        }
        console.log(err);
    })
}


//登陆
const login = async (ctx) => {
    let uerInfo = {
        username: ctx.request.username,
        pwd: ctx.request.pwd
    }
    await User.findOne(uerInfo).then(rel => {
        if (rel) {
            ctx.body = {
                code: 200,
                msg: '登陆成功',
            }
        } else {
            ctx.body = {
                code: 300,
                msg: '用户名或密码错误，请重新输入'
            }
        }
    }).catch(err => {
        ctx.body = {
            code: 400,
            msg: '登陆时出现异常'
        }
        console.log(err);
    })
}

module.exports = {
    userAdd,
    userUpdate,
    userDel,
    userFind,
    login,
}