// let jwt = require('jsonwebtoken')
// import request form 'request';

const {
    User,
    Movie,
    PopFree,
    NewFree,
    Rank,
    ChiefRecommend,
    Finish,
    GodsNew,
    Latest,
    RedBooks,
    SellWell,
    AllBooks
} = require('../models') //解构模型对象

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

const moviesAPI = async (ctx) => { // 一个数据请求模块
    await Movie.find().then(rel => { // 对模型对象进行请求
        ctx.body = {
            code: 200,
            msg: "电影信息获取成功",
            result: rel, // 为什么返回rel为空数组 ? ,
        }
    }).catch(err => {
        ctx.body = {
            code: 400,
            msg: '电影信息获取失败'
        }
        console.log(err);
    })
}

// 流行免费小说 
const popFreeAPI = async (ctx) => { // 一个数据请求模块

    await PopFree.find().then(rel => { // 对模型对象进行请求
        ctx.body = {
            code: 200,
            msg: "流行免费小说信息(/主页免费)获取成功",
            result: rel,
        }
    }).catch(err => {
        ctx.body = {
            code: 400,
            msg: '流行免费小说信息获取失败'
        }
        console.log(err);
    })
}

const newFreeAPI = async (ctx) => { // 一个数据请求模块
    await NewFree.find().then(rel => { // 对模型对象进行请求
        ctx.body = {
            code: 200,
            msg: "最新免费小说信息获取成功",
            result: rel,
        }
    }).catch(err => {
        ctx.body = {
            code: 400,
            msg: '最新免费小说信息获取失败'
        }
        console.log(err);
    })
}

const RankAPI = async (ctx) => { // 一个数据请求模块
    await Rank.find().sort({ //排序
        "rank": 1
    }).then(rel => { // 对模型对象进行请求
        ctx.body = {
            code: 200,
            msg: "小说排行信息获取成功",
            result: rel,
        }
    }).catch(err => {
        ctx.body = {
            code: 400,
            msg: '小说排行信息获取失败'
        }
        console.log(err);
    })
}

const ChiefRecommendAPI = async (ctx) => { // 一个数据请求模块
    await ChiefRecommend.find().then(rel => { // 对模型对象进行请求
        ctx.body = {
            code: 200,
            msg: "编辑推荐小说信息获取成功",
            result: rel,
        }
    }).catch(err => {
        ctx.body = {
            code: 400,
            msg: '编辑推荐小说信息获取失败'
        }
        console.log(err);
    })
}
const FinishAPI = async (ctx) => { // 一个数据请求模块
    await Finish.find().then(rel => { // 对模型对象进行请求
        ctx.body = {
            code: 200,
            msg: "完本小说信息获取成功",
            result: rel,
        }
    }).catch(err => {
        ctx.body = {
            code: 400,
            msg: '完本小说信息获取失败'
        }
        console.log(err);
    })
}

const SellWellAPI = async (ctx) => { // 一个数据请求模块
    await SellWell.find().then(rel => { // 对模型对象进行请求
        ctx.body = {
            code: 200,
            msg: "畅销小说信息获取成功",
            result: rel,
        }
    }).catch(err => {
        ctx.body = {
            code: 400,
            msg: '畅销小说信息获取失败'
        }
        console.log(err);
    })
}

const GodsNewAPI = async (ctx) => { // 一个数据请求模块
    await GodsNew.find().then(rel => { // 对模型对象进行请求
        ctx.body = {
            code: 200,
            msg: "大神新书信息获取成功",
            result: rel,
        }
    }).catch(err => {
        ctx.body = {
            code: 400,
            msg: '大神新书小说信息获取失败'
        }
        console.log(err);
    })
}
const LatestAPI = async (ctx) => { // 一个数据请求模块
    await Latest.find().then(rel => { // 对模型对象进行请求
        ctx.body = {
            code: 200,
            msg: "最新上架小说信息获取成功",
            result: rel,
        }
    }).catch(err => {
        ctx.body = {
            code: 400,
            msg: '最新上架小说信息获取失败'
        }
        console.log(err);
    })
}
const RedBooksAPI = async (ctx) => { // 一个数据请求模块
    await RedBooks.find().then(rel => { // 对模型对象进行请求
        ctx.body = {
            code: 200,
            msg: "一品红文小说信息获取成功",
            result: rel,
        }
    }).catch(err => {
        ctx.body = {
            code: 400,
            msg: '一品红文小说信息获取失败'
        }
        console.log(err);
    })
}

