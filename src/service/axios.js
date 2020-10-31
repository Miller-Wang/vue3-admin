import axios from 'axios';
import qs from 'qs';
import { getVaildParams } from '@/utils/index';
import { message } from 'ant-design-vue';

const jsonType = {
  'Content-Type': 'application/json;charset=UTF-8',
};
const formDataType = {
  'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
};

/**
 * 测试
 * 正式
 */
const devDomain = 'https://gangqinpu.yusi.tv';
const prodDomain = 'https://gangqinpu.yusi.tv';

axios.defaults.baseURL = devDomain;

axios.interceptors.request.use(request => {
  // 此处设置header
  if (request.data && request.headers['Content-Type'] === formDataType['Content-Type'])
    request.data = qs.stringify(request.data);
  return request;
});

axios.interceptors.response.use(response => {
  let { data, status } = response;
  if (status === 200) {
    if (typeof data === 'string') {
      message.error('返回数据格式有误');
      return;
    }
    // 未登录
    if (data.returnCode === '-1014') {
      location.hash = '/login';
    }
    return data;
  } else {
    message.error('网络错误');
  }
});

const oldPost = axios.post;
const oldGet = axios.get;

// 重写post和get方法
axios.post = (url, params = {}) => oldPost(url, getVaildParams(params), { jsonType });
axios.get = (url, resData = {}) => oldGet(url, { params: getVaildParams(resData) });

export default axios;
