"use strict";

// let jwt = require('jsonwebtoken')
// import request form 'request';
var _require = require('../models'),
    User = _require.User,
    Movie = _require.Movie,
    PopFree = _require.PopFree,
    NewFree = _require.NewFree,
    Rank = _require.Rank,
    ChiefRecommend = _require.ChiefRecommend,
    Finish = _require.Finish,
    GodsNew = _require.GodsNew,
    Latest = _require.Latest,
    RedBooks = _require.RedBooks,
    SellWell = _require.SellWell,
    AllBooks = _require.AllBooks; //解构模型对象
//注册


var userAdd = function userAdd(ctx) {
  var _ctx$request$query, username, pwd, isDouble;

  return regeneratorRuntime.async(function userAdd$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _ctx$request$query = ctx.request.query, username = _ctx$request$query.username, pwd = _ctx$request$query.pwd;
          isDouble = false;
          _context.next = 4;
          return regeneratorRuntime.awrap(User.findOne({
            username: username,
            pwd: pwd
          }).then(function (rel) {
            if (rel) isDouble = true;
          }));

        case 4:
          if (!isDouble) {
            _context.next = 7;
            break;
          }

          ctx.body = {
            code: 300,
            msg: '用户名已存在'
          };
          return _context.abrupt("return", false);

        case 7:
          _context.next = 9;
          return regeneratorRuntime.awrap(User.create({
            //User.create是异步操作，先触发响应，才存入数据库，所以需要异步操作,否则会Notfound
            username: username,
            pwd: pwd
          }).then(function (rel) {
            if (rel) {
              ctx.body = {
                code: 200,
                msg: '注册成功',
                data: rel
              };
            } else {
              ctx.body = {
                code: 300,
                msg: '注册失败，请填写注册信息'
              };
            }
          })["catch"](function (err) {
            ctx.body = {
              code: 500,
              msg: '注册用户时出现异常',
              err: err
            };
          }));

        case 9:
        case "end":
          return _context.stop();
      }
    }
  });
}; //找回密码


var userUpdate = function userUpdate(ctx) {
  var params;
  return regeneratorRuntime.async(function userUpdate$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          params = ctx.request.body; //修改后的参数

          _context2.next = 3;
          return regeneratorRuntime.awrap(User.updateOne({
            _id: params._id
          }, {
            username: params.username,
            pwd: params.pwd
          }).then(function (rel) {
            ctx.body = {
              result: rel
            };
          })["catch"](function (err) {
            ctx.body = {
              code: 400,
              msg: '修改用户时出现异常'
            };
            console.error(err);
          }));

        case 3:
        case "end":
          return _context2.stop();
      }
    }
  });
}; // 删除用户


var userDel = function userDel(ctx) {
  var username;
  return regeneratorRuntime.async(function userDel$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          username = ctx.request.body.username; //

          _context3.next = 3;
          return regeneratorRuntime.awrap(User.findOneAndDelete({
            username: {
              $regex: new RegExp(ctx.request.query.username)
            }
          }).then(function (rel) {
            ctx.body = {
              msg: '用户名为' + rel.username + '的用户已被删除',
              result: rel.username //将被删除的用户数据以对象形式返回

            };
          })["catch"](function (err) {
            ctx.body = {
              code: 400,
              msg: '删除用户时出现异常'
            };
            console.log(err);
          }));

        case 3:
        case "end":
          return _context3.stop();
      }
    }
  });
}; // 查询所有用户


var userFind = function userFind(ctx) {
  return regeneratorRuntime.async(function userFind$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return regeneratorRuntime.awrap(User.find().then(function (rel) {
            ctx.body = {
              result: rel
            };
          })["catch"](function (err) {
            ctx.body = {
              code: 400,
              msg: '查询时出现异常'
            };
            console.log(err);
          }));

        case 2:
        case "end":
          return _context4.stop();
      }
    }
  });
}; //登陆


var login = function login(ctx) {
  var uerInfo;
  return regeneratorRuntime.async(function login$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          uerInfo = {
            username: ctx.request.username,
            pwd: ctx.request.pwd
          };
          _context5.next = 3;
          return regeneratorRuntime.awrap(User.findOne(uerInfo).then(function (rel) {
            if (rel) {
              ctx.body = {
                code: 200,
                msg: '登陆成功'
              };
            } else {
              ctx.body = {
                code: 300,
                msg: '用户名或密码错误，请重新输入'
              };
            }
          })["catch"](function (err) {
            ctx.body = {
              code: 400,
              msg: '登陆时出现异常'
            };
            console.log(err);
          }));

        case 3:
        case "end":
          return _context5.stop();
      }
    }
  });
};

