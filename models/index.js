// 创建模型对象
const mongoose = require('mongoose')


// 用户模型对象
const userSchema = new mongoose.Schema({
    username: String,
    pwd: String
})

const moviesSchema = new mongoose.Schema({
    pic: String,
    title: String,
    type: String,
    actors: String,
    date: String,
    score: String,
    url: String
})

// 小说模型对象
const novelSchema = new mongoose.Schema({
    pic: String,
    title: String,
    desc: String,
    author: String,
    type: String,
    hots: String,
    href: String,
    page: Number
})


// model(模型名,Models/Schema对象的构造函数,表名)
const User = mongoose.model('users', userSchema, 'users')
const Movie = mongoose.model('movies', moviesSchema, 'movies')
const PopFree = mongoose.model('popFrees', novelSchema, 'popFrees')
const NewFree = mongoose.model('newFrees', novelSchema, 'newFrees')
const Rank = mongoose.model('ranks', novelSchema, 'ranks');
const ChiefRecommend = mongoose.model('chiefRecommends', novelSchema, 'chiefRecommends');
const Finish = mongoose.model('finishs', novelSchema, 'finishs');
const GodsNew = mongoose.model('godsNews', novelSchema, 'godsNews');
const Latest = mongoose.model('latests', novelSchema, 'latests');
const RedBooks = mongoose.model('reds', novelSchema, 'reds');
const SellWell = mongoose.model('sellWells', novelSchema, 'sellWells');
const AllBooks = mongoose.model('allBooks', novelSchema, 'allBooks');

// 抛出模型对象
module.exports = {
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
}