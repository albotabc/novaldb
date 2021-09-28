"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.apiUrl = exports.baseUrl = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var baseUrl = process.env.NODE_ENV === 'production' ? 'http://10.3.134.78:3000' // 生产环境
: 'http://10.3.134.78:3000'; // 开发环境

exports.baseUrl = baseUrl;
var apiUrl = "".concat(baseUrl, "/api"); // 创建一个axios实例

exports.apiUrl = apiUrl;

var instance = _axios["default"].create({
  baseURL: apiUrl,
  withCredentials: true,
  // 这里的代码在当前文件被import时执行
  headers: {
    Authorization: null
  }
}); // 请求拦截（请求发出去前的操作）


instance.interceptors.request.use(function (config) {
  // config：axios的配置参数
  var userInfo = localStorage.getItem("userInfo");

  try {
    userInfo = JSON.parse(userInfo) || {};
  } catch (_unused) {
    userInfo = {};
  }

  config.headers.Authorization = userInfo.authorization; // 返回修改后的配置参数

  return config;
});
var _default = instance;
exports["default"] = _default;