var moviesAPI = function moviesAPI(ctx) {
  return regeneratorRuntime.async(function moviesAPI$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return regeneratorRuntime.awrap(Movie.find().then(function (rel) {
            // 对模型对象进行请求
            ctx.body = {
              code: 200,
              msg: "电影信息获取成功",
              result: rel // 为什么返回rel为空数组 ? ,

            };
          })["catch"](function (err) {
            ctx.body = {
              code: 400,
              msg: '电影信息获取失败'
            };
            console.log(err);
          }));

        case 2:
        case "end":
          return _context6.stop();
      }
    }
  });
}; // 流行免费小说 


var popFreeAPI = function popFreeAPI(ctx) {
  return regeneratorRuntime.async(function popFreeAPI$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return regeneratorRuntime.awrap(PopFree.find().then(function (rel) {
            // 对模型对象进行请求
            ctx.body = {
              code: 200,
              msg: "流行免费小说信息(/主页免费)获取成功",
              result: rel
            };
          })["catch"](function (err) {
            ctx.body = {
              code: 400,
              msg: '流行免费小说信息获取失败'
            };
            console.log(err);
          }));

        case 2:
        case "end":
          return _context7.stop();
      }
    }
  });
};

var newFreeAPI = function newFreeAPI(ctx) {
  return regeneratorRuntime.async(function newFreeAPI$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return regeneratorRuntime.awrap(NewFree.find().then(function (rel) {
            // 对模型对象进行请求
            ctx.body = {
              code: 200,
              msg: "最新免费小说信息获取成功",
              result: rel
            };
          })["catch"](function (err) {
            ctx.body = {
              code: 400,
              msg: '最新免费小说信息获取失败'
            };
            console.log(err);
          }));

        case 2:
        case "end":
          return _context8.stop();
      }
    }
  });
};

var RankAPI = function RankAPI(ctx) {
  return regeneratorRuntime.async(function RankAPI$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.next = 2;
          return regeneratorRuntime.awrap(Rank.find().sort({
            //排序
            "rank": 1
          }).then(function (rel) {
            // 对模型对象进行请求
            ctx.body = {
              code: 200,
              msg: "小说排行信息获取成功",
              result: rel
            };
          })["catch"](function (err) {
            ctx.body = {
              code: 400,
              msg: '小说排行信息获取失败'
            };
            console.log(err);
          }));

        case 2:
        case "end":
          return _context9.stop();
      }
    }
  });
};

var ChiefRecommendAPI = function ChiefRecommendAPI(ctx) {
  return regeneratorRuntime.async(function ChiefRecommendAPI$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          _context10.next = 2;
          return regeneratorRuntime.awrap(ChiefRecommend.find().then(function (rel) {
            // 对模型对象进行请求
            ctx.body = {
              code: 200,
              msg: "编辑推荐小说信息获取成功",
              result: rel
            };
          })["catch"](function (err) {
            ctx.body = {
              code: 400,
              msg: '编辑推荐小说信息获取失败'
            };
            console.log(err);
          }));

        case 2:
        case "end":
          return _context10.stop();
      }
    }
  });
};

var FinishAPI = function FinishAPI(ctx) {
  return regeneratorRuntime.async(function FinishAPI$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          _context11.next = 2;
          return regeneratorRuntime.awrap(Finish.find().then(function (rel) {
            // 对模型对象进行请求
            ctx.body = {
              code: 200,
              msg: "完本小说信息获取成功",
              result: rel
            };
          })["catch"](function (err) {
            ctx.body = {
              code: 400,
              msg: '完本小说信息获取失败'
            };
            console.log(err);
          }));

        case 2:
        case "end":
          return _context11.stop();
      }
    }
  });
};

var SellWellAPI = function SellWellAPI(ctx) {
  return regeneratorRuntime.async(function SellWellAPI$(_context12) {
    while (1) {
      switch (_context12.prev = _context12.next) {
        case 0:
          _context12.next = 2;
          return regeneratorRuntime.awrap(SellWell.find().then(function (rel) {
            // 对模型对象进行请求
            ctx.body = {
              code: 200,
              msg: "畅销小说信息获取成功",
              result: rel
            };
          })["catch"](function (err) {
            ctx.body = {
              code: 400,
              msg: '畅销小说信息获取失败'
            };
            console.log(err);
          }));

        case 2:
        case "end":
          return _context12.stop();
      }
    }
  });
};

