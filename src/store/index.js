import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    demo:'123'
  },
  mutations: {
    setDemo(store,v){
      store.demo=v
    }
  },
  actions: {
  },
  modules: {
  }
})
