import * as Types from '../action-types';
import * as Service from '../../service/user';
import { requestParams } from '@/service/axios';

const state = {
  userInfo: {},
};

export default {
  namespaced: true,
  state,
  mutations: {
    [Types.LOGIN](state, payload) {
      state.userInfo = payload;
    },
  },
  actions: {
    async [Types.LOGIN]({ commit }, payload) {
      let { data } = await Service.login(payload);
      commit(Types.LOGIN, data);
      if (data.token) {
        requestParams.setToken(data.token);
      }
    },
  },
};