var GodsNewAPI = function GodsNewAPI(ctx) {
  return regeneratorRuntime.async(function GodsNewAPI$(_context13) {
    while (1) {
      switch (_context13.prev = _context13.next) {
        case 0:
          _context13.next = 2;
          return regeneratorRuntime.awrap(GodsNew.find().then(function (rel) {
            // 对模型对象进行请求
            ctx.body = {
              code: 200,
              msg: "大神新书信息获取成功",
              result: rel
            };
          })["catch"](function (err) {
            ctx.body = {
              code: 400,
              msg: '大神新书小说信息获取失败'
            };
            console.log(err);
          }));

        case 2:
        case "end":
          return _context13.stop();
      }
    }
  });
};

var LatestAPI = function LatestAPI(ctx) {
  return regeneratorRuntime.async(function LatestAPI$(_context14) {
    while (1) {
      switch (_context14.prev = _context14.next) {
        case 0:
          _context14.next = 2;
          return regeneratorRuntime.awrap(Latest.find().then(function (rel) {
            // 对模型对象进行请求
            ctx.body = {
              code: 200,
              msg: "最新上架小说信息获取成功",
              result: rel
            };
          })["catch"](function (err) {
            ctx.body = {
              code: 400,
              msg: '最新上架小说信息获取失败'
            };
            console.log(err);
          }));

        case 2:
        case "end":
          return _context14.stop();
      }
    }
  });
};

var RedBooksAPI = function RedBooksAPI(ctx) {
  return regeneratorRuntime.async(function RedBooksAPI$(_context15) {
    while (1) {
      switch (_context15.prev = _context15.next) {
        case 0:
          _context15.next = 2;
          return regeneratorRuntime.awrap(RedBooks.find().then(function (rel) {
            // 对模型对象进行请求
            ctx.body = {
              code: 200,
              msg: "一品红文小说信息获取成功",
              result: rel
            };
          })["catch"](function (err) {
            ctx.body = {
              code: 400,
              msg: '一品红文小说信息获取失败'
            };
            console.log(err);
          }));

        case 2:
        case "end":
          return _context15.stop();
      }
    }
  });
};

var SearchAPI = function SearchAPI(ctx) {
  return regeneratorRuntime.async(function SearchAPI$(_context16) {
    while (1) {
      switch (_context16.prev = _context16.next) {
        case 0:
          _context16.next = 2;
          return regeneratorRuntime.awrap(AllBooks.find({
            title: {
              $regex: new RegExp(ctx.request.query.title)
            }
          }).then(function (rel) {
            ctx.body = {
              code: 200,
              msg: "小说信息搜索成功",
              result: rel
            };
          })["catch"](function (err) {
            ctx.body = {
              code: 400,
              msg: '小说信息搜索失败'
            };
            console.log(err);
          }));

        case 2:
        case "end":
          return _context16.stop();
      }
    }
  });
};

var TypeAPI = function TypeAPI(ctx) {
  return regeneratorRuntime.async(function TypeAPI$(_context17) {
    while (1) {
      switch (_context17.prev = _context17.next) {
        case 0:
          _context17.next = 2;
          return regeneratorRuntime.awrap(AllBooks.find({
            type: {
              $regex: new RegExp(ctx.request.query.type)
            }
          }).then(function (rel) {
            ctx.body = {
              code: 200,
              msg: "小说信息搜索成功",
              result: rel
            };
          })["catch"](function (err) {
            ctx.body = {
              code: 400,
              msg: '小说信息搜索失败'
            };
            console.log(err);
          }));

        case 2:
        case "end":
          return _context17.stop();
      }
    }
  });
}; // const AllBooksAPI = async (ctx) => {
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


