import axios from 'axios';
import qs from 'qs';
import { getVaildParams } from './index';

const jsonType = {
  'Content-Type': 'application/json;charset=UTF-8',
};
const formDataType = {
  'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
};

/**
 * 测服域名 http://ccgq.netshi.cn/
 * 正服域名 https://gangqinpu.yusi.tv/
 */

// axios.defaults.baseURL = 'http://ccgq.netshi.cn';
axios.defaults.baseURL = 'https://gangqinpu.yusi.tv';

axios.interceptors.request.use(request => {
  if (commonParams.uid) {
    request.url += `&uid=${commonParams.uid}`;
  }
  if (request.data && request.headers['Content-Type'] === formDataType['Content-Type'])
    request.data = qs.stringify(request.data);
  return request;
});

axios.interceptors.response.use(response => {
  let { data, status } = response;
  if (status === 200) {
    if (typeof data === 'string') {
      window.vm.$message.error({
        message: '返回数据格式有误',
        showClose: true,
      });
      return;
    }
    // 未登录
    if (data.returnCode === '-1014') {
      location.hash = '/login';
    }
    return data;
  } else {
    window.vm.$message.error({ message: '网络错误', showClose: true });
  }
});

axios.postJson = (url, params = {}) => axios.post(url, getVaildParams(params), { jsonType });

axios.getData = (url, resData = {}) => axios.get(url, { params: getVaildParams(resData) });

export default axios;
