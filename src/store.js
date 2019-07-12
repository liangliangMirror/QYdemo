import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    harde: true,
    historyl: [],
  },
  mutations: {
    typehead(state, type) {
      state.harde = type;
      console.log(state.harde)
    },
    pushhistory(state, name) {
      state.historyl.push(name);
    }
  },
  actions: {

  }
})
