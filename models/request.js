import axios from 'axios';
export const baseUrl = process.env.NODE_ENV === 'production' ?
  'http://10.3.134.78:3000' // 生产环境
  :
  'http://10.3.134.78:3000' // 开发环境
export const apiUrl = `${baseUrl}/api`
// 创建一个axios实例
const instance = axios.create({
  baseURL: apiUrl,
  withCredentials: true,
  // 这里的代码在当前文件被import时执行
  headers: {
    Authorization: null
  }
});

// 请求拦截（请求发出去前的操作）
instance.interceptors.request.use((config) => {
  // config：axios的配置参数
  let userInfo = localStorage.getItem("userInfo");
  try {
    userInfo = JSON.parse(userInfo) || {};
  } catch {
    userInfo = {};
  }
  config.headers.Authorization = userInfo.authorization;

  // 返回修改后的配置参数
  return config;
})

export default instance;