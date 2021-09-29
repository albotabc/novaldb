"use strict";

var _require = require('../models'),
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


var moviesAPI = function moviesAPI(ctx) {
  return regeneratorRuntime.async(function moviesAPI$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
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
          return _context.stop();
      }
    }
  });
}; // 流行免费小说 


var popFreeAPI = function popFreeAPI(ctx) {
  return regeneratorRuntime.async(function popFreeAPI$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
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
          return _context2.stop();
      }
    }
  });
};

var newFreeAPI = function newFreeAPI(ctx) {
  return regeneratorRuntime.async(function newFreeAPI$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
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
          return _context3.stop();
      }
    }
  });
};

var RankAPI = function RankAPI(ctx) {
  return regeneratorRuntime.async(function RankAPI$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
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
          return _context4.stop();
      }
    }
  });
};

var ChiefRecommendAPI = function ChiefRecommendAPI(ctx) {
  return regeneratorRuntime.async(function ChiefRecommendAPI$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
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
          return _context5.stop();
      }
    }
  });
};

var FinishAPI = function FinishAPI(ctx) {
  return regeneratorRuntime.async(function FinishAPI$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
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
          return _context6.stop();
      }
    }
  });
};

var SellWellAPI = function SellWellAPI(ctx) {
  return regeneratorRuntime.async(function SellWellAPI$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
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
          return _context7.stop();
      }
    }
  });
};

var GodsNewAPI = function GodsNewAPI(ctx) {
  return regeneratorRuntime.async(function GodsNewAPI$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
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
          return _context8.stop();
      }
    }
  });
};

var LatestAPI = function LatestAPI(ctx) {
  return regeneratorRuntime.async(function LatestAPI$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.next = 2;
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
          return _context9.stop();
      }
    }
  });
};

var RedBooksAPI = function RedBooksAPI(ctx) {
  return regeneratorRuntime.async(function RedBooksAPI$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          _context10.next = 2;
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
          return _context10.stop();
      }
    }
  });
};

var SearchAPI = function SearchAPI(ctx) {
  return regeneratorRuntime.async(function SearchAPI$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          _context11.next = 2;
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
          return _context11.stop();
      }
    }
  });
};

var TypeAPI = function TypeAPI(ctx) {
  return regeneratorRuntime.async(function TypeAPI$(_context12) {
    while (1) {
      switch (_context12.prev = _context12.next) {
        case 0:
          _context12.next = 2;
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
          return _context12.stop();
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
  return regeneratorRuntime.async(function AllBooksAPI$(_context13) {
    while (1) {
      switch (_context13.prev = _context13.next) {
        case 0:
          pageSize = 10;
          currentPage = ctx.request.query.currentPage;

          if (!currentPage) {
            _context13.next = 7;
            break;
          }

          _context13.next = 5;
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
          _context13.next = 9;
          break;

        case 7:
          _context13.next = 9;
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
          return _context13.stop();
      }
    }
  });
}; // 删除小说


var DeleteBookAPI = function DeleteBookAPI(ctx) {
  var title;
  return regeneratorRuntime.async(function DeleteBookAPI$(_context14) {
    while (1) {
      switch (_context14.prev = _context14.next) {
        case 0:
          title = ctx.request.body.title; //删除的title

          _context14.next = 3;
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
          return _context14.stop();
      }
    }
  });
}; //添加小说


var AddBookAPI = function AddBookAPI(ctx) {
  var _ctx$request$query, title, type, author, desc, isDouble;

  return regeneratorRuntime.async(function AddBookAPI$(_context15) {
    while (1) {
      switch (_context15.prev = _context15.next) {
        case 0:
          _ctx$request$query = ctx.request.query, title = _ctx$request$query.title, type = _ctx$request$query.type, author = _ctx$request$query.author, desc = _ctx$request$query.desc;
          isDouble = false;
          _context15.next = 4;
          return regeneratorRuntime.awrap(AllBooks.findOne({
            title: {
              $regex: new RegExp(ctx.request.query.title)
            }
          }).then(function (rel) {
            if (rel) isDouble = true;
          }));

        case 4:
          if (!isDouble) {
            _context15.next = 7;
            break;
          }

          ctx.body = {
            code: 300,
            msg: '该书名已存在'
          };
          return _context15.abrupt("return", false);

        case 7:
          _context15.next = 9;
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
          return _context15.stop();
      }
    }
  });
}; //修改书籍信息


var EditBookAPI = function EditBookAPI(ctx) {
  return regeneratorRuntime.async(function EditBookAPI$(_context16) {
    while (1) {
      switch (_context16.prev = _context16.next) {
        case 0:
          _context16.next = 2;
          return regeneratorRuntime.awrap(AllBooks.updateOne({
            id: ctx.params.id
          }, {
            title: ctx.request.body.title,
            type: ctx.request.body.type,
            author: ctx.request.body.author,
            desc: ctx.request.body.desc
          }).then(function (rel) {
            console.log('查询所用的id:', ctx.params, '修改后的title:', ctx.request.body.title, 'ctx:', ctx);

            if (rel) {
              ctx.body = {
                code: 200,
                msg: '修改书籍信息成功,书籍信息更新如下：',
                result: {
                  title: "".concat(ctx.request.body.title),
                  type: "".concat(ctx.request.body.type),
                  author: "".concat(ctx.request.body.author),
                  desc: "".concat(ctx.request.body.desc)
                },
                rel: rel
              };
            } else {
              ctx.body = {
                code: 300,
                msg: '修改书籍信息失败，请填写书籍信息'
              };
            }
          })["catch"](function (err) {
            ctx.body = {
              code: 300,
              msg: "\u4FEE\u6539\u4E66\u7C4D\u4FE1\u606F\u5931\u8D25\uFF0C\u4E0D\u5B58\u5728id\u4E3A:".concat(ctx.params.id, "\u7684\u4E66\u7C4D"),
              err: err
            };
          }));

        case 2:
        case "end":
          return _context16.stop();
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
  AddBookAPI: AddBookAPI,
  EditBookAPI: EditBookAPI
};