var AllBooksAPI = function AllBooksAPI(ctx) {
  var pageSize, currentPage;
  return regeneratorRuntime.async(function AllBooksAPI$(_context18) {
    while (1) {
      switch (_context18.prev = _context18.next) {
        case 0:
          pageSize = 10;
          currentPage = ctx.request.query.currentPage;

          if (!currentPage) {
            _context18.next = 7;
            break;
          }

          _context18.next = 5;
          return regeneratorRuntime.awrap(AllBooks.find().limit(pageSize).skip(currentPage * (pageSize - 1)).find({
            title: {
              $regex: new RegExp(ctx.request.query.title)
            }
          }).then(function (rel) {
            ctx.body = {
              code: 200,
              msg: "小说信息分页返回成功",
              result: rel
            };
          })["catch"](function (err) {
            ctx.body = {
              code: 400,
              msg: '小说信息分页返回失败'
            };
            console.log(err);
          }));

        case 5:
          _context18.next = 9;
          break;

        case 7:
          _context18.next = 9;
          return regeneratorRuntime.awrap(AllBooks.find({
            title: {
              $regex: new RegExp(ctx.request.query.title)
            }
          }).then(function (rel) {
            ctx.body = {
              code: 200,
              msg: "小说信息返回成功",
              result: rel
            };
          })["catch"](function (err) {
            ctx.body = {
              code: 400,
              msg: '小说信息返回失败'
            };
            console.log(err);
          }));

        case 9:
        case "end":
          return _context18.stop();
      }
    }
  });
}; // 删除小说


var DeleteBookAPI = function DeleteBookAPI(ctx) {
  var title;
  return regeneratorRuntime.async(function DeleteBookAPI$(_context19) {
    while (1) {
      switch (_context19.prev = _context19.next) {
        case 0:
          title = ctx.request.body.title; //删除的title

          _context19.next = 3;
          return regeneratorRuntime.awrap(AllBooks.findOneAndDelete({
            title: {
              $regex: new RegExp(ctx.request.query.title)
            }
          }).then(function (rel) {
            ctx.body = {
              msg: '书籍:' + rel.title + '已被删除',
              result: rel.title
            };
          })["catch"](function (err) {
            ctx.body = {
              code: 400,
              msg: '删除书籍时出现异常'
            };
            console.log(err);
          }));

        case 3:
        case "end":
          return _context19.stop();
      }
    }
  });
}; //添加小说


var AddBookAPI = function AddBookAPI(ctx) {
  var _ctx$request$query2, title, type, author, desc, isDouble;

  return regeneratorRuntime.async(function AddBookAPI$(_context20) {
    while (1) {
      switch (_context20.prev = _context20.next) {
        case 0:
          _ctx$request$query2 = ctx.request.query, title = _ctx$request$query2.title, type = _ctx$request$query2.type, author = _ctx$request$query2.author, desc = _ctx$request$query2.desc;
          isDouble = false;
          _context20.next = 4;
          return regeneratorRuntime.awrap(AllBooks.findOne({
            title: {
              $regex: new RegExp(ctx.request.query.title)
            }
          }).then(function (rel) {
            if (rel) isDouble = true;
          }));

        case 4:
          if (!isDouble) {
            _context20.next = 7;
            break;
          }

          ctx.body = {
            code: 300,
            msg: '该书名已存在'
          };
          return _context20.abrupt("return", false);

        case 7:
          _context20.next = 9;
          return regeneratorRuntime.awrap(AllBooks.create({
            //User.create是异步操作，先触发响应，才存入数据库，所以需要异步操作,否则会Notfound
            title: title,
            type: type,
            author: author,
            desc: desc
          }).then(function (rel) {
            if (rel) {
              ctx.body = {
                code: 200,
                msg: '添加书籍成功',
                data: rel
              };
            } else {
              ctx.body = {
                code: 300,
                msg: '添加书籍失败，请填写书籍信息'
              };
            }
          })["catch"](function (err) {
            ctx.body = {
              code: 500,
              msg: '添加书籍时出现异常',
              err: err
            };
          }));

        case 9:
        case "end":
          return _context20.stop();
      }
    }
  });
};

module.exports = {
  userAdd: userAdd,
  userUpdate: userUpdate,
  userDel: userDel,
  userFind: userFind,
  login: login,
  moviesAPI: moviesAPI,
  popFreeAPI: popFreeAPI,
  newFreeAPI: newFreeAPI,
  RankAPI: RankAPI,
  ChiefRecommendAPI: ChiefRecommendAPI,
  FinishAPI: FinishAPI,
  GodsNewAPI: GodsNewAPI,
  LatestAPI: LatestAPI,
  RedBooksAPI: RedBooksAPI,
  SellWellAPI: SellWellAPI,
  SearchAPI: SearchAPI,
  AllBooksAPI: AllBooksAPI,
  TypeAPI: TypeAPI,
  DeleteBookAPI: DeleteBookAPI,
  AddBookAPI: AddBookAPI
};