import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    harde: true,
    historyl: [],
    value: null,
    city: "", //自动定位
  },
  mutations: {
    typehead(state, type) {
      state.harde = type;
    },
    pushhistory(state, name) {
      state.historyl.push(name);
    },
    inputvalue(state, value) {
      state.value = value;
    },
    citys(state, city) {
      state.city = city;
    }
  },
  actions: {

  }
})
