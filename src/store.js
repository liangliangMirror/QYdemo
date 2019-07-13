import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    harde: true,
    historyl: {
      arr: [],
      pinyin: [],
    },
    value: null,
    city: "", //自动定位
  },
  mutations: {
    typehead(state, type) {
      state.harde = type;
    },
    pushhistory(state, name) {
      if (name.name != "") {
        if (state.historyl.arr.indexOf(name.name) < 0) {
          state.historyl.arr.unshift(name.name);
          state.historyl.pinyin.unshift(name.pinyin);
          if (state.historyl.arr.length > 6) {
            state.historyl.arr.length -= 1;
            state.historyl.pinyin.length -= 1;
          }
        }
      }

      window.localStorage.setItem("pinyin", state.historyl.pinyin);
      window.localStorage.setItem("historyl", state.historyl.arr);
    },
    inputvalue(state, value) {
      state.value = value;
    },
    citys(state, city) {
      state.city = city;
    }
  },
  actions: {
    pushhistorys(context) {
      let pinyins = window.localStorage
        .getItem("pinyin")
        .split(",")
      window.localStorage
        .getItem("historyl")
        .split(",")
        .forEach((item, index) => {
          context.commit('pushhistory', {
            name: item,
            pinyin: pinyins[index]
          })
        });

    }
  }
})
