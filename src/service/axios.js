import axios from 'axios';
import { getVaildParams } from '@/utils/index';
import { message } from 'ant-design-vue';
import { Storage } from '../utils/index';

const jsonType = {
  'Content-Type': 'application/json;charset=UTF-8',
};

export const requestParams = {
  _token: Storage.getLocalItem('TOKEN'),
  setToken: function(token) {
    Storage.setLocalItem('TOKEN', token);
    this._token = token;
  },
  getToken: function() {
    return this._token;
  },
};

/**
 * 测试
 * 正式
 */
const devDomain = 'https://www.test.com';
const prodDomain = 'http://localhost:8080';

axios.defaults.baseURL = prodDomain;

axios.interceptors.request.use(request => {
  if (request.url === '/login') return request;
  // 未登录 => 到登录页面
  // if (requestParams.getToken()) {
  //   // 设置token
  //   request.headers['token'] = requestParams.getToken();
  // } else {
  //   window.location.hash = '/login';
  // }
  return request;
});

axios.interceptors.response.use(response => {
  let { data } = response;

  if (data && data.code === 0) {
    return data;
  } else {
    message.error(data.data || data.message);
  }
});

const oldPost = axios.post;
const oldGet = axios.get;

// 重写post和get方法
axios.post = (url, params = {}) => oldPost(url, getVaildParams(params), { jsonType });
axios.get = (url, resData = {}) => oldGet(url, { params: getVaildParams(resData) });

export default axios;
