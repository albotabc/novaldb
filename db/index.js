const mongoose = require('mongoose');

module.exports = () => {
    mongoose.connect('mongodb://localhost:27017/dataDB', {
        useUnifiedTopology: true, // 自动创建新集合
        useNewUrlParser: true //使用新的Url解析器
    }).then(() => {
        console.log('mongoDB连接成功')
    }).catch(err => {
        console.error('连接失败', err)
    })
}