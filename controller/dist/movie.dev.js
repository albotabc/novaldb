"use strict";

var _require = require('../models'),
    User = _require.User; //注册


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

module.exports = {
  userAdd: userAdd,
  userUpdate: userUpdate,
  userDel: userDel,
  userFind: userFind,
  login: login
};