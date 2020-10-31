import axios from 'axios';
import { getVaildParams } from '@/utils/index';
import { message } from 'ant-design-vue';
import { Storage } from '../utils/index';

const jsonType = {
  'Content-Type': 'application/json;charset=UTF-8',
};

export const requestParams = {
  token: Storage.getLocalItem('TOKEN'),
};

/**
 * 测试
 * 正式
 */
const devDomain = 'https://gangqinpu.yusi.tv';
const prodDomain = 'http://localhost:8080';

axios.defaults.baseURL = prodDomain;

axios.interceptors.request.use(request => {
  // 此处设置token
  if (requestParams.token) {
    request.headers['token'] = requestParams.token;
  } else if (request.url !== '/login') {
    window.location.hash = '/login';
  }
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
