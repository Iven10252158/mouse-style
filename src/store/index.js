import { createStore } from 'vuex'

export default createStore({
  state: {
    isWait: false
  },
  mutations: {
    mouse (state, bool) {
      state.isWait = bool
      console.log(bool)
    }
  },
  actions: {
    mouse ({ commit }, bool) {
      commit('mouse', bool)
    }
  },
  getters: {
    isWait (state) {
      return state.isWait
    }
  },
  modules: {
  }
})
