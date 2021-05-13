import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    selectedInfo: 0
  },
  getters: {
    selectedInfo(state) {
      return state.selectedInfo;
    }
  },
  mutations: {
    setSeletedInfo(state, payload) {
      state.selectedInfo = payload;
    }
  },
  actions: {
    setSelectedInfoAction(context, payload) {
      if (context.state.selectedInfo === payload) {
        context.commit('setSeletedInfo', 0);
      } else {
        context.commit('setSeletedInfo', payload);
      }
    }
  },
  modules: {
  }
});
