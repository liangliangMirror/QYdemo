import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    harde: true,
  },
  mutations: {
    changeharde(state, type) {
      state.harde = type;
    }
  },
  actions: {

  }
})
