"use strict";

// 创建模型对象
var mongoose = require('mongoose'); // 用户模型对象


var userSchema = new mongoose.Schema({
  username: String,
  pwd: String
});
var moviesSchema = new mongoose.Schema({
  pic: String,
  title: String,
  type: String,
  actors: String,
  date: String,
  score: String,
  url: String
}); // 小说模型对象

var novelSchema = new mongoose.Schema({
  pic: String,
  title: String,
  desc: String,
  author: String,
  type: String,
  hots: String,
  href: String,
  page: Number
}); // model(模型名,Models/Schema对象的构造函数,表名)

var User = mongoose.model('users', userSchema, 'users');
var Movie = mongoose.model('movies', moviesSchema, 'movies');
var PopFree = mongoose.model('popFrees', novelSchema, 'popFrees');
var NewFree = mongoose.model('newFrees', novelSchema, 'newFrees');
var Rank = mongoose.model('ranks', novelSchema, 'ranks');
var ChiefRecommend = mongoose.model('chiefRecommends', novelSchema, 'chiefRecommends');
var Finish = mongoose.model('finishs', novelSchema, 'finishs');
var GodsNew = mongoose.model('godsNews', novelSchema, 'godsNews');
var Latest = mongoose.model('latests', novelSchema, 'latests');
var RedBooks = mongoose.model('reds', novelSchema, 'reds');
var SellWell = mongoose.model('sellWells', novelSchema, 'sellWells');
var AllBooks = mongoose.model('allBooks', novelSchema, 'allBooks'); // 抛出模型对象

module.exports = {
  User: User,
  Movie: Movie,
  PopFree: PopFree,
  NewFree: NewFree,
  Rank: Rank,
  ChiefRecommend: ChiefRecommend,
  Finish: Finish,
  GodsNew: GodsNew,
  Latest: Latest,
  RedBooks: RedBooks,
  SellWell: SellWell,
  AllBooks: AllBooks
};