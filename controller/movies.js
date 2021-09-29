const {
    Movie
} = require('../models') //解构模型对象


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


module.exports = {
    moviesAPI
}