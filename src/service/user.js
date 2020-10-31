// 用户相关接口
import axios from './axios';

export const getList = params => axios.get(`/?urlparam=home/cms/cmsUserList`, params);

export const login = params => axios.post(`/users/login`, params);

export const userList = params => axios.get(`/users`, params);
