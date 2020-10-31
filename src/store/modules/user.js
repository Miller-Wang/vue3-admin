import * as Types from '../action-types';

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
    async [Types.LOGIN]({ commit }) {
      console.log(commit);
      // let sliders = await getSliders<ISlider[]>();
      // commit(Types.SET_SLIDER_LIST, sliders);
    },
  },
};