const SearchAPI = async (ctx) => { // 搜索
    await AllBooks.find({
        title: {
            $regex: new RegExp(ctx.request.query.title)
        }
    }).then(rel => {
        ctx.body = {
            code: 200,
            msg: "小说信息搜索成功",
            result: rel
        }
    }).catch(err => {
        ctx.body = {
            code: 400,
            msg: '小说信息搜索失败'
        }
        console.log(err);
    })
}

const TypeAPI = async (ctx) => { // 分类
    await AllBooks.find({
        type: {
            $regex: new RegExp(ctx.request.query.type)
        }
    }).then(rel => {
        ctx.body = {
            code: 200,
            msg: "小说信息搜索成功",
            result: rel
        }
    }).catch(err => {
        ctx.body = {
            code: 400,
            msg: '小说信息搜索失败'
        }
        console.log(err);
    })
}

// const AllBooksAPI = async (ctx) => {
//     await AllBooks.find({
//         title: {
//             $regex: new RegExp(ctx.request.query.title)
//         }
//     }).then(rel => {
//         ctx.body = {
//             code: 200,
//             msg: "所有小说信息返回成功",
//             result: rel
//         }
//     }).catch(err => {
//         ctx.body = {
//             code: 400,
//             msg: '所有小说信息返回失败'
//         }
//         console.log(err);
//     })
// }

const AllBooksAPI = async (ctx) => {
    let pageSize = 10;
    let {
        currentPage
    } = ctx.request.query

    currentPage ?
        await AllBooks
        .find()
        .limit(pageSize)
        .skip(currentPage * (pageSize - 1)).find({
            title: {
                $regex: new RegExp(ctx.request.query.title)
            }
        }).then(rel => {
            ctx.body = {
                code: 200,
                msg: "小说信息分页返回成功",
                result: rel
            }
        }).catch(err => {
            ctx.body = {
                code: 400,
                msg: '小说信息分页返回失败'
            }
            console.log(err);
        }) :
        await AllBooks.find({
            title: {
                $regex: new RegExp(ctx.request.query.title)
            }
        }).then(rel => {
            ctx.body = {
                code: 200,
                msg: "小说信息返回成功",
                result: rel
            }
        }).catch(err => {
            ctx.body = {
                code: 400,
                msg: '小说信息返回失败'
            }
            console.log(err);
        })


}

// 删除小说
const DeleteBookAPI = async (ctx) => {
    let {
        title
    } = ctx.request.body //删除的title
    await AllBooks.findOneAndDelete({
        title: {
            $regex: new RegExp(ctx.request.query.title)
        }
    }).then(rel => {
        ctx.body = {
            msg: '书籍:' + rel.title + '已被删除',
            result: rel.title
        }
    }).catch(err => {
        ctx.body = {
            code: 400,
            msg: '删除书籍时出现异常'
        }
        console.log(err);
    })
}

//添加小说
const AddBookAPI = async (ctx) => {
    let {
        title,
        type,
        author,
        desc
    } = ctx.request.query

    let isDouble = false

    await AllBooks.findOne({
        title: {
            $regex: new RegExp(ctx.request.query.title)
        }
    }).then(rel => {
        if (rel) isDouble = true
    })

    if (isDouble) {
        ctx.body = {
            code: 300,
            msg: '该书名已存在'
        }
        return false
    }
    await AllBooks.create({ //User.create是异步操作，先触发响应，才存入数据库，所以需要异步操作,否则会Notfound
        title: title,
        type: type,
        author: author,
        desc: desc
    }).then(rel => {
        if (rel) {
            ctx.body = {
                code: 200,
                msg: '添加书籍成功',
                data: rel
            }
        } else {
            ctx.body = {
                code: 300,
                msg: '添加书籍失败，请填写书籍信息'
            }
        }
    }).catch(err => {
        ctx.body = {
            code: 500,
            msg: '添加书籍时出现异常',
            err
        }
    })
}

module.exports = {
    userAdd,
    userUpdate,
    userDel,
    userFind,
    login,
    moviesAPI,
    popFreeAPI,
    newFreeAPI,
    RankAPI,
    ChiefRecommendAPI,
    FinishAPI,
    GodsNewAPI,
    LatestAPI,
    RedBooksAPI,
    SellWellAPI,
    SearchAPI,
    AllBooksAPI,
    TypeAPI,
    DeleteBookAPI,
    AddBookAPI